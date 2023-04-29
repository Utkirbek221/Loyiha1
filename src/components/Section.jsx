import React, { useRef, useState } from "react";
import home from "../img/home.svg";
import { useGlobalContext } from "../Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import bgImg from "../img/bgimg.svg";
import SS from "./SS";
import burchak from "../img/burchak.svg";
import burchak2 from "../img/burchak2.svg";

export default function Section() {
  const { products, room, info } = useGlobalContext();

  const [activeButton, setActiveButton] = useState(0);
  const handleClick = (index) => {
    setActiveButton(index);
  };
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

  const Slideref = useRef();
  const HandleNext = () => {
    Slideref.current.swiper.slideNext();
  };
  const HandlePrev = () => {
    Slideref.current.swiper.slidePrev();
  };

  const style = {
    button:
      "flex gap-[10px] justify-center items-center rounded-[4px] text-[#ffff] w-[168px] h-[56px]",
    text: "text-[60px] font-semibold  pt-[16px]  pb-[1px]",
  };

  return (
    <section className="w-full ">
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
                products.map((item,idx) => (
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
                room.map((lates,idx) => (
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
            <SS activeButton={activeButton} handleClick={handleClick} />
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
              info.map((infoo,idx) => (
                <SwiperSlide key={idx}>
                  <div className=" flex gap-[48px]" >
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
      <div className="w-full h-[806px] relative overflow-y-hidden bg-[#F5F6F8]">
        <div className="container relative">
          <div className=" w-[1000px] h-[1000px] border-2 rounded-[50%]  flex justify-center items-center absolute top-[48%] right-[67%]">
            <div className="w-[765px] h-[765px] border-2 rounded-[50%]  flex justify-center items-center">
              <div className="w-[471px] h-[471px] border-2 rounded-[50%]  flex justify-center items-center">
                <div className="w-[176px] h-[176px] border-2 rounded-[50%]"></div>
              </div>
            </div>
          </div>
          <div className="container relative">
            <h1 className=" pt-[142px] text-[60px] font-semibold w-[530px]">
              We pay details in every our work
            </h1>
            <p className="text-[#0F3141] text-[20px] font-normal w-[740px]  pt-[44px] pb-[98px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              et nisl tristique nulla. Nisl, egestas molestie vestibulum lectus
              habitasse donec morbi. At est parturient id eu ut.{" "}
            </p>
            <div className="flex gap-[32px] items-center">
              <button className="rounded-[8px] text-[#fff] bg-[#EF7D60] w-[160px] h-[54px] text-[18px] font-semibold">
                Contact Us
              </button>
              <p className="text-[20px] font-normal underline">View Projects</p>
            </div>
          </div>
          <div className="relative bg-black w-full h-full  mt-[-608px] ">
            <img className="absolute  right-[0px]" src={burchak} alt="" />
            <img
              className="absolute right-[12%] top-[350px]"
              src={burchak2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
