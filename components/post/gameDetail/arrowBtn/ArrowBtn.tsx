import React from "react";
import style from "./Arrow.module.css";
const ArrowBtn = () => {
  return (
    <div className={style.arrow}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        id='IconChangeColor'
        height='22'
        width='22'
      >
        <path
          d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'
          id='mainIconPathAttribute'
          strokeWidth='0'
          stroke='#ff0000'
          fill='#5F6364'
        ></path>
      </svg>
    </div>
  );
};

export default ArrowBtn;
