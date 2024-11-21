import React from "react";
import SmallCards from "./smallCards/SmallCards";
import style from "./widget.module.css";
const Widget = () => {
  return (
    <div className={style.wrap}>
      <h2>Top apps & software</h2>
      <SmallCards />
    </div>
  );
};

export default Widget;
