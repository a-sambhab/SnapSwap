import React from "react";
import { WideCard } from "./WideCard";
import { Link } from "react-router-dom";
import { useState } from "react";
export const MutualFundsExplore = () => {
  const [tag, setTag] = useState("largeCap");

  const funds = [
    {
      text: "LargeCap",
      img: "https://ik.imagekit.io/gourab18/Rectangle%205%20(2).png?updatedAt=1701613631720",

      funds: [
        {
          name: "Gourab",
          img: "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239",
        },
        {
          name: "Sai",
          img: "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239",
        },
      ],

      // img: "https://ik.imagekit.io/gourab18/Rectangle%205%20(2).png?updatedAt=1701613631720",
    },
    {
      text: "MidCap",
      funds: [
        {
          name: "Gautam",
          img: "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239",
        },
        {
          name: "Abinash",
          img: "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239",
        },
      ],
      img: "https://ik.imagekit.io/gourab18/Rectangle%206%20(1).png?updatedAt=1701613631701",
    },
    {
      text: "SmallCap",
      funds: [
        {
          name: "Aryaman",
          img: "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239",
        },
        {
          name: "Sibasis",
          img: "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239",
        },
        {
          name: "Poon Poon gadi",
          img: "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239",
        },
      ],
      img: "https://ik.imagekit.io/gourab18/Rectangle%208%20(2).png?updatedAt=1701613631826",
    },
  ];

  const [fundData, setFundData] = useState(funds[0].funds);

  const decideFund = (data) => {
    const arr = funds.filter((a) => a.text === data);
    setTag(data);
    console.log(data);
    setFundData(arr[0].funds);
  };
  return (
    <>
      <div className="flex">
        <div className="flex  min-h-[100vh]  w-[20vw] flex-col items-center justify-center gap-8 border-r-[0.005px] ">
          {funds.map((fund, index) => {
            return (
              <div>
                <button onClick={() => decideFund(fund.text)}>
                  <img src={fund.img} />
                </button>
              </div>
            );
          })}
        </div>
        <div className="ml-4 flex  min-h-[100vh] flex-col items-center gap-8 py-6">
          {fundData.map((data) => {
            return (
              // data.map((val)=>console.log(val))
              <WideCard
                img="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239"
                content={data.name}
                tag={tag}
              />
            );
          })}

          {/* <Link to="/invest/cn">
            <div>
              <WideCard img="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239" />
            </div>
          </Link>
          <Link to="/invest/in">
            <div>
              <WideCard img="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239" />
            </div>
          </Link>
          <Link to="/invest/dn">
            <div>
              <WideCard img="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239" />
            </div>
          </Link>  */}
        </div>
      </div>
    </>
  );
};
