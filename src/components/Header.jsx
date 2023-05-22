import React from "react";
import logo from "./img/Logo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineViewHeadline } from "react-icons/md";
import { useGlobalContext } from "../Context";

export default function Header() {
  const { click, open } = useGlobalContext();
  return (
    <header className="mp:w-[320px]">
      <div className="m-auto">
        <div className="shadov">
          <div className="container">
            <div className="flex justify-between pt-[45px] ml:pt-[20px] ml:items-center ">
              <div className="flex items-center ">
                <img src={logo} alt="" className="object-cover ml:pl-[10px] ml:mt-[10px] ma:mb-[10px]" />
                <div className="ml:hidden ma:hidden">
                   <ul className="ml:flex-col ml:block flex">
                    <li className="pl-[65px] ml:pl-[32px]">
                      <b>About</b>
                    </li>
                    <li className="pl-[32px]">Blog</li>
                    <li className="pl-[32px]">Contact</li>
                  </ul>
                 </div> 
                {open && (
                 <div className="ma:ml-[60px] mp:left-[100px] mp:absolute">
                   <ul className="ml:flex-col ml:flex  ml:top-[2%] ml:left-[63%] ma:top-[2%] ma:left-[6%] ma:flex ma:flex-col mt:flex mt:flex-col">
                    <li className="pl-[65px] ml:pl-[30px] ma:pl-[30px]">
                      <b>About</b>
                    </li>
                    <li className="pl-[32px]">Blog</li>
                    <li className="pl-[32px]">Contact</li>
                  </ul>
                 </div>
                )}
              </div>
              <button className="w-[126px] h-[56px] bg-[#F16F4F] rounded-[80px] text-[#FFFFFF] ml:hidden ma:hidden mt:hidden">
                Sign In
              </button>
              {open ? (
                <AiOutlineClose
                  onClick={click}
                  className="hidden ml:block ma:block text-[24px] ma:mt-[14px]"
                />
              ) : (
                <MdOutlineViewHeadline
                  onClick={click}
                  className="hidden ml:block ma:block text-[33px] ml:mb-[16px] ma:mt-[14px]"
                />
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-[-400px] ml:mt-[-430px] flex justify-center items-center flex-col mr:mt-[-350px] my:mt-[-350px]">
          <p className="text-[24px] text-[#0F3141] ml:text-[14px] ma:text-[18px]  mp:text-[15px] ">
            Explore any kind of furnitures
          </p>
          <h1 className="text-[88px] font-bold ml:text-[40px] ml:font-extrabold ma:text-[40px] ma:font-extrabold mp:text-[35px] mr:text-[60px] my:text-[65px]">
            Better Furniture <br /> Better Living
          </h1>
          <button className="bg-[#F16F4F] text-[#FFFFFF] w-[242px] h-[56px] mp:w-[220px] bp:h-[40px] flex justify-center items-center mt-[45px] ml:mt-[24px] gap-3 ">
            <p>Check our projects</p>
            <div className="w-[32px] h-[32px] rounded-[50%] bg-low-red flex justify-center items-center ">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
