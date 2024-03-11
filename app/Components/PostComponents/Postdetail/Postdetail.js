import React from "react";
import style from "./Postdetail.module.css";
import Aboutgame from "./Aboutgame/Aboutgame";
import Tags from "./Tags/Tags";
import Datasafety from "./DataSafety/Datasafety";
import Gameslider from "./GameSlider/Gameslider";
const Postdetail = () => {
  return (
    <>
      <div className={style.post_detail}>
        <Gameslider />
        <Aboutgame />
        <Tags />
        <Datasafety />
      </div>
    </>
  );
};

export default Postdetail;
