"use client";
import React, { useState } from "react";
import Heading from "../S-Cards/Heading/Heading";
import Sliderbtn from "./Button/Sliderbtn";
import Card from "./Card/Card";
import style from "./ThumbCards.module.css";

const ThumbCards = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <div className="container">
        <div className={style.text}>
          <Heading title="Recommended" />
          <Sliderbtn swiperInstance={swiperInstance} />
        </div>
        <div className={style.slider}>
          <div className={style.wrapper}>
            <Card setSwiperInstance={setSwiperInstance} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbCards;
