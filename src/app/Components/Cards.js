import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Tabs from "./Tabs";
import { data } from "@constant/data";
import SocialCards from "./Cards/SocialCards";
import style from "../style/Cards.module.css";

const Cards = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <section className={style.cardSection}>
        <div className="container">
          <div className={style.cardsTilte}>
            <Tabs Instance={swiperInstance} />
          </div>
          <div className={style.cards}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              navigation={{
                nextEl: "#nexts",
                prevEl: "#prevs",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <div className={style.cardsWrapper}>
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
                        <div className={style.cardWrapper}>
                          <div className={style.cardContent}>
                            <Image
                              className={style.headImg}
                              src={e.Himg}
                              width={840}
                              height={240}
                              alt="img"
                            />
                            <Image
                              className={style.cardImg}
                              src={e.Cimg}
                              width={400}
                              height={200}
                              alt="img"
                            />
                            <span className={style.cardSpan}>{e.title}</span>
                            <div className={style.cardDiv}></div>
                            <div className={style.cardListWrapper}>
                              <div className={style.rankList}>
                                <div style={{ paddingBottom: "10px" }}>
                                  <SocialCards />
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
      </section>
    </>
  );
};

export default Cards;
