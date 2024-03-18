"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Gameslider.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Gameslider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNexts = () => swiperInstance && swiperInstance.slideNext();
  const goPrevs = () => swiperInstance && swiperInstance.slidePrev();

  return (
    <>
      <div className={style.gameslider}>
        <Swiper
          slidesPerView={"auto"}
          speed={1100}
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
            <button onClick={goPrevs} className="l-2">
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
            <button onClick={goNexts} className="r-2">
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
                  src="https://play-lh.googleusercontent.com/jjp4ob31nLx7Br9eN7zagC8KEXiojnWH5nq8M7NzNFgC4Y80YHjBzyJSmhxsg7lo-qo=w526-h296-rw"
                  alt="img"
                  width={315}
                  height={177}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.image}>
                <Image
                  src="https://play-lh.googleusercontent.com/OWzSareLY5n3lJEpX2K6JAhDZccBxIztd02zUq_v5CyRMdy-e8dbYBdQS4GMULZz1wys=w526-h296-rw"
                  alt="img"
                  width={315}
                  height={177}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.image}>
                <Image
                  src="https://play-lh.googleusercontent.com/nGdeh1-NBXq0zPga7xwMpdDKFhtXFzCDcK3ngdgvMqNMIcRNwWKf3LkvL46MCrd3tXc=w526-h296-rw"
                  alt="img"
                  width={315}
                  height={177}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.image}>
                <Image
                  src="https://play-lh.googleusercontent.com/WUWycHY2dfi08MJ1BuZt3KtmWy6FaWx6gYTTs9RzoRAFLyzFBYDxf5GK43PyY5Nx66g=w526-h296-rw"
                  alt="img"
                  width={315}
                  height={177}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.image}>
                <Image
                  src="https://play-lh.googleusercontent.com/7auLrhKBbPw-blMIHBNuoYcD7wn1pKLYDm3WyI3Zsx5GoIHH-CgbBTDiq7JPnUr8MaDE=w526-h296-rw"
                  alt="img"
                  width={315}
                  height={177}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.image}>
                <Image
                  src="https://play-lh.googleusercontent.com/FLtaM9Ityi6zkSgnUNAziKwL6_9xinKpqbSOUrV1vRXP7hP7k8eOLbez2qhHFPykhxrj=w526-h296-rw"
                  alt="img"
                  width={315}
                  height={177}
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Gameslider;
