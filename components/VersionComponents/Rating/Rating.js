import React from "react";
import Image from "next/image";
import style from "./Rating.module.css";

const Rating = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.rating}>
          <span className={style.title}>4.5</span>
          <span className={style.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <p>1.29M reviews</p>
        </div>
        <div className={style.line}></div>
        <div className={style.downloads}>
          <span className={style.title}>50M+</span>
          <p>Downloads</p>
        </div>
        <div className={style.line}></div>
        <div className={style.rated}>
          <Image
            src="https://play-lh.googleusercontent.com/mw_NfsvKM8m6RPv8Fz2GQawCOsqWv010saMnc7zbWalMxuaA9IY8h7E0VMieLxSxAFB98NFeYqbFrXXq=w48-h16-rw"
            alt="Teen"
            width={16}
            height={16}
          />
          <p>Teen</p>
        </div>
      </div>
    </>
  );
};

export default Rating;
