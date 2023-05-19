import React from "react";
import burchak from "../img/burchak.svg";
import burchak2 from "../img/burchak2.svg";

export default function PayDetails() {
  return (
    <>
      <div className="w-full h-[806px] relative overflow-y-hidden bg-[#F5F6F8] ml:h-[886px] ma:w-[425px] ma:h-[940px] mp:h-[1000px]">
        <div className="container relative ma:p-0">
          <div className=" w-[1000px] h-[1000px] ml:w-[0px] ml:h-[0px] border-2 rounded-[50%]  flex justify-center items-center absolute top-[48%] right-[67%] ma:hidden">
            <div className="w-[765px] h-[765px] ml:w-[0px] ml:h-[0px] border-2 rounded-[50%]  flex justify-center items-center">
              <div className="w-[471px] h-[471px] ml:w-[0px] ml:h-[0px] border-2 rounded-[50%]  flex justify-center items-center">
                <div className="w-[176px] h-[176px] ml:w-[0px] ml:h-[0px] border-2 rounded-[50%]"></div>
              </div>
            </div>
          </div>
          <div className="container relative ma:flex ma:flex-col ma:justify-center ma:items-center">
            <h1 className=" pt-[142px] text-[60px] font-semibold w-[530px] ml:pt-[83px] ml:text-[32px] ml:w-[320px] ma:text-[36px] ma:w-[320px] ma:mr-[30px] ma:pt-[83px] mp:w-[320px] ">
              We pay details in every our work
            </h1>
            <p className="text-[#0F3141] text-[20px] font-normal w-[740px] pt-[44px] pb-[98px] ml:pt-[24px] ml:pb-[42px] ml:w-[310px] ml:text-[18px] ma:pt-[24px] ma:pb-[42px] ma:w-[330px] ma:text-[20px] mp:text-[22px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              et nisl tristique nulla. Nisl, egestas molestie vestibulum lectus
              habitasse donec morbi. At est parturient id eu ut.{" "}
            </p>
            <div className="flex gap-[32px] items-center ml:gap-[12px]">
              <button className="rounded-[8px] text-[#fff] bg-[#EF7D60] w-[160px] h-[54px] text-[18px] font-semibold">
                Contact Us
              </button>
              <p className="text-[20px] font-normal underline ml:text-[18px]">View Projects</p>
            </div>
          </div>
          <div className="relative w-full h-full  mt-[-608px]  ml:mt-[41px] ma:mt-[41px] ma:w-[425px] ml:w-[375px] mp:w-[395px]  mp:h-[320px]">
            <img className="absolute  right-[0px] ml:left-[41%] ml:w-[250px] ml:h-[360px] ma:left-[40%] ma:w-[250px] ma:h-[370px] mp:w-[250px] mp:h-[370px] mp:left-[39%] " src={burchak} alt="" />
            <img
              className="absolute right-[12%] top-[350px] ml:w-[290px] ml:h-[380px] ml:top-[70px] ml:right-[75px] ma:w-[295px] ma:h-[400px] ma:top-[65px] ma:right-[110px] mp:left-[0px] mp:w-[290px] mp:h-[390px] mp:top-[75px]"
              src={burchak2}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
