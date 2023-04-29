import React from "react";
import logo from "../img/Logo.svg";
import { SlLocationPin } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-[#0F3141] w-full h-[612px] m-auto text-[#fff]">
      <div className="container">
        <div className="">
          <div className="">
            <img src={logo} alt="" />
            <p>Better Furniture, Better Living</p>
            <div className="">
              <i><SlLocationPin/></i>
              <p> </p>
              <p></p>
            </div>
            <div className="">
              <i></i>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className=""></div>
        <div className="">
          <p></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className=""></div>
        </div>
      </div>
    </footer>
  );
}
