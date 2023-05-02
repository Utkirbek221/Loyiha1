import React from "react";
import bgImg from "../img/bgimg.svg";
import SS from "./SS";
import { useGlobalContext } from "../../Context";

export default function Newcomer() {
  const {style, activeButton, handleClick} = useGlobalContext()
  
  return (
    <>
      <div
        className="w-full h-[743px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <h4 className="text-[#F17252] pt-[141px] text-[20px] font-semibold ">
            Newcomer product
          </h4>
          <h1
            onClick={() => handleClick(0)}
            className={
              activeButton === 0
                ? `text-[#355655] ${style.text}`
                : activeButton === 1
                ? `text-[#F26947] ${style.text}`
                : activeButton === 2
                ? `text-[#CA8152] ${style.text}`
                : activeButton === 3
                ? `text-[#EBC5AD] ${style.text}`
                : activeButton === 4
                ? `text-[#292928] ${style.text}`
                : ""
            }
          >
            2 seater Sofa
          </h1>
          <p className="text-[18px] font-normal opacity-50 w-[645px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            luctus malesuada et volutpat, pellentesque dignissim suscipit.{" "}
          </p>
          <p className="text-[18px] font-medium pt-[32] pb-[16px]">
            Avaliable Colors
          </p>
          <div className="flex pb-[72px]">
            <SS />
          </div>
          <button
            onClick={() => handleClick(0)}
            className={
              activeButton === 0
                ? `bg-[#355655] ${style.button}`
                : activeButton === 1
                ? `bg-[#F26947] ${style.button}`
                : activeButton === 2
                ? `bg-[#CA8152] ${style.button}`
                : activeButton === 3
                ? `bg-[#EBC5AD] ${style.button}`
                : activeButton === 4
                ? `bg-[#292928] ${style.button}`
                : ""
            }
          >
            Shop Now
            <div className="w-[32px] h-[32px] rounded-[50%] bg-low-red flex justify-center items-center ">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
