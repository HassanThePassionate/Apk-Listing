"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import style from "./OrderedCard.module.css";

import { data } from "../../../constant/data";
import Card from "./Card/Card";
import Tabs from "./Tabs/Tabs";

const OrderedCard = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSlidesPerView(width <= 1024 ? (width >= 600 ? 2 : 1) : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className={style.tilte}>
        <Tabs swiperInstance={swiperInstance} />
      </div>
      <div className={style.cards}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            nextEl: "#nexts",
            prevEl: "#prevs",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div className={style.wrapper}>
            {data.map((e, index) => {
              return (
                <SwiperSlide
                  style={{
                    maxWidth: "550px",
                    width: "430px",
                    marginRight: "1px",
                  }}
                  key={index}
                >
                  <div className={style.card}>
                    <div className={style.card_wrapper}>
                      <div className={style.card_content}>
                        <Image
                          className={style.head_img}
                          src={e.Himg}
                          width={840}
                          height={240}
                          alt="img"
                        />
                        <Image
                          className={style.card_img}
                          src={e.Cimg}
                          width={400}
                          height={200}
                          alt="img"
                        />
                        <span className={style.card_title}>{e.title}</span>
                        <div className={style.card_div}></div>
                        <div className={style.list}>
                          <div className={style.rank_list}>
                            <div className="pb-1">
                              <Card />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderedCard;
