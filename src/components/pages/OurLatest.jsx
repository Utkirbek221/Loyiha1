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
  return (
    <>
      <div className="w-full h-[1063px] bg-[#0F3141] ml:w-[375px] ml:h-[820px]">
        <div className="container relative">
          <h1 className="text-[60px] font-semibold pt-[129px] text-[white] ml:pt-[45px] ml:text-[40px]">
            Our lates projects
          </h1>
          <div className="ml:hidden cursor-pointer absolute right-[4%] bottom-[33%] w-[90px] h-[90px] border-[#0F3141] z-[9999]  border-[8px] bg-[#F07454] rounded-[50%] flex items-center justify-center">
            <i
              onClick={next}
              className="fa-solid fa-arrow-right text-[44px] text-[#ffff]"
            ></i>
          </div>
          <div className="flex overflow-hidden mt-[100px] ml:mt-[49px] ml:mr-[-180px]">
            <Swiper
              onSwiper={setSwiperRef}
              ref={slideRef}
              centeredSlides={false}
              grid={{
              rows: 2,
            }}
              breakpoints={{
                0:{
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                375:{
                  slidesPerView: 3.1,
                  spaceBetween: 30,
                },
  
              }}
              pagination={{
                type: "fraction",
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
                        className="h-[520px] min-w-[420px] rounded-[30px] mr-[40px] ml:h-[208px] ml:min-w-[160px] ml:rounded-[8px]"
                        src={lates.img}
                        alt=""
                      />
                      <h1 className="text-white cursor-pointer text-[24px] font-semibold mt-[24px] mb-[16px] hover:text-red-500 ml:text-[16px] ml:mt-[8px] ml:mb-[2px]">
                        {lates.name}
                      </h1>
                      <p className="text-[#B6B9BF] text-[18px] font-semibold ml:text-[11px]">
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
