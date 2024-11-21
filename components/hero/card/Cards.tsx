"use client";
import { cardItem } from "@/constant/CardItem";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import CardSkelton from "./CardSkelton";

const Cards = () => {
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {cardItem.map((item, i) =>
        Loading ? (
          <CardSkelton key={i} />
        ) : (
          <Link href='/posts' key={i}>
            <Card ele={item} />
          </Link>
        )
      )}
    </div>
  );
};

export default Cards;
