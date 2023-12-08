import React from "react";
import { MutualFundsExplore } from "../components/MutualFundsExplore";
import { MutualFundsDashboard } from "../components/MutualFundsDashboard";
export const MutualFunds = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center gap-12">
        <div className="">
          <button className=" rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91] px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
            Explore
          </button>
        </div>
        <div className="">
          <button className=" rounded-lg  bg-gradient-to-r from-[#427A53] to-[#258C91]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
            Dashboard
          </button>
        </div>
      </div>

      <MutualFundsExplore />
      <MutualFundsDashboard />
    </div>
  );
};
