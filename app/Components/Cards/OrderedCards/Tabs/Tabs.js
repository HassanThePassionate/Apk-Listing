import React from "react";
import Image from "next/image";
import Sliderbtn from "../Button/Sliderbtn";
import style from "./Tabs.module.css";
const categoryTitles = [
  "Hot List",
  "New Arrivals",
  "Featured List",
  "Legend List",
  "Card Leaderboard",
  "Strategy List",
  "Xiania List",
];

const Tabs = ({ swiperInstance }) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.title}>
          <Image
            src="https://static.extfans.com/onesite-client/images/app_hot.png?v=2.4.50"
            width={32}
            height={32}
            alt="img"
          />
          <h2>Trending By Categories</h2>
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.catagory}>
          {categoryTitles.map((title, index) => (
            <div className={style.text} key={index}>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <Sliderbtn swiperInstance={swiperInstance} />
      </div>
    </>
  );
};

export default Tabs;
