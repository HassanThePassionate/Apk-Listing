"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import style from "./slider.module.css";
// Import Swiper styles
import "swiper/css/bundle";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SliderButtons from "./SliderButton/SliderButtons";
import { slidesData } from "@/constant/SliderData";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView='auto'
        spaceBetween={30}
        navigation={{
          nextEl: "#swiper-button-next",
          prevEl: "#swiper-button-prev",
        }}
        modules={[Navigation]}
        className='mySwiper '
      >
        <SliderButtons />
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className='max-w-max'>
            <div>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={380}
                height={296}
                className='rounded-[12px] max-[1400px]:w-[300px] '
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
