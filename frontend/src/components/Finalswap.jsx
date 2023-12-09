import React from "react";
import { Link } from "react-router-dom";
import { usePublicClient } from "wagmi";
import { useAccount } from "wagmi";

export const Finalswap = () => {
  // const publicClient = usePublicClient({
  //   chainId: 1,
  // });
  // console.log(publicClient);
  const { address, isConnecting, isDisconnected } = useAccount();
  // console.log("Huu", isDisconnected);

  console.log(address);
  return (
    <div className=" mx-auto mt-12 flex h-[60vh] w-[50vw] flex-col justify-between rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91]	">
      <div className="flex justify-evenly items-center flex-col w-full h-4/5 ">
        <div className="flex flex-col w-full  justify-center items-center">
          <div className="w-full pl-32 mb-2">
            <h1 className="text-xl font-small text-white ">From</h1>
          </div>

          <div className=" flex w-[60%] ">
            <div className="w-[60%] ">
              <input
                className="w-[100%] p-2 border-1 border-[#000000] rounded-l-xl"
                type="text"
                placeholder="$550"
              />
            </div>

            <div className="w-[40%]  ">
              <select id="" className=" w-[100%]  border  p-2  rounded-r-xl ">
                <option value="US">eth</option>
                <option value="CA">usdc</option>
                <option value="FR">doge</option>
                <option value="DE">solana</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full  justify-center items-center ">
          <div className="w-full pl-32 mb-2">
            <h1 className="text-xl font-small text-white">To</h1>
          </div>

          <div className=" flex w-[60%] rounded-lg ">
            <div className="w-[60%] ">
              <input
                className="w-[100%] p-2 border-1 border-[#000000] rounded-l-xl"
                type="text"
                placeholder="100"
              />
            </div>

            <div className="w-[40%] ">
              <select id="" className=" w-[100%]   border  p-2 rounded-r-xl ">
                <option value="US">eth</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" mb-6 flex items-center justify-center">
        <Link to="/congrats">
          <button className=" rounded-sm bg-[#132831]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
            Swap Token
          </button>
        </Link>
      </div>
    </div>
  );
};
