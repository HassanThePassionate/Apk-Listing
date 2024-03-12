"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Gameslider.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Gameslider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const goNexts = () => swiperInstance && swiperInstance.slideNext();
  const goPrevs = () => swiperInstance && swiperInstance.slidePrev();
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 600 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          nextEl: "#nexts",
          prevEl: "#prevs",
        }}
        className="mySwiper"
      >
        <div className={style.buttons}>
          <button onClick={goPrevs} className="l-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              id="IconChangeColor"
              height="12"
              width="12"
              className="slider-svg"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                id="mainIconPathAttribute"
                strokeWidth="0.5"
                stroke="#ff0000"
              ></path>
            </svg>
          </button>
          <button onClick={goNexts} className="r-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              id="IconChangeColor"
              height="12"
              width="12"
            >
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                id="mainIconPathAttribute"
                strokeWidth="0.5"
                stroke="#ff0000"
                className="slider-svg"
              ></path>
            </svg>
          </button>
        </div>
        <div className={style.wrapper}>
          <SwiperSlide>
            <div className={style.image}>
              <Image
                src="https://play-lh.googleusercontent.com/wq8j0eajviPxSZHa51zj2VtkDhT2Tovdm6ByVQY99offUKmhJGVmbX-uSzlhIt2Ffg=w2560-h1440-rw"
                alt="img"
                width={736}
                height={414}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              marginRight: "10px",
            }}
          >
            <div className={style.image}>
              <Image
                src="https://play-lh.googleusercontent.com/LnoB2O-eMnpDUdFQ0fTqaKDnWUSPMYWtr7vV0Q_PUX6p8vOWfp-j9xmdxtO-yTjG2QI=w2560-h1440-rw"
                alt="img"
                width={736}
                height={414}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              marginRight: "1px",
            }}
          >
            <div className={style.image}>
              <Image
                src="https://play-lh.googleusercontent.com/hdDZNpPhwN13dQnV8bIjL7jokrJVB2xomGc18oHtomavesMzDQrMhocjsImPRaFpRw_Z=w2560-h1440-rw"
                alt="img"
                width={736}
                height={414}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              marginRight: "1px",
            }}
          >
            <div className={style.image}>
              <Image
                src="https://play-lh.googleusercontent.com/tkDyfbAGHnrHb9j4-Sbk1RyK_GtkHmmB-9VfHCVGg6p2hGJDmCZTIMEUDWXTA3M1S9c=w2560-h1440-rw"
                alt="img"
                width={736}
                sas
                height={414}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              marginRight: "1px",
            }}
          >
            <div className={style.image}>
              <Image
                src="https://play-lh.googleusercontent.com/5Ibaqy_24ticqqLkAMQcRrvW--4K4uhDLqLoVQsYd7cGNcVLIJAAYCTBdArqM0gPTQ=w2560-h1440-rw"
                alt="img"
                width={736}
                height={414}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              marginRight: "1px",
            }}
          >
            <div className={style.image}>
              <Image
                src="https://play-lh.googleusercontent.com/tMX61_jmONRF2H7XLdoRjTEGEzAaCA78M5m81w2m_XC8OmsHUKFEdYJ9ZQl_MPHmRWU=w2560-h1440-rw"
                alt="img"
                width={736}
                height={414}
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Gameslider;
