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
      <div className="w-full h-[1063px] bg-[#0F3141]">
        <div className="container relative">
          <h1 className="text-[60px] font-semibold pt-[129px] text-[white]">
            Our lates projects
          </h1>
          <div className="cursor-pointer absolute right-[4%] bottom-[33%] w-[90px] h-[90px] border-[#0F3141] z-[9999]  border-[8px] bg-[#F07454] rounded-[50%] flex items-center justify-center">
            <i
              onClick={next}
              className="fa-solid fa-arrow-right text-[44px] text-[#ffff]"
            ></i>
          </div>
          <div className="flex overflow-hidden mt-[100px]">
            <Swiper
              onSwiper={setSwiperRef}
              ref={slideRef}
              slidesPerView={3.1}
              centeredSlides={false}
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              navigation={false}
              modules={[Navigation]}
              className="mySwiper"
            >
              {room.length ? (
                room.map((lates, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      key={idx}
                      className="cursor-pointer hover:text-red-500"
                    >
                      <img
                        className="h-[520px] min-w-[420px] rounded-[30px] mr-[40px]"
                        src={lates.img}
                        alt=""
                      />
                      <h1 className="text-white cursor-pointer text-[24px] font-semibold mt-[24px] mb-[16px] hover:text-red-500">
                        {lates.name}
                      </h1>
                      <p className="text-[#B6B9BF] text-[18px] font-semibold">
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
