import React from "react";

export const Landing = () => {
  const images = [
    "https://ik.imagekit.io/gourab18/image%208.png?updatedAt=1701609460323",
    "https://ik.imagekit.io/gourab18/image%2011.png?updatedAt=1701609460337",
    "https://ik.imagekit.io/gourab18/image%203.png?updatedAt=1701609460474",
    "https://ik.imagekit.io/gourab18/image%204.png?updatedAt=1701609460333",
    "https://ik.imagekit.io/gourab18/image%208.png?updatedAt=1701609460323",
    "https://ik.imagekit.io/gourab18/image%2011.png?updatedAt=1701609460337",
    "https://ik.imagekit.io/gourab18/image%203.png?updatedAt=1701609460474",
    "https://ik.imagekit.io/gourab18/image%204.png?updatedAt=1701609460333",
  ];
  return (
    <>
      <div className="mt-12 pb-4">
        <div className=" mx-auto flex h-[70vh] w-[80vw] rounded-lg bg-gradient-to-r from-[#427A53] to-[#258C91]	">
          <div className="ml-16 flex w-1/2  flex-col justify-center gap-6  ">
            <div>
              <h1 className="text-xl font-bold italic	tracking-normal	text-[#FFF]	">
                Invest In Everything
              </h1>
            </div>
            <div className="w-[90%]">
              <span className="font-serif	 text-xl	tracking-normal	text-[#FFF]">
                Online platform to invest in stocks, derivatives, mutual funds,
                and more.
              </span>
            </div>

            <div>
              <button className=" rounded-sm bg-[#132831]  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80">
                Connect Wallet
              </button>
            </div>
          </div>

          <div className="h-[100%]  ">
            <img
              className="h-[100%] w-[100%] "
              src="https://ik.imagekit.io/gourab18/image%202.png?updatedAt=1701607922481"
            />
          </div>
        </div>

        <div className="mt-12 flex min-h-[10vh] w-screen items-center justify-around bg-[#1F2839] ">
          {images.map((image, index) => {
            return (
              <section key={index}>
                <div className="h-[60%] w-[60%]  ">
                  <img className="" src={image} />
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-10 ml-10 ">
          <h1 className="font-serif text-xl	 capitalize	italic	tracking-normal text-[#FFF]">
            EVERYTHING WE CAN DO FOR YOU
          </h1>
        </div>

        <div className="mx-4 flex justify-evenly ">
          <div className="flex w-[70vw] flex-col gap-4 ">
            <div className="flex gap-4  ">
              <div className="">
                <img src="https://ik.imagekit.io/gourab18/Rectangle%204%20(1).png?updatedAt=1701611443635" />
              </div>
              <div className="">
                <img src="https://ik.imagekit.io/gourab18/Rectangle%205%20(1).png?updatedAt=1701611443558" />
              </div>
            </div>

            <div className="flex gap-4   ">
              <div className="">
                <img src="https://ik.imagekit.io/gourab18/Rectangle%205%20(1).png?updatedAt=1701611443558" />
              </div>
              <div className="">
                <img src="https://ik.imagekit.io/gourab18/Rectangle%204%20(1).png?updatedAt=1701611443635" />
              </div>
            </div>
          </div>

          <div className="  ">
            <img
              className="h-[87%] w-[100%]"
              src="https://ik.imagekit.io/gourab18/Rectangle%208%20(1).png?updatedAt=1701612436700"
            />
          </div>
        </div>
      </div>
    </>
  );
};
