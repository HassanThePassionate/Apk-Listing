import React from "react";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Gametext from "./Gametext/Gametext";
import Rating from "./Rating/Rating";
import Buttons from "./Buttons/Buttons";
import Text from "./Text/Text";
import style from "./Gamedetail.module.css";
import Qrcode from "./QrCode/Qrcode";

const Gamedetail = () => {
  return (
    <div className={style.posts}>
      <BreadCrumb />
      <div className={style.wrapper}>
        <div className={style.iteam}>
          <Gametext />
          <div className={style.iteam_detail}>
            <Rating />
            <Buttons />
            <Text />
          </div>
        </div>
        <Qrcode />
      </div>
    </div>
  );
};

export default Gamedetail;
