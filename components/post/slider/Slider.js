"use client";
import React, { useState } from "react";
import style from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Buttons from "./button/Buttons";

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNexts = () => swiperInstance && swiperInstance.slideNext();
  const goPrevs = () => swiperInstance && swiperInstance.slidePrev();
  return (
    <div className={style.wrapper}>
      <Swiper
        slidesPerView={2}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          nextEl: "#nexts",
          prevEl: "#prevs",
        }}
        className='mySwiper w-full max-w-[1100px]  '
      >
        <Buttons next={goNexts} pre={goPrevs} />
        <SwiperSlide>
          <div className={style.slide}>
            <Image
              src='https://play-lh.googleusercontent.com/9KRYStNLtvyfndMv2a7AAbdllhHJS-jYEb9p3qhGwEQMF9LhDosPl5ECKmY8gdJIhBc=w526-h296-rw'
              alt='img'
              width={526}
              height={296}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Image
              src='https://play-lh.googleusercontent.com/5eobZuB5QW7-maXp_0KYJKPn9Qzma2dASYhQCfk7eFO0L6AFZT8nNU6VIOEJdA8rP2SX=w526-h296-rw'
              alt='img'
              width={526}
              height={296}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Image
              src='https://play-lh.googleusercontent.com/rragXRVWdviTkLcZxpkl4foPsxl_gAYAGx6p_AsUDY7aQlkOi2JAufONSo817uNLV6E=w526-h296-rw'
              alt='img'
              width={526}
              height={296}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Image
              src='https://play-lh.googleusercontent.com/GgtmaWKwDIePBIdpmQK3wM7F1CP65pLuHIU0vi9xoVjMwliZgtzNwwf2Gpt4IhSzIA=w526-h296-rw'
              alt='img'
              width={526}
              height={296}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
