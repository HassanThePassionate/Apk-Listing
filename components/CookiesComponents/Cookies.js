import React from "react";
import Faq from "./Faqs/Faq";
import style from "./Cookies.module.css";
const Cookies = () => {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h2>Cookies Policy</h2>
        <span>Last updated: June 12, 2023</span>
      </div>
      <Faq />
    </div>
  );
};

export default Cookies;
