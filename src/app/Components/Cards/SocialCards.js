import React from "react";
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
                  </div>
                </div>
              </div>
              <div className={style.cardDes}>
                <div className={style.cardTitle}>{e.title}</div>

                <div className={style.sCatagory}>
                  <div className={style.cardSubTitle}>{e.description}</div>
                  <div className="texts" style={{ marginTop: "2px" }}>
                    <span className="rating">4.0</span>
                    <span className="star">
                      <i className="star-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                      </i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SocialCards;
