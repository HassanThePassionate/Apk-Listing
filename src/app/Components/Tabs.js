import React from "react";
import Image from "next/image";
import Sliderbtn from "./Sliderbtn";
const Tabs = ({ Instance }) => {
  return (
    <>
      <div className="cards-tilte">
        <div className="p-title">
          <Image
            src="https://static.extfans.com/onesite-client/images/app_hot.png?v=2.4.50"
            width={32}
            height={32}
            alt="img"
          />
          <h2>Trending By Catagories</h2>
        </div>
      </div>
      <div className="catagory-btns">
        <div className="catagory">
          <div className="catagory-text">
            <p>Hot List</p>
          </div>
          <div className="catagory-text">
            <p>New Arrivals</p>
          </div>
          <div className="catagory-text">
            <p>Featured List</p>
          </div>
          <div className="catagory-text">
            <p>Legend List</p>
          </div>
          <div className="catagory-text">
            <p>Card Leaderboard</p>
          </div>
          <div className="catagory-text">
            <p>Strategy List</p>
          </div>
          <div className="catagory-text">
            <p>Xiania List</p>
          </div>
        </div>
        <Sliderbtn Instance={Instance} />
      </div>
    </>
  );
};

export default Tabs;