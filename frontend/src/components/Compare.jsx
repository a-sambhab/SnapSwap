import React from "react";

const Compare = (props) => {
  return (
    <>
      <div className=" mx-auto mt-12 flex h-[60vh] w-[50vw] flex-col justify-between rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91]	">
        <div className="flex justify-evenly items-center flex-col w-full h-4/5 ">
          <div className="flex flex-row w-1/2  justify-center items-center">
            <div className="w-1/2 pl-32 mb-2">
              <h1 className="text-xl font-small text-white ">From</h1>
            </div>

            <div className=" flex w-[60%] ">
              <div className="w-[40%]  ">
                <select
                  id=""
                  className=" w-[100%]  border  p-2  rounded-r-xl "
                  onChange={(e) => {
                    setFromAddress(e.target.value);
                    getexchangerate();
                  }}
                  value={fromAddress}
                >
                  {Object.keys(tokenlist).map((token) => {
                    return (
                      <option value={tokenlist[token].address}>
                        {tokenlist[token].symbol}
                      </option>
                    );
                  })}
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
                  value={toAmount}
                  readonly
                />
              </div>

              <div className="w-[40%] ">
                <select
                  id=""
                  className=" w-[100%]   border  p-2 rounded-r-xl "
                  onChange={(e) => {
                    setToAddress(e.target.value);
                    getexchangerate();
                  }}
                  value={toAddress}
                >
                  {Object.keys(tokenlist).map((token) => {
                    return (
                      <option value={tokenlist[token].address}>
                        {tokenlist[token].symbol}
                      </option>
                    );
                  })}
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
    </>
  );
};

export default Compare;
