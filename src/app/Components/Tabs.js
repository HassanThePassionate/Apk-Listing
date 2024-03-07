import React from "react";
import Image from "next/image";
import Sliderbtn from "./Sliderbtn";

const categoryTitles = [
  "Hot List",
  "New Arrivals",
  "Featured List",
  "Legend List",
  "Card Leaderboard",
  "Strategy List",
  "Xiania List",
];

const Tabs = ({ Instance }) => {
  return (
    <>
      <div className="cards-title">
        <div className="p-title">
          <Image
            src="https://static.extfans.com/onesite-client/images/app_hot.png?v=2.4.50"
            width={32}
            height={32}
            alt="img"
          />
          <h2>Trending By Categories</h2>
        </div>
      </div>
      <div className="catagory-btns">
        <div className="catagory">
          {categoryTitles.map((title, index) => (
            <div className="catagory-text" key={index}>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <Sliderbtn Instance={Instance} />
      </div>
    </>
  );
};

export default Tabs;
