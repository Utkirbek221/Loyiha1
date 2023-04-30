import React from "react";
import logo from "../img/Logo2.svg";
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";


export default function Footer() {
  return (
    <footer className="bg-[#0F3141] w-full h-[612px] m-auto text-[#fff]">
      <div className="container">
        <div className="flex pt-[64px]">
          <div className="">
            <img src={logo} alt="" />
            <p className="pt-[39.5px] pb-[50.5px]">Better Furniture, Better Living</p>
            <div className="flex">
              <i><SlLocationPin /></i>
              <p className="pl-[19px] pr-[60px]">Address</p>
              <p>7319 Wagon Lane
                Bradenton, FL 34203</p>
            </div>
            <div className="flex pb-[38px] pt-[21px]">
              <i><FiMail /></i>
              <p className="pl-[19px] pr-[60px]">Contact Us</p>
              <p>hellosansbrothers@gmail.com</p>
            </div>
          </div>
          <div className="flex pl-[160px] gap-[175px]">
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
        <div className="w-full h-[1px] bg-black bg-[#265267]"></div>
        <div className="flex justify-between pt-[28.5px]">
          <p>© Sans Brothers</p>
          <ul className="flex gap-[24px] text-[#75919E]">
            <li>Privacy and Terms</li>
            <li>Legal Notice</li>
            <li>Languanges</li>
          </ul>
          <div className="flex text-[22px] gap-[23px]">
            <AiOutlineInstagram className="text-[26px] mt-[-3px]"/>
            <BsFacebook/>
            <i class="fa-brands fa-linkedin-in"></i>
            <AiOutlineTwitter className="text-[26px] mt-[-3px]"/>
          </div>
        </div>
      </div>
    </footer>
  );
}
