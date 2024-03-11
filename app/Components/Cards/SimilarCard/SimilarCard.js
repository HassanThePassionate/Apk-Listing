import React from "react";
import Image from "next/image";
import Rating from "../Rating/Rating";
import { data } from "../../../../constant/Similardata";
import style from "./SimilarCard.module.css";
const SimilarCard = () => {
  return (
    <div className={style.cards}>
      {data.map((item, index) => (
        <div className={style.card} key={index}>
          <div className={style.image}>
            <Image src={item.img} alt="app" width={64} height={64} />
          </div>
          <div className={style.texts}>
            <div className="text">
              <h3>{item.title}</h3>
            </div>
            <div className="text">
              <p>{item.catagory}</p>
            </div>
            <div className="text">
              <Rating />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimilarCard;
