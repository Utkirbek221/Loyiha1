import React, { useRef, useState } from "react";
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
      <div className="w-full h-[970px] ml:w-[375xp] ml:h-[955px] mp:w-[320px]">
        <div className="container my:flex my:justify-center my:items-center my:flex-col">
          <div className="flex justify-between items-center mt-[160px] mb-[67px] ml:mt-[80px] ml:mb-[40px] ma:mt-[80px] ma:mb-[40px]  my:mt-[40px] my:gap-[50px]">
            <h1 className="text-[60px] font-semibold ml:text-[40px] ma:text-[40px] my:text-[40px] mp:text-[30px]">
              What our clients say
            </h1>
            <div className="text-[44px] ml:text-[24px] ml:flex ml:pt-[60px] ma:text-[24px] ma:flex ma:pt-[60px] my:text-[30px]">
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
            centeredSlides={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 1.6,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 0.9,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 1.6,
                spaceBetween: 30,
              }
            }}
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
                  <div className=" flex gap-[48px] my:flex my:justify-center my:items-center my:flex-col ma:flex ma:justify-start ma:items-startz">
                    <div className="flex justify-center items-center w-[838px] h-[493px] bg-[#FAF8F4] rounded-[16px] ml:w-[347px] ml:h-[678px] ml:flex-col ma:w-[425px] ma:h-[850px] ma:flex-col   mr:w-[670px] mr:h-[440px]">
                      <img
                        className="w-[286px] h-[397px] mr-[48px] ml-[48px] ml:w-[144px] ml:h-[200px] ma:w-[194px] ma:h-[250px] ma:mt-[-40px] mr:w-[230px] mr:h-[340px] mr:ml-[0px]"
                        src={infoo.img}
                        alt=""
                      />
                      <div className="h-[382px] ml:pt-[17px] ma:pt-[17px]">
                        <img
                          className="w-[32px] h-[32px]"
                          src={infoo.img2}
                          alt="w-[457px]"
                        />
                        <h1 className="w-[415px] h-[108px] text-[24px] font-semibold text-[#0F3141] mt-[16px] mb-[24px] ml:w-[290px] ml:mb-[16px] ml:text-[18px] mp:text-[15px] mp:w-[260px]  ma:w-[380px] ma:mb-[20px] ma:text-[24px] mr:text-[20px] mr:w-[350px] ">
                          {infoo.name}
                        </h1>
                        <p className="w-[405px] h-[108px] text-[#78756E] text-[18px] font-normal ml:text-[15px] ml:w-[270px] ma:text-[20px] ma:w-[370px] ma:mt-[60px] 
                        ma:mb-[50px] mp:mb-[0px] mp:mt-[-20px] ml:mb-[0px] ml:mt-[0px] mr:text-[16px] mr:w-[350px]">
                          {infoo.category}
                        </p>
                        <p className="pt-[65px] text-[18px] font-semibold text-[#565554] ml:pt-[83px]">
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
