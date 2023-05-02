import React, { useRef, useState }  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGlobalContext } from "../../Context";

export default function ClientsSay() {
    const { info } = useGlobalContext();
    const [setSwiperRef] = useState(null);
    const Slideref = useRef();
    const HandleNext = () => {
      Slideref.current.swiper.slideNext();
    };
    const HandlePrev = () => {
      Slideref.current.swiper.slidePrev();
    };
  return (
    <>
      <div className="w-full h-[970px] ">
        <div className="container">
          <div className="flex justify-between items-center mt-[160px] mb-[67px]">
            <h1 className="text-[60px] font-semibold">What our clients say</h1>
            <div className="text-[44px]">
              <i
                onClick={HandlePrev}
                className="fa-solid fa-arrow-left mr-[16px] "
              ></i>
              <i onClick={HandleNext} className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            ref={Slideref}
            slidesPerView={1.61}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {info.length ? (
              info.map((infoo, idx) => (
                <SwiperSlide key={idx}>
                  <div className=" flex gap-[48px]">
                    <div className="flex justify-center items-center w-[838px] h-[493px] bg-[#FAF8F4] rounded-[16px]">
                      <img
                        className="w-[286px] h-[397px] mr-[48px] ml-[48px]"
                        src={infoo.img}
                        alt=""
                      />
                      <div className="h-[382px]">
                        <img
                          className="w-[32px] h-[32px]"
                          src={infoo.img2}
                          alt="w-[457px]"
                        />
                        <h1 className="w-[415px] h-[108px] text-[24px] font-semibold text-[#0F3141] mt-[16px] mb-[24px]">
                          {infoo.name}
                        </h1>
                        <p className="w-[405px] h-[108px] text-[#78756E] text-[18px] font-normal">
                          {infoo.category}
                        </p>
                        <p className="pt-[65px] text-[18px] font-semibold text-[#565554]">
                          {infoo.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <></>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
