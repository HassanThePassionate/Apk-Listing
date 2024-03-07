import React from "react";
import SimiliarCard from "../Cards/Card/SimiliarCard";
import style from "@/app/style/Postdeatail.module.css";

const Similar = () => {
  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height="18"
      width="18"
    >
      <path
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        fill="#5F6364"
      />
    </svg>
  );

  return (
    <div className={style.similargame}>
      <div className={style.title1}>
        <h2>Similar Games</h2>
        <div className={style.arrow}>{arrowIcon}</div>
      </div>
      <SimiliarCard />

      <div className={style.title2}>
        <h2>More by OppanaGames FZC LLC</h2>
        <div className={style.arrow}>{arrowIcon}</div>
      </div>
      <SimiliarCard />
    </div>
  );
};

export default Similar;
