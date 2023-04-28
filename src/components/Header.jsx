import React from "react";
import img from "../img/img.png";
import logo from "../img/Logo.svg";

export default function Header() {
  return (
    <header
      className="w-[100%] h-[939px] m-auto bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="m-auto">
        <div className="shadov">
          <div className="container">
            <div className="flex justify-between pt-[45px]">
              <div className="flex items-center ">
                <img src={logo} alt="" className="object-cover"/>

                <ul className="flex">
                  <li className="pl-[65px]">
                    <b>About</b>
                  </li>
                  <li className="pl-[32px]">Blog</li>
                  <li className="pl-[32px]">Contact</li>
                </ul>
              </div>
              <button className="w-[126px] h-[56px] bg-[#F16F4F] rounded-[80px] text-[#FFFFFF]">
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-[-400px] flex justify-center items-center flex-col">
          <p className="text-[24px] text-[#0F3141]">
            Explore any kind of furnitures
          </p>
          <h1 className="text-[88px] font-bold" >
            Better Furniture <br /> Better Living
          </h1>
          <button className="bg-[#F16F4F] text-[#FFFFFF] w-[242px] h-[56px] flex justify-center items-center mt-[45px] gap-3">
            <p>Check our projects</p>
            <div className="w-[32px] h-[32px] rounded-[50%] bg-low-red flex justify-center items-center ">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
