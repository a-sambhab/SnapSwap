import React from "react";

export const Navbar = () => {
  return (
    <div className="flex  w-screen  items-center justify-between border-b-[0.005px] border-[#868686] px-12  py-2   text-white  md:text-[25px]">
      <div>
        <h1 className="text-xl font-medium text-white hover:opacity-60">
          DSWAP{" "}
        </h1>
      </div>

      <div className="flex gap-6 justify-center items-center">
        <div>
          <h1 className="text-sm font-medium text-[#18BB90] hover:opacity-60">
            MUTUAL FUNDS
          </h1>
        </div>
        <div>
          <h1 className="text-sm font-medium  text-white hover:opacity-60">
            SWAP
          </h1>
        </div>
        <button
          type="submit"
          className="  rounded-lg bg-[#18BB90]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
          // onClick={() => toast.loading(" Connecting")}
          // onClick={connectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};
