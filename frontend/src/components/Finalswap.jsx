import React from "react";

export const Finalswap = () => {
  return (
    <div className=" mx-auto mt-12 flex h-[60vh] w-[50vw] flex-col justify-between rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91]	">
      {/* <div className="flex flex-col">


     </div> */}

      <div className=" flex w-[60%] ">
        <div className="w-[60%] ">
          <input className="w-[100%]" type="text" placeholder="100" />
        </div>

        <div className="w-[40%] ">
          <select id="" className=" w-[100%]  border ">
            <option value="US">eth</option>
            <option value="CA">usdc</option>
            <option value="FR">doge</option>
            <option value="DE">solana</option>
          </select>
        </div>
      </div>

      <div className=" flex w-[60%] ">
        <div className="w-[60%] ">
          <input className="w-[100%]" type="text" placeholder="100" />
        </div>

        <div className="w-[40%] ">
          <select id="" className=" w-[100%]  border ">
            <option value="US">eth</option>
          </select>
        </div>
      </div>
      <div className=" mb-6 flex items-center justify-center">
        <button className=" rounded-sm bg-[#132831]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
          Swap Token
        </button>
      </div>
    </div>
  );
};
