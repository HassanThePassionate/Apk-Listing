"use client";
import { cardItem } from "@/constant/CardItem";
import React from "react";
import SmallCard from "./SmallCard";
import style from "./smallCards.module.css";
import SmallCardSkelton from "./SmallCardSkelton";
const SmallCards = () => {
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className={style.cards}>
      {cardItem.map((item, i) =>
        Loading ? (
          <SmallCardSkelton key={i} />
        ) : (
          <SmallCard key={i} elm={item} />
        )
      )}
    </div>
  );
};

export default SmallCards;
