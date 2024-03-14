"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import Image from "next/image";
import style from "./Card.module.css";

import { data } from "../../../../constant/ThumbCard";
import Rating from "@/components/Cards/Rating/Rating";
const Card = ({ setSwiperInstance }) => {
  const renderSwiperSlides = () => {
    return data.map((entry, index) => (
      <SwiperSlide key={index} style={{ maxWidth: "180px", width: "140px" }}>
        <Link href="/post">
          <div className={style.card}>
            <Image src={entry.img} alt="img" width={141} height={141} />
            <div className={style.text}>
              <h3>{entry.title}</h3>
              <Rating />
            </div>
          </div>
        </Link>
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      speed={800}
      slidesPerView="auto"
      spaceBetween={30}
      onSwiper={setSwiperInstance}
      navigation={{ nextEl: "#next", prevEl: "#prev" }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {renderSwiperSlides()}
    </Swiper>
  );
};

export default Card;
