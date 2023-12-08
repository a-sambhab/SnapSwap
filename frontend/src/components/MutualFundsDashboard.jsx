import React from "react";
import { WideCard } from "./WideCard";

export const MutualFundsDashboard = () => {
  const funds = [
    {
      text: "largeCap",
      img: "https://ik.imagekit.io/gourab18/Rectangle%205%20(2).png?updatedAt=1701613631720",
    },
    {
      text: "midCap",
      img: "https://ik.imagekit.io/gourab18/Rectangle%206%20(1).png?updatedAt=1701613631701",
    },
    {
      text: "smallCap",
      img: "https://ik.imagekit.io/gourab18/Rectangle%208%20(2).png?updatedAt=1701613631826",
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="flex  min-h-[100vh]  w-[20vw] flex-col items-center justify-center gap-8 border-r-[0.005px] ">
          {funds.map((fund, index) => {
            return (
              <div>
                <img src={fund.img} />
              </div>
            );
          })}
        </div>
        <div className="ml-4 flex  min-h-[100vh] flex-col items-center gap-8 py-6">
          <div>
            <WideCard img="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239" />
          </div>
          <div>
            <WideCard img="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239" />
          </div>
          <div>
            <WideCard img="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239" />
          </div>
        </div>
      </div>
    </>
  );
};
