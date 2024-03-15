import React from "react";
import style from "./Postdetail.module.css";
import Aboutgame from "./Aboutgame/Aboutgame";

import Datasafety from "./DataSafety/Datasafety";
import Gameslider from "./GameSlider/Gameslider";
import Genres from "./Genres/Genres";
const Postdetail = () => {
  return (
    <>
      <div className={style.post_detail}>
        <Gameslider />
        <Aboutgame />
        <Datasafety />
        <Genres />
      </div>
    </>
  );
};

export default Postdetail;
