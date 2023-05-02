import React, { useState } from "react";
import img from "./img/img.png";
import logo from "./img/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../Context";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const { click, open } = useGlobalContext();
  return (
    <header
      className="w-[100%] h-[939px] m-auto bg-cover bg-no-repeat bg-center ml:w-[375px] ml:h-[574px] ml:bg-cover  ml:bg-left-bottom "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="m-auto">
        <div className="justify-between px-[20px] sm:justify-between mx-auto md:items-center  md:flex">
          <div className=" items-center md:flex">
            <div>
              <div className="flex items-center  justify-between py-3 md:py-5 md:block max-w-[335px]">
                <h2 className="text-2xl font-bold text-white">
                  <img src={logo} alt="" />
                </h2>
                <div className="md:hidden">
                  <button
                    className="p-2 outline-none text-[30px]"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <ion-icon name="close"></ion-icon>
                    ) : (
                      <ion-icon name="menu-outline"></ion-icon>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-start space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Blog</a>
                  </li>
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Pricing</a>
                  </li>
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Contact</a>
                  </li>
                </ul>
                <div className="block md:hidden  mt-5 mb-5 space-x-5">
                  <h3 className="text-[#1D1D21] font-semibold text-[16px] font-['Inter']">
                    Sign in
                  </h3>
                  <button className="p-[15px_52px] mt-5 text-white bg-[#1D1D21] rounded-[100px] hover:bg-gray-300">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-x-5 hidden md:block">
            <div className="flex items-center space-x-10">
              <h3 className="text-[#1D1D21] hover:text-gray-300 duration-200 cursor-pointer font-semibold text-[16px] font-['Inter']">
                Sign in
              </h3>
              <button className="p-[16px_32px] duration-200 text-white bg-[#1D1D21] rounded-[100px] hover:bg-gray-300">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:p-[0px_23px] sm:flex-col">
          <div className="flex flex-col items-start">
            <div className="mt-[65.57px] border border-[#1D1D21] rounded-[100px] font-bold sm:text-[12px] text-[14px] p-[8px_12px] text-[#1D1D21] font-['Inter'] leading-[150%]">
              PROPERTY SOLUTION FOR ALL
            </div>
            <h1 className="pt-[24px] sm:text-[60px] sm:w-[314px]  w-[764px] leading-[110%] tracking-[-3px] text-[#101010] uppercase text-[140px] font-['DM Sans'] font-bold">
              ECOHOUSE Style
            </h1>
            <p className="text-[#878787] pt-[24px] sm:text-[14px] sm:w-[270px] w-[412px] leading-[150%] text-[16px] font-medium font-['Inter']">
              Stay informed about the market with real estate news and insights
              provided by real estate professionals and government agencies.
            </p>
            <div className="flex sm:flex-col sm:items-start gap-[16px] mt-[30px] items-center sm:pb-0 pb-[165px]">
              <h4 className="bg-[#1D1D21] hover:bg-white border cursor-pointer border-[#1D1D21] duration-200 hover:text-[#1D1D21] rounded-[100px] p-[16px_32px] text-[#FFFFFF] leading-[150%] font-semibold not-italic font-['Inter']">
                See Our Case Studies
              </h4>
              <h4 className="border p-[16px_24px] hover:text-white hover:bg-[#1D1D21] duration-200 cursor-pointer  border-[#1D1D21] rounded-[100px] ">
                <i className="fa-regular fa-circle-play"></i> Watch A Demo
              </h4>
            </div>
          </div>
          <div className="">
            <img className="sm:w-[295px] " src={uy} alt="" />
          </div>
        </div>
        {/* <div className="shadov">
          <div className="container">
            <div className="flex justify-between pt-[45px] ml:pt-[20px] ml:items-center">
              <div className="flex items-center ">
                <img src={logo} alt="" className="object-cover ml:pl-[10px]" />
                {open && (
                  <ul className=" ml:flex-col ml:block  ml:fixed flex  ml:top-[2%] ml:left-[63%]">
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
        <div className="text-center mt-[-400px] flex justify-center items-center flex-col">
          <p className="text-[24px] text-[#0F3141] ml:text-[14px]">
            Explore any kind of furnitures
          </p>
          <h1 className="text-[88px] font-bold ml:text-[40px]">
            Better Furniture <br /> Better Living
          </h1>
          <button className="bg-[#F16F4F] text-[#FFFFFF] w-[242px] h-[56px] flex justify-center items-center mt-[45px] gap-3">
            <p>Check our projects</p>
            <div className="w-[32px] h-[32px] rounded-[50%] bg-low-red flex justify-center items-center ">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>
        </div> */}
      </div>
    </header>
  );
}
