import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Card.module.css";
import { data } from "../../../../constant/OrderedCard";
import Rating from "../../Rating/Rating";

const Card = () => {
  return (
    <>
      {data.map((entry, index) => (
        <Link href="/post" key={index}>
          <div className={style.cards}>
            <div className={style.card}>
              <div className={style.id}>
                <span className={style.digit}>{index + 1}</span>
              </div>
              <div className={style.image}>
                <div className={style.img}>
                  <div className={style.svg}>
                    <Image
                      src={entry.img}
                      height={64}
                      width={64}
                      className={style.icon}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className={style.description}>
                <div className={style.title}>{entry.title}</div>
                <div className={style.catagory}>
                  <div className={style.sub_title}>{entry.description}</div>
                  <Rating />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
