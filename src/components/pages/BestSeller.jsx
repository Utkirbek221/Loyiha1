import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useGlobalContext } from "../../Context";

export default function BestSellex() {
  const { products } = useGlobalContext();
  const [setSwiperRef] = useState(null);
  const SlideRef = useRef();
  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };
  return (
    <>
      <div className="w-full h-[796px]  flex justify-center items-center ml:w-[375px] ml:h-[1400px] mp:w-[320px]">
        <div className="container  h-[796px] ml:w-[375px] ml:h-[1269px]">
          <div className="flex justify-between items-center mt-[160px] ml:mt-[40px] ma:mt-[80px] mr:mt-[80px]">
            <h1 className="text-[60px] font-semibold ml:text-[40px]  ma:text-[40px]">
              Best seller products
            </h1>
            <div className="text-[44px] ml:flex ml:gap-[16px] ml:pt-[60px] ma:flex ma:pt-[60px] ">
              <i
                onClick={handlePrev}
                className="fa-solid fa-arrow-left mr-[16px] ml:text-[24px] ml:mr-[0px] ma:text-[24px]"
              ></i>
              <i
                onClick={handleNext}
                className="fa-solid fa-arrow-right ml:text-[24px] ma:text-[24px]"
              ></i>
            </div>
          </div>
          <div className="slide1 pt-[72px] overflow-hidden">
            <Swiper
              onSwiper={setSwiperRef}
              ref={SlideRef}
              centeredSlides={false}
              grid={{
                rows: 2,
              }}
              breakpoints={{
                0: {

                  slidesPerView: 2,
                  slidesPerColumn:2,
                  spaceBetween: 10,
                },
                375: {
                  slidesPerView: 5.2,
                  spaceBetween: 30,
                },
                425: {
                  slidesPerView: 2.1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2.95,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5.2,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                type: "fraction",
                clickable: true,
                el: ".swiper-pagination",
                
              }}
              navigation={false}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products.length ? (
                products.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div key={idx} className=" ml:mb-[24px] ma:mb-[24px] mr:mb-[24px] ">
                      <img
                        className="
                        min-w-[250px] h-[250px]
                        mp:min-w-[130px] mp:h-[190px]
                        ml:min-w-[150px] ml:h-[210px]
                        ma:min-w-[150px] ma:h-[210px]
                        mr:min-w-[200px] mr:h-[240px]
                        my:min-w-[150px] my:h-[210px]
                        rounded-[8px] mr-[24px]"
                        src={item.img}
                        alt=""
                      />
                      <p className="pt-[8px] pb-[8px] text-[#0F3141] opacity-[0.5] text-[14px] font-normal">
                        {item.name}
                      </p>
                      <h4 className="text-[#0F3141] text-[20px] font-semibold ml:text-[12px]">
                        {item.category}
                      </h4>
                      <p className="pt-[8px] pb-[8px] text-[#0F3141] opacity-[0.5] text-[12px] font-normal">
                        {item.size}
                      </p>
                      <h3 className="text-[#F07454] text-[18px] font-black">
                        {item.price}
                      </h3>
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
