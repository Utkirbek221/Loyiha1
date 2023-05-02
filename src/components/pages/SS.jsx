import React from "react";
import { useGlobalContext } from "../../Context";

export default function SS() {
  const {activeButton, handleClick} = useGlobalContext()
  return (
    <div className="flex items-center gap-[10px]">
      <button
        className={
          activeButton === 0
            ? "active bg-[#355655] w-[24px] h-[24px] rounded-[50%] text-[#ffff]"
            : "bg-[#355655] w-[24px] h-[24px] rounded-[50%] text-[#ffff] "
        }
        onClick={() => handleClick(0)}
      ></button>
      <button
        className={
          activeButton === 1
            ? "active text-[#ffff] bg-[#F26947] w-[24px] h-[24px] rounded-[50%]"
            : "bg-[#F26947] w-[24px] h-[24px] rounded-[50%] "
        }
        onClick={() => handleClick(1)}
      ></button>
      <button
        className={
          activeButton === 2
            ? "active text-[#ffff] bg-[#CA8152] w-[24px] h-[24px] rounded-[50%]"
            : "bg-[#CA8152] w-[24px] h-[24px] rounded-[50%]"
        }
        onClick={() => handleClick(2)}
      ></button>
      <button
        className={
          activeButton === 3
            ? "active text-[#ffff] bg-[#EBC5AD] w-[24px] h-[24px] rounded-[50%]"
            : "bg-[#EBC5AD] w-[24px] h-[24px] rounded-[50%]"
        }
        onClick={() => handleClick(3)}
      ></button>
      <button
        className={
          activeButton === 4
            ? "active text-[#ffff] bg-[#292928] w-[24px] h-[24px] rounded-[50%]"
            : "bg-[#292928] w-[24px] h-[24px] rounded-[50%]"
        }
        onClick={() => handleClick(4)}
      ></button>
    </div>
  );
}
