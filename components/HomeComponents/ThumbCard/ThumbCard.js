"use client";
import React, { useState } from "react";

import Sliderbtn from "./Button/Sliderbtn";
import Card from "./Card/Card";
import style from "./ThumbCards.module.css";
import Arrowbtn from "@/components/PostComponents/Postdetail/Arrowbtn/Arrowbtn";
import Image from "next/image";

const ThumbCards = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <div className="container">
        <div className={style.slider}>
          <div className={style.text}>
            <div className={style.title}>
              <Image
                src="https://static.extfans.com/onesite-client/images/app_hot.png?v=2.4.50"
                width={32}
                height={32}
                alt="img"
              />
              <h2>Trending Apps</h2>
              <Arrowbtn />
            </div>

            <Sliderbtn swiperInstance={swiperInstance} />
          </div>
          <div className={style.wrapper}>
            <Card setSwiperInstance={setSwiperInstance} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbCards;
