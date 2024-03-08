"use client";
import React from "react";
import style from "../style/Product.module.css";
import GameContent from "../Components/ProductsComponents/GameContent";

const page = () => {
  return (
    <div className="container">
      <div className="sticky-wrapper">
        <main className="main">
          <div className={style.mainWrapper}>
            <div className={style.mainDiv}>
              <h2 className={style.topHeading}>Product Found (63)</h2>
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
            </div>
          </div>
        </main>

        <aside className={style.Sidebar}></aside>
      </div>
    </div>
  );
};

export default page;
