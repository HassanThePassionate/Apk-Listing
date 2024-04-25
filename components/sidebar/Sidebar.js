import React from "react";
import style from "./sidebar.module.css";
import Image from "next/image";
import { data } from "@/constant/data";
const Sidebar = () => {
  return (
    <div className={style.wrap}>
      <h2>Top apps & software</h2>
      <div className={style.cards}>
        {data.map((elm) => {
          return (
            <div className={style.card}>
              <div className={style.image}>
                <div className={style.img}>
                  <Image src={elm.img} alt='img' width={40} height={40} />
                </div>
                <div className={style.title}>{elm.title}</div>
              </div>

              <div className={style.btn}>
                <button>Download</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
