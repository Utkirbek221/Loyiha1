import React from "react";
import img from "./img/img.png";
import logo from "./img/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../Context";

export default function Header() {
  const { click, open } = useGlobalContext();
  return (
    <header
      className=""
    >
      <div className="m-auto">
        <div className="shadov">
          <div className="container">
            <div className="flex justify-between pt-[45px] ml:pt-[20px] ml:items-center">
              <div className="flex items-center ">
                <img src={logo} alt="" className="object-cover ml:pl-[10px]" />
                {open && (
                  <ul className="ml:flex-col ml:block  ml:fixed flex  ml:top-[2%] ml:left-[63%]">
                    <li className="pl-[65px] ml:pl-[32px]">
                      <b>About</b>
                    </li>
                    <li className="pl-[32px]">Blog</li>
                    <li className="pl-[32px]">Contact</li>
                  </ul>
                )}
              </div>
              <button className="w-[126px] h-[56px] bg-[#F16F4F] rounded-[80px] text-[#FFFFFF] ml:hidden">
                Sign In
              </button>
              <AiOutlineMenu
                onClick={click}
                className="hidden ml:block text-[24px]"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-[-400px] ml:mt-[-430px] flex justify-center items-center flex-col">
          <p className="text-[24px] text-[#0F3141] ml:text-[14px]">
            Explore any kind of furnitures
          </p>
          <h1 className="text-[88px] font-bold ml:text-[40px] ml:font-extrabold">
            Better Furniture <br /> Better Living
          </h1>
          <button className="bg-[#F16F4F] text-[#FFFFFF] w-[242px] h-[56px] flex justify-center items-center mt-[45px] ml:mt-[24px] gap-3">
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
