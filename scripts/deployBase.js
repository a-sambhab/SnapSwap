// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {
  encodeDeployData,
  encodeFunctionData,
  getContractAddress,
  toBytes,
} = require("viem");
const { baseGoerli } = require("viem/chains");
const {
  LocalAccountSigner,
  getDefaultEntryPointAddress,
} = require("@alchemy/aa-core");
const { AlchemyProvider } = require("@alchemy/aa-alchemy");
const {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} = require("@alchemy/aa-accounts");

const { setupPaymaster } = require("./setupPaymaster");

const {
  abi,
  bytecode,
} = require("../artifacts/contracts/SnapSwap.sol/SnapSwap.json");

const rpcUrl = process.env.BASE_GOERLI_ALCHEMY_API_URL;
const deployProxyAddr = process.env.DEPLOY_PROXY_ADDRESS;
const chain = baseGoerli;

async function main() {
  const publicClient = await hre.viem.getPublicClient();

  const localSigner = LocalAccountSigner.mnemonicToAccountSigner(
    process.env.MNEMONIC
  );

  const baseSigner = new AlchemyProvider({
    rpcUrl,
    chain,
    opts: {
      txMaxRetries: 60,
    },
  }).connect((provider) => {
    return new LightSmartContractAccount({
      chain,
      owner: localSigner,
      entryPointAddress: getDefaultEntryPointAddress(chain),
      factoryAddress: getDefaultLightAccountFactoryAddress(chain),
      rpcClient: provider,
    });
  });

  const smartAccountAddress = await baseSigner.getAddress();
  const smartAccountSigner = setupPaymaster(
    baseSigner,
    smartAccountAddress,
    chain.id
  );

  const conData = encodeDeployData({
    abi,
    bytecode,
  });

  const nonce = await smartAccountSigner.account.getNonce();
  const zeros =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  const nonceLength = String(nonce).length;
  const salt = zeros.slice(0, zeros.length - nonceLength) + String(nonce);
  console.log("salt", salt);

  const mintDeployTxnHash = await smartAccountSigner.sendTransaction({
    from: smartAccountAddress,
    to: deployProxyAddr,
    data: salt + conData.slice(2),
  });
  const newAddress = getContractAddress({
    bytecode: conData,
    from: deployProxyAddr,
    opcode: "CREATE2",
    salt: toBytes(salt),
  });

  console.log("deployed", mintDeployTxnHash, newAddress);

  const newValue = 123;
  const ans1 = await smartAccountSigner.sendTransaction({
    from: smartAccountAddress,
    to: newAddress,
    data: encodeFunctionData({
      abi,
      functionName: "sampleFunction1",
      args: ["0x1AF6321fcAd26f9899C23D47ca4590AD9f87A864", newValue],
    }),
  });

  await publicClient.waitForTransactionReceipt({ hash: ans1 });
  console.log("stored new value", newValue, ans1);
  const ans2 = await smartAccountSigner.sendTransaction({
    from: smartAccountAddress,
    to: newAddress,
    data: encodeFunctionData({
      abi,
      functionName: "sampleFunction2",
      args: ["0x1AF6321fcAd26f9899C23D47ca4590AD9f87A864", newValue],
    }),
  });

  await publicClient.waitForTransactionReceipt({ hash: ans1 });
  console.log("stored new value", newValue, ans2);
  const ans3 = await smartAccountSigner.sendTransaction({
    from: smartAccountAddress,
    to: newAddress,
    data: encodeFunctionData({
      abi,
      functionName: "sampleFunction3",
      args: ["0x1AF6321fcAd26f9899C23D47ca4590AD9f87A864", newValue],
    }),
  });

  await publicClient.waitForTransactionReceipt({ hash: ans1 });
  console.log("stored new value", newValue, ans3);

  const SnapSwapReadResult = await publicClient.readContract({
    address: newAddress,
    abi,
    functionName: "sampleFunction4",
    args: ["0x1AF6321fcAd26f9899C23D47ca4590AD9f87A864"],
  });
  console.log("new SnapSwap value", SnapSwapReadResult);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
