import React from "react";
import style from "./Version.module.css";
import Logo from "../ProductComponents/Gamelogo/Logo";
import Gametext from "../ProductComponents/Gametext/Gametext";
import Rating from "./Rating/Rating";
import Gameslider from "./GameSlider/Gameslider";

const Version = () => {
  return (
    <div className={style.wrapper}>
      <div className="content">
        <div className={style.game_content}>
          <Logo />
          <Gametext />
        </div>
        <Rating />
      </div>
      <Gameslider />
    </div>
  );
};

export default Version;
