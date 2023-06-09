import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useGlobalContext } from "../../Context";

export default function OurLatest() {
    const [setSwiperRef] = useState(null);
    const { room } = useGlobalContext();
    const slideRef = useRef();
    const next = () => {
      slideRef.current.swiper.slideNext();
    };
    const prev = () => {
      slideRef.current.swiper.slidePrev();
    };
  return (
    <>
      <div className="w-full h-[1063px] ml:h-[820px] bg-[#0F3141] ml:w-[375px] ma:h-[900px] mp:w-[320px]">
        <div className="container relative">
          <h1 className="text-[60px] font-semibold pt-[129px] text-[white] ml:pt-[45px] ml:text-[40px] ma:text-[50px] ma:pt-[45px] ">
            Our lates projects
          </h1>
          <div className="hidden ml:flex ma:flex">
          <div className=" flex ml:flex cursor-pointer absolute left-[-1%] bottom-[33%] ml:bottom-[33.5%] ml:left-0 w-[90px] h-[90px] ml:w-[45px] ml:h-[45px] ma:w-[45px] ma:h-[45px] border-[#0F3141] z-[9999]  border-[8px] bg-[#F07454] rounded-[50%]  items-center justify-center"  >
            <i
              onClick={prev}
              className="rotate-180 fa-solid fa-arrow-right text-[44px] ml:text-[22px] ma:text-[22px] text-[#ffff]"
            ></i>
          </div>
          </div>
          <div className=" cursor-pointer absolute right-[4%] ml:right-0 bottom-[33%] ml:bottom-[33.5%] w-[90px] h-[90px] ma:w-[45px] ma:h-[45px] ml:w-[45px] ml:h-[45px] border-[#0F3141] z-[9999]  border-[8px] bg-[#F07454] rounded-[50%] flex items-center justify-center">
            <i
              onClick={next}
              className=" fa-solid fa-arrow-right text-[44px]  ml:text-[22px] ma:text-[22px] text-[#ffff]"
            ></i>
          </div>
          <div className="slide2 mt-[49px]">
            <Swiper
              onSwiper={setSwiperRef}
              ref={slideRef}
              centeredSlides={false}
              grid={{
                rows: 2,
              }}
              breakpoints={{
                0:{
                  slidesPerView: 2,
                  slidesPerColumn: 2,
                  spaceBetween: 8,
                },
                375:{
                  slidesPerView: 3.1,
                  spaceBetween: 30,
                  slidesPerColumn: 0,
                },
                425: {
                  slidesPerView: 2.4,
                  spaceBetween: 8,
                  slidesPerColumn: 2,
                },
                768: {
                  slidesPerView: 2.8,
                  spaceBetween: 30,
                  
                },
                1024: {
                  slidesPerView: 2.3,
                  spaceBetween: 30,
                  slidesPerColumn: 0,
                  rows: 0,
                },
                1440: {
                  slidesPerView: 3.2,
                  spaceBetween: 30,
                }
  
              }}
              pagination={{
                type: "fraction ",
              }}
              navigation={false}
              modules={[Navigation]}
              className="mySwiper  "
            >
              {room.length ? (
                room.map((lates, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      key={idx}
                      className="cursor-pointer hover:text-red-500"
                    >
                      <img
                        className="h-[520px] min-w-[420px] rounded-[30px] mr-[40px] ml:h-[208px] ml:min-w-[160px] ml:rounded-[8px] ma:rounded-[8px] ma:h-[208px] ma:min-w-[160px] mr:h-[290px] mr:min-w-[250px] mr:rounded-[8px] mp:h-[190px] mp:min-w-[140px]"
                        src={lates.img}
                        alt=""
                      />
                      <h1 className="text-white cursor-pointer text-[24px] font-semibold mt-[24px] mb-[16px] hover:text-red-500 ml:text-[16px] ml:mt-[8px] ml:mb-[2px] ma:text-[16px] ma:mb-[2px] mr:text-[16px] mr:mb-[2px]">
                        {lates.name}
                      </h1>
                      <p className="text-[#B6B9BF] text-[18px] font-semibold ml:text-[11px] ml:mb-[19px] ma:text-[11px] ma:mb-[19px] mr:text-[17px] mr:mb-[19px]">
                        {lates.category}
                      </p>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
