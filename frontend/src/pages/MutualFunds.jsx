import React from "react";
import { MutualFundsExplore } from "../components/MutualFundsExplore";
import { MutualFundsDashboard } from "../components/MutualFundsDashboard";
import { useState } from "react";
export const MutualFunds = () => {
  const [flag, setFlag] = useState(0);

  const data = [
    {
      header: "Explore",
      component: <MutualFundsExplore />,
    },
    {
      header: "Dashboard",
      component: <MutualFundsDashboard />,
    },
  ];
  return (
    <div className="mt-12">
      {/* <h1 className="text-3xl font-medium text-white text-center my-4	">Invest In Our Funds</h1> */}
      <div className="flex items-center justify-center gap-12">
        <div className="">
          <button
            className=" rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91] px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
            onClick={() => setFlag(0)}
          >
            Explore
          </button>
        </div>
        <div className="">
          <button
            className=" rounded-lg  bg-gradient-to-r from-[#427A53] to-[#258C91]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
            onClick={() => setFlag(1)}
          >
            Dashboard
          </button>
        </div>
      </div>

      {flag === 0 ? <MutualFundsExplore /> : <MutualFundsDashboard />}
    </div>
  );
};
