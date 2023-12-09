import React, {useState, useEffect} from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { Link, useParams } from "react-router-dom";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = (props) => {
  const [token1data, setToken1data] = useState([]);
  // const [token2data, setToken2data] = useState([]);
  useEffect(() => {
    console.log(props);
    if (props.token1) {
      setToken1data(
        props.token1.map((item) => {
          return { y: item.price, label: item.epoch };
        })
      );
      // setToken2data(
      //   props.token1.map((item) => {
      //     return { y: item.price, label: item.epoch };
      //   })
      // );
    }
  }, [props]);

  const options = {
    animationEnabled: true,
    title: {
      text: "Comparison of Tokens",
    },
    axisY: {
      title: "Price",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: props.coin,
        showInLegend: true,
        dataPoints: token1data,
      },
    ],
  };
  return (
    <>
      <CanvasJSChart options={options} />{" "}
    </>
  );
};

export const TokenSwap = (props) => {
  const {coin} = useParams()
  const [response, setresponse] = useState(props.responseData[coin])
  const [pooler, setPooler] = useState(props.poolerData[coin])
  // console.log(props.responseData[coin], props.poolerData[coin])
  useEffect(() => {
    setresponse(props.responseData[coin])
    setPooler(props.poolerData[coin])
  }, [props])
  const path = `/${coin}`
  return (

    <>
      <div className=" mx-auto mt-12 flex h-[60vh] w-[80vw] rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91]	">
        <div className="flex w-[40%] flex-col items-center justify-center ">
          <div className="flex w-[60%] justify-around my-4 ">
            <div>
              <img
                className="h-20 w-20"
                src="https://ik.imagekit.io/gourab18/image%2025.png?updatedAt=170161637239"
              />
            </div>

            <div className="flex items-center justify-center ">
              <h1 className="text-xl font-medium text-white ">{coin}</h1>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Risk: {response?response.risk:<></>}
              </h1>
            </div>
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
              Liquidity: {pooler?pooler[pooler.length-1].liquidity:<></>}
              </h1>
            </div>
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Price: {pooler?pooler[pooler.length-1].price:<></>}
              </h1>
            </div>
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Volume for 24h: {pooler?pooler[pooler.length-1].volume24h:<></>}
              </h1>
            </div>
          </div>

          <div className="mt-4" style={{ alignItems: "flexEnd" }}>
            <Link to={path}>
              <button className=" rounded-sm bg-[#132831]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
                Swap Token
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[60%] ">
          <div className="mt-6 flex items-center justify-center">
            <Chart token1={pooler} coin={coin}/>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
