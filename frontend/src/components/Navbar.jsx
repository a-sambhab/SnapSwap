import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
