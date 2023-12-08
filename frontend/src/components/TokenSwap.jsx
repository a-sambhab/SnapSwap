import React from "react";

export const TokenSwap = ({ img }) => {
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
              <h1 className="text-xl font-medium text-white ">DOGECOIN</h1>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Market Cap: 1111
              </h1>
            </div>
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Market Cap: 1111
              </h1>
            </div>
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Market Cap: 1111
              </h1>
            </div>
            <div>
              <h1 className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Market Cap: 1111
              </h1>
            </div>
          </div>

          <div className="mt-4" style={{ alignItems: "flexEnd" }}>
            <button className=" rounded-sm bg-[#132831]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
              Swap Token
            </button>
          </div>
        </div>

        <div className="w-[60%] ">
          <div className="mt-6 flex items-center justify-center">
            <img
              className="h-[50vh] w-[40vw]"
              src="https://ik.imagekit.io/gourab18/image%2026.png?updatedAt=1701621835205"
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
};
