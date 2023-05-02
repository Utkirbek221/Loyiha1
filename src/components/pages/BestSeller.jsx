import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
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
  return(
  <>
    <div className="w-full h-[796px]  flex justify-center items-center">
      <div className="container w-[1440px] h-[796px] ">
        <div className="flex justify-between items-center mt-[160px] ">
          <h1 className="text-[60px] font-semibold">Best seller products</h1>
          <div className="text-[44px]">
            <i
              onClick={handlePrev}
              className="fa-solid fa-arrow-left mr-[16px] "
            ></i>
            <i onClick={handleNext} className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="flex pt-[72px] overflow-hidden">
          <Swiper
            onSwiper={setSwiperRef}
            ref={SlideRef}
            slidesPerView={5.2}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.length ? (
              products.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div key={idx}>
                    <img
                      className="min-w-[250px] h-[250px] rounded-[8px] mr-[24px]"
                      src={item.img}
                      alt=""
                    />
                    <p className="pt-[8px] pb-[8px] text-[#0F3141] opacity-[0.5] text-[14px] font-normal">
                      {item.name}
                    </p>
                    <h4 className="text-[#0F3141] text-[20px] font-semibold">
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
  )
}
