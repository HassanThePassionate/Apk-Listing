import React from "react";
import Heading from "./Heading/Heading";
import Card from "./Card/Card";
import style from "./SCard.module.css";
const SCard = ({ title }) => {
  return (
    <div className="container">
      <Heading title={title} />
      <div className={style.wrapper}>
        <Card />
      </div>
    </div>
  );
};

export default SCard;
