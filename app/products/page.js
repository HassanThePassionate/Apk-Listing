import React from "react";
import GameContent from "../Components/ProductComponents/GameContent";
import "../../style/Reset.css";
import "../../style/Variable.css";
import Heading from "../Components/ProductComponents/Heading/Heading";
import Navbar from "../Components/Navbar/Navbar";
import style from "./page.module.css";
import Footer from "../Components/Footer/Footer";
import Pagenation from "../Components/ProductComponents/Pagenation/Pagenation";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <Heading />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <GameContent />
              <Pagenation />
            </div>
            <div className={style.layout_sidebar}></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
