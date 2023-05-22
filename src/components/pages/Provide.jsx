import React from "react";
import home from "../img/home.svg";
import like from "../img/like.svg";
import creditCard from "../img/credit-card.svg";

export default function Provide() {
  return (
    <>
      <div
        className="w-full h-[676px] flex justify-center items-center bg-[#FAF8F4] ml:w-[375px] ml:h-[1221px] 
      ma:w-[425px] ma:h-[1271px] mr:w-[768px] mr:h-[1421px] my:w-[1024px] my:h-[940px] mp:w-[320px]"
      >
        <div className="container  h-[676px] overflow-hidden relative ml:w-[375px] ml:h-[1221px] ma:w-[425px] ma:h-[1271px] mr:w-[768px] mr:h-[1271px] my:w-[1024px] my:h-[940px] my:pl-[60px] ma:pl-[10px]">
          <div className="w-[1000px] h-[1000px] ml:w-[708px] ml:h-[708px]  border-2 rounded-[50%] flex justify-center items-center absolute left-[10%] top-[-24%] ml:top-[20%] ml:left-[-45%] ma:top-[20%] ma:left-[-65%] mr:top-[20%] mr:left-[-15%] my:top-[-3%] my:left-[1.5%]">
            <div className="w-[765px] h-[765px] ml:w-[541px] ml:h-[541px] border-2 rounded-[50%]  flex justify-center items-center">
              <div className="w-[471px] h-[471px] ml:w-[333px] ml:h-[333px] border-2 rounded-[50%]  flex justify-center items-center">
                <div className="w-[176px] h-[176px] ml:w-[124px] ml:h-[124px] border-2 rounded-[50%]"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <h1 className="text-[60px] font-semibold ml:text-center ma:text-center mr:text-center pt-[113px] my:pt-[93px] mr:pt-[0px] ma:pt-[89px] ml:pt-[89px] ml:text-[35px]  ma:text-[35px] mp:text-[30px]">
              What we provide
            </h1>
            <div className="flex gap-[59px] ml:block ml:w-[375px]  mr:flex-col  mr:justify-center mr:items-center ma:flex-col  my:flex-wrap  ma:justify-center ma:items-center">
              <div>
                <div className="w-[350px] mt-[64px] my:mt-[34px]">
                  <img src={home} alt="" />
                  <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold mp:text-[20px]">
                    10 years of experience in furniture business
                  </h3>
                  <p className="pb-[24px]  text-[18px] font-normal mp:text-[14px] mp:w-[300px]">
                    We're already established since 2012, and in 10 years we
                    have lots of positive reviews and achievements
                  </p>
                  <button className="flex items-center text-[#F26440] ">
                    <p className="text-[14px] font-semibold">See more</p>
                    <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                  </button>
                </div>
              </div>
              <div>
                <div className="w-[350px] mt-[64px] ma:mt-[34px] my:mt-[34px]">
                  <img src={like} alt="" />
                  <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold mp:text-[20px]">
                    Afforable price with world class quality
                  </h3>
                  <p className="pb-[24px]  text-[18px] font-normal mp:text-[14px] mp:w-[300px]">
                    Our craftsmen have lots of experience dealing with crafting
                    furnitures and some of them have world class quality
                  </p>
                  <button className="flex items-center text-[#F26440] ">
                    <p className="text-[14px] font-semibold">See more</p>
                    <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                  </button>
                </div>
              </div>
              <div>
                <div className="w-[350px] mt-[64px] ma:mt-[34px] my:mt-[34px]">
                  <img src={creditCard} alt="" />
                  <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold mp:text-[20px]">
                    Bring your ideas into a living product
                  </h3>
                  <p className="pb-[24px]  text-[18px] font-normal mp:text-[14px] mp:w-[300px]">
                    Besides you can buy the existing product, you can also
                    consultate with us also to make your dream furniture
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
