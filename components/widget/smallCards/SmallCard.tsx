import Image from "next/image";
import React from "react";
import style from "./smallCards.module.css";
interface Props {
  elm: {
    title: string;
    img: string;
  };
}
const SmallCard = ({ elm }: Props) => {
  return (
    <div className={style.card} key={elm.title}>
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
};

export default SmallCard;
