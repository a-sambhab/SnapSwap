import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import { useToken } from "wagmi";

const { Alchemy, Network } = require("alchemy-sdk");

export const Navbar = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [tokens, setTokens] = useState([]);

  const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.MATIC_MUMBAI,
  };
  const alchemy = new Alchemy(config);

  const main = async () => {
    // Wallet address
    const address = "0x02413120940F73Ca22249FDa88bde585823F8E02";

    // Get token balances
    const balances = await alchemy.core.getTokenBalances(address);

    // Remove tokens with zero balance
    const nonZeroBalances = balances.tokenBalances.filter((token) => {
      return token.tokenBalance !== "0";
    });

    // Counter for SNo of final output
    let i = 1;

    // Loop through all tokens with non-zero balance
    for (let token of nonZeroBalances) {
      // Get balance of token
      let balance = token.tokenBalance;

      // Get metadata of token
      const metadata = await alchemy.core.getTokenMetadata(
        token.contractAddress
      );

      // Compute token balance in human-readable format
      balance = balance / Math.pow(10, metadata.decimals);
      balance = Number(balance).toFixed(2);

      // Print name, balance, and symbol of token

      const obj = {
        name: metadata.name,
        symbol: metadata.symbol,
        balance: balance,
      };

      setTokens([...tokens, obj]);
    }
  };

  const runMain = async () => {
    try {
      await main();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    runMain();
  }, []);

  // console.log(tokens);

  return (
    <div className="flex  w-screen  items-center justify-between border-b-[0.005px] border-[#868686] px-12  py-2   text-white  md:text-[25px]">
      <div>
        <Link to="/">
          <h1 className="text-xl font-medium text-white hover:opacity-60 cursor:pointer">
            DSWAP{" "}
          </h1>
        </Link>
      </div>
      <div className="flex gap-6 justify-center items-center">
        {!isDisconnected && (
          <>
            <div>
              <Link to="/invest">
                <h1 className="text-sm font-medium text-[#18BB90] hover:opacity-60 cursor:pointer active:text-black">
                  MUTUAL FUNDS
                </h1>
              </Link>
            </div>
            <div>
              <Link to="/token">
                <h1 className="text-sm font-medium  text-white hover:opacity-60 cursor:pointer">
                  SWAP
                </h1>
              </Link>
            </div>
          </>
        )}

        {/* <button
          type="submit"
          className="  rounded-lg bg-[#18BB90]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
          // onClick={() => toast.loading(" Connecting")}
          // onClick={connectWallet}
        >
          Connect Wallet
        </button> */}
        <ConnectButton
          showBalance={true}
          chainStatus="icon"
          className="rounded-lg bg-[#18BB90]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
        />
      </div>
    </div>
  );
};
