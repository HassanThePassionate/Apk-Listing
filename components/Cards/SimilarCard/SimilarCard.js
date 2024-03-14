import React from "react";
import Image from "next/image";
import Rating from "../Rating/Rating";
import { data } from "../../../constant/Similardata";
import style from "./SimilarCard.module.css";
import Link from "next/link";
const SimilarCard = () => {
  return (
    <div className={style.cards}>
      {data.map((item, index) => (
        <Link href="/post" key={index} className={style.card}>
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
        </Link>
      ))}
    </div>
  );
};

export default SimilarCard;
