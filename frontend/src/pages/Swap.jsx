import React, { useEffect, useState } from "react";
import { WideCard } from "../components/WideCard";
import { TokenSwap } from "../components/TokenSwap";
import { Finalswap } from "../components/Finalswap";
import { Link } from "react-router-dom";
const WideCardToken = (props) =>{
  console.log(props.token)
  return(
    <>
      <div className="leading-12 flex min-h-[20vh]  min-w-[60vw] justify-between bg-gradient-to-r from-[#427A53] to-[#258C91] p-4 rounded-lg   font-serif text-sm text-white">
      <div className="flex">
        {props.img && (
          <div>
            <img src={props.img} />
          </div>
        )}

        <div className="ml-4 flex flex-col justify-center gap-6">
          <div>
            <h1 className="text-xl font-medium">
              {props.token.name !== 0 ? props.token.name : "First Large Cap Mutual Fund"}
            </h1>
          </div>
          <div>
            <h1 className="font-small text-xs">
              {props.token.risk !== 0 ? props.token.risk : "Large"}| 5 star
            </h1>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center gap-6">
          {/* <div>
            <h1 className="text-xl font-medium">1 y Returns: 3%</h1>
          </div>
          <div>
            <h1 className="font-small text-xs">LOW/MODERATE RISK</h1>
          </div> */}
      </div>
    </div>
    </>
  )
}
export const Swap = (props) => {
  // console.log(props)
  const { poolerData, responseData } = props;
  const [tokenList, setTokenList] = useState([]);
  const [lowtokenList, setlowTokenList] = useState([]);
  const [midtokenList, setmidTokenList] = useState([]);
  const [hightokenList, sethighTokenList] = useState([]);
  const separateData = () => {
    // console.log(responseData)
    var l = [],
      m = [],
      h = [];
    Object.keys(responseData).map((coin) => {
      if (responseData[coin].risk == "low") {
        l.push({...responseData[coin], "name": coin});
      } else if (responseData[coin].risk == "mid") {
        // setmidTokenList(...midtokenList, {coin: coin, data: responseData[coin]})
        m.push({...responseData[coin], "name": coin});
      } else if (responseData[coin].risk == "high") {
        // sethighTokenList(...hightokenList, {coin: coin, data: responseData[coin]})
        h.push({...responseData[coin], "name": coin});
      }
    });
    // console.log(l,m,h)
    sethighTokenList(h);
    setmidTokenList(m);
    setlowTokenList(l);
  };
  useEffect(() => {
    separateData();
  }, [props]);
  const clicked = (fund) =>{
    // console.log(fund)
    setTokenList(fund.data)
  }
  const funds = [
    {
      text: "High Risk",
      img: "https://ik.imagekit.io/gourab18/Rectangle%205%20(2).png?updatedAt=1701613631720",
      data: hightokenList,
    },
    {
      text: "Mid Risk",
      img: "https://ik.imagekit.io/gourab18/Rectangle%206%20(1).png?updatedAt=1701613631701",
      data: midtokenList,
    },
    {
      text: "Low Risk",
      img: "https://ik.imagekit.io/gourab18/Rectangle%208%20(2).png?updatedAt=1701613631826",
      data: lowtokenList,
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-center gap-12">
        <button className=" rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91] px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
          Explore
        </button>
      </div>

      <div className="flex">
        <div className="flex  min-h-[100vh]  w-[20vw] flex-col items-center justify-center gap-8 border-r-[0.005px]  ">
          {funds.map((fund, index) => {
            return (
              <button
                className="active:border-2 active:rounded-3xl"
                onClick={() => {
                  clicked(fund)
                }}
              >
                <img src={fund.img} />
              </button>
            );
          })}
        </div>

        <div className="ml-4 flex overflow-y-scroll h-[100vh] flex-col items-center gap-8 py-6">
          {tokenList.map((tokeninfo) => {
            var path = `/coins/${tokeninfo.name}`
            console.log(tokeninfo)
            return (
              <>
              <Link to={path}>
                <div>
                  <WideCardToken 
                    token = {tokeninfo}
                    img = "https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239"
                  />
                </div>
              </Link>
              {/* {tokeninfo.risk} */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
