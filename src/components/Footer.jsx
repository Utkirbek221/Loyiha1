import React from "react";
import logo from "../components/img/Logo2.svg";
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiFacebook } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="bg-[#0F3141] w-full h-[612px] m-auto text-[#fff] ml:w-[375px] ml:h-[501px] ma:w-[425px] ma:h-[512px] mr:w-[768px]">
      <div className="container">
        <div className="flex pt-[64px]">
          <div className="">
            <img src={logo} alt="" />
            <p className="pt-[39.5px] pb-[50.5px]">
              Better Furniture, Better Living
            </p>
            <div className="flex ml:flex-col ma:flex-col">
              <i>
                <SlLocationPin />
              </i>
              <p className="pl-[19px] pr-[60px] ml:mt-[-20px] ml:mb-[5px] ml:ml-[19px] ma:mt-[-20px] ma:mb-[5px] ma:ml-[19px]">
                Address
              </p>
              <p className="ml:text-[14px] ma:text-[14px]">
                7319 Wagon Lane Bradenton, FL 34203
              </p>
            </div>
            <div className="flex pb-[38px] pt-[21px] ml:flex-col ma:flex-col ">
              <i>
                <FiMail />
              </i>
              <p className="pl-[19px] pr-[60px]  ml:mt-[-20px] ml:mb-[5px] ml:ml-[19px]  ma:mt-[-20px] ma:mb-[5px] ma:ml-[19px]">
                Contact Us
              </p>
              <p className="ml:text-[14px]">hellosansbrothers@gmail.com</p>
            </div>
          </div>
          <div className="flex pl-[160px] gap-[175px] ml:hidden ma:hidden mr:hidden">
            <ul>
              <li className="text-[20px] font-semibold">Website</li>
              <li className="pt-[24px] pb-[16px]">home</li>
              <li>About us</li>
              <li className="pb-[16px] pt-[16px]">Services</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li className="text-[20px] font-semibold">Products</li>
              <li className="pt-[24px] pb-[16px]">Tables</li>
              <li>Chairs</li>
              <li className="pb-[16px] pt-[16px]">Storages</li>
              <li>Decorations</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#265267] ml:w-0 ml:h-0"></div>
        <div className="flex justify-between pt-[28.5px] ml:hidden ma:hidden">
          <p>© Sans Brothers</p>
          <ul className="flex gap-[24px] text-[#75919E]">
            <li>Privacy and Terms</li>
            <li>Legal Notice</li>
            <li>Languanges</li>
          </ul>
          <div className="flex text-[22px] gap-[23px]">
            <AiOutlineInstagram className="text-[26px] mt-[-3px]" />
            <BsFacebook />
            <i className="fa-brands fa-linkedin-in"></i>
            <AiOutlineTwitter className="text-[26px] mt-[-3px]" />
          </div>
        </div>
        <div className="hidden ml:flex ma:flex">
          <div className="ml:flex ml:gap-[55px] ma:flex ma:gap-[55px]">
            <p className="ml:text-[16px] ml:text-[#878787] ma:text-[16px] ma:text-[#878787]">
              Terms & Conditions
            </p>
            <p className="ml:text-[16px] ml:text-[#878787] ma:text-[16px] ma:text-[#878787]">Privacy Policy</p>
          </div>
          
        </div>
        <div className="hidden ml:flex ml:pt-[36px] ml:gap-[40px] ma:flex ma:pt-[36px] ma:gap-[40px] pl-[100px]">
            <TfiFacebook className="text-[20px]" />
            <AiOutlineTwitter className="text-[26px] mt-[-3px]" />
            <AiOutlineInstagram className="text-[26px] mt-[-3px]" />
          </div>
      </div>
    </footer>
  );
}
