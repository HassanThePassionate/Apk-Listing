import React from "react";
import flash from "/public/light.svg";
import Image from "next/image";
import { data } from "@constant/SocialCardData";
import style from "./Card/SocialCards.module.css";
const SocialCards = () => {
  return (
    <>
      {data.map((e, index) => {
        return (
          <div className={style.cardListIteam} key={index}>
            <div className={style.cardIteamContent} key={index}>
              <div className={style.cardId}>
                {/* <span className="num">No</span> */}
                <span className={style.digit}>{index + 1}</span>
              </div>
              <div className={style.cardImage}>
                <div className={style.imgWrapper}>
                  <div className={style.svgWrapper}>
                    <Image
                      src={e.img}
                      height={64}
                      width={64}
                      className={style.gameIcon}
                    />
                    <Image
                      src={flash}
                      height={24}
                      width={24}
                      className={style.flashIcon}
                    />
                  </div>
                </div>
              </div>
              <div className={style.cardDes}>
                <div className={style.cardTitle}>{e.title}</div>
                <div className={style.cardSubTitle}>{e.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SocialCards;
