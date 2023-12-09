import React from "react";

export const Congrats = () => {
  return (
    <>
      <div className="mt-12 pb-4">
        <div className=" mx-auto flex h-[70vh] w-[80vw] rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91] justify-center 	">
          <div className="flex flex-col justify-center items-center">
            <div className="h-[60%]  justify-center items-center flex ">
              <img
                className="h-[60%] w-[60%] "
                src="https://ik.imagekit.io/gourab18/Group%2023.png?updatedAt=1701685587081"
              />
            </div>

            <div>
              <h1 className="text-xl font-medium text-white">Wohoooo</h1>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mt-4 w-[20vw]">
                Congrats Your Coin Has been swapped
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
