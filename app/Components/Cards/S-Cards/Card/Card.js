import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../../../../constant/SCard";
import style from "./Card.module.css";
import Rating from "../../Rating/Rating";

const Card = () => {
  return (
    <div className={style.cards}>
      {data.map((entry, index) => (
        <Link href="/post" className={style.link} key={index}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={entry.img} alt="app" width={64} height={64} />
            </div>
            <div className={style.text}>
              <h3>{entry.title}</h3>
              <p>{entry.catagory}</p>
              <Rating />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
