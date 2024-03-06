import React from "react";
import style from "./Similar.module.css";
import { data } from "@constant/Similardata";
import Image from "next/image";
const SimiliarCard = () => {
  return (
    <>
      <div className={style.boxes}>
        {data.map((e, index) => {
          return (
            <div className={style.box} key={index}>
              <div className={style.boxImage}>
                <Image src={e.img} alt="app" width={64} height={64} />
              </div>
              <div className={style.boxText}>
                <div className="texts">
                  <h3>{e.title}</h3>
                </div>
                <div className="texts">
                  <p>{e.catagory}</p>
                </div>
                <div className="texts">
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
          );
        })}
      </div>
    </>
  );
};

export default SimiliarCard;
