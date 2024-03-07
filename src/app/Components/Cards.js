import React, { useState, useEffect } from "react";
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
  // Number of slides to show at once.
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    // This function will handle the resizing of the slideshow based on the window size
    const handleResize = () => {
      // If the window width is less than or equal to 1024 and greater than or equal to 600, set the slidesPerView to 2
      if (window.innerWidth <= 1024 && window.innerWidth >= 600) {
        setSlidesPerView(2);
        // If the window width is less than or equal to 600, set the slidesPerView to 1
      } else if (window.innerWidth <= 600) {
        setSlidesPerView(1);
        // Otherwise, set the slidesPerView to 3
      } else {
        setSlidesPerView(3);
      }
    };

    // Call the handleResize function to set the slidesPerView on initial render
    handleResize();
    // Add an event listener to listen for window resize events
    window.addEventListener("resize", handleResize);
    // Return a function to remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section className={style.cardSection}>
        <div className="container">
          <div className={style.cardsTilte}>
            <Tabs Instance={swiperInstance} />
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
