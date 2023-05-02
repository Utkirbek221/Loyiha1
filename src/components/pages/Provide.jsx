import React from "react";
import home from "../img/home.svg";

export default function Provide() {
  return (
    <>
      <div className="w-full h-[676px]  flex justify-center items-center bg-[#FAF8F4] ml:w-[375px] ml:h-[1221px] ">
        <div className="container  h-[676px] overflow-hidden relative ml:w-[375px] ml:h-[1221px]">
          <div className="w-[1000px] h-[1000px] ml:w-[708px] ml:h-[708px]  border-2 rounded-[50%] flex justify-center items-center absolute left-[10%] top-[-24%] ml:top-[20%] ml:left-[-45%]">
            <div className="w-[765px] h-[765px] ml:w-[541px] ml:h-[541px] border-2 rounded-[50%]  flex justify-center items-center">
              <div className="w-[471px] h-[471px] ml:w-[333px] ml:h-[333px] border-2 rounded-[50%]  flex justify-center items-center">
                <div className="w-[176px] h-[176px] ml:w-[124px] ml:h-[124px] border-2 rounded-[50%]"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <h1 className="text-[60px] font-semibold pt-[113px] ml:pt-[89px] ml:text-[35px] ml:text-center">
              What we provide
            </h1>
            <div className="flex gap-[59px] ml:block ml:w-[375px]">
              <div>
                <div className="w-[350px] mt-[64px]">
                  <img src={home} alt="" />
                  <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold">
                    10 years of experience in furniture business
                  </h3>
                  <p className="pb-[24px]  text-[18px] font-normal">
                    We're already established since 2012, and in 10 years we have
                    lots of positive reviews and achievements
                  </p>
                  <button className="flex items-center text-[#F26440] ">
                    <p className="text-[14px] font-semibold">See more</p>
                    <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                  </button>
                </div>
              </div>
              <div>
                <div className="w-[350px] mt-[64px]">
                  <img src={home} alt="" />
                  <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold">
                    10 years of experience in furniture business
                  </h3>
                  <p className="pb-[24px]  text-[18px] font-normal">
                    We’re already established since 2012, and in 10 years we have
                    lots of positive reviews and achievements
                  </p>
                  <button className="flex items-center text-[#F26440] ">
                    <p className="text-[14px] font-semibold">See more</p>
                    <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                  </button>
                </div>
              </div>
              <div>
                <div className="w-[350px] mt-[64px]">
                  <img src={home} alt="" />
                  <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold">
                    10 years of experience in furniture business
                  </h3>
                  <p className="pb-[24px]  text-[18px] font-normal">
                    We’re already established since 2012, and in 10 years we have
                    lots of positive reviews and achievements
                  </p>
                  <button className="flex items-center text-[#F26440] ">
                    <p className="text-[14px] font-semibold">See more</p>
                    <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
