import React, { useRef, useState } from "react";
import home from "../img/home.svg";
import { useGlobalContext } from "../Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Section() {
  const { products, room } = useGlobalContext();
  const [setSwiperRef] = useState(null);
  const SlideRef = useRef();
  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };
  const slideRef = useRef();
  const next = () => {
    slideRef.current.swiper.slideNext();
  };

  return (
    <section className="w-full h-[5054px] ">
      <div className="w-full h-[676px]  flex justify-center items-center bg-[#FAF8F4]">
        <div className="container w-[1440px] h-[676px] overflow-hidden relative z-[1]">
          <div className="w-[1000px] h-[1000px] border-2 rounded-[50%]  flex justify-center items-center absolute  left-[10%] top-[-24%] ">
            <div className="w-[765px] h-[765px] border-2 rounded-[50%]  flex justify-center items-center">
              <div className="w-[471px] h-[471px] border-2 rounded-[50%]  flex justify-center items-center">
                <div className="w-[176px] h-[176px] border-2 rounded-[50%]"></div>
              </div>
            </div>
          </div>

          <h1 className="text-[60px] font-semibold pt-[113px] z-10 relative">
            What we provide
          </h1>
          <div className="flex gap-[59px] z-10 relative">
            <div>
              <div className="w-[350px] mt-[64px]">
                <img src={home} alt="" />
                <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold">
                  10 years of experience in furniture business
                </h3>
                <p className="pb-[24px]  text-[18px] font-normal">
                  We're already established since 2012, and in 10 years we have
                  lots of positive reviews and achievements
                </p>
                <button className="flex items-center text-[#F26440] ">
                  <p className="text-[14px] font-semibold">See more</p>
                  <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="w-[350px] mt-[64px]">
                <img src={home} alt="" />
                <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold">
                  10 years of experience in furniture business
                </h3>
                <p className="pb-[24px]  text-[18px] font-normal">
                  We’re already established since 2012, and in 10 years we have
                  lots of positive reviews and achievements
                </p>
                <button className="flex items-center text-[#F26440] ">
                  <p className="text-[14px] font-semibold">See more</p>
                  <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="w-[350px] mt-[64px]">
                <img src={home} alt="" />
                <h3 className="pt-[16px] pb-[16px] w-[300px] text-[24px] font-semibold">
                  10 years of experience in furniture business
                </h3>
                <p className="pb-[24px]  text-[18px] font-normal">
                  We’re already established since 2012, and in 10 years we have
                  lots of positive reviews and achievements
                </p>
                <button className="flex items-center text-[#F26440] ">
                  <p className="text-[14px] font-semibold">See more</p>
                  <i className="fa-solid fa-arrow-right pl-[11px] text-[18px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                products.map((item) => (
                  <SwiperSlide>
                    <div className="" key={item.id}>
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
      <div className="w-full h-[1063px] bg-[#0F3141]">
        <div className="container relative">
          <h1 className="text-[60px] font-semibold pt-[129px] text-[white]">
            Our lates projects
          </h1>
          <div  className="absolute right-[4%] bottom-[33%] w-[90px] h-[90px] border-[#0F3141] z-[9999]  border-[8px] bg-[#F07454] rounded-[50%] flex items-center justify-center">
            <i onClick={next}  className="fa-solid fa-arrow-right text-[44px] text-[#ffff]"></i>
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
                room.map((lates) => (
                  <SwiperSlide>
                    <div key={lates.id}>
                      <img
                        className="h-[520px] min-w-[420px] rounded-[30px] mr-[40px]"
                        src={lates.img}
                        alt=""
                      />
                      <h1 className="text-[white] text-[24px] font-semibold mt-[24px] mb-[16px]">
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
    </section>
  );
}
