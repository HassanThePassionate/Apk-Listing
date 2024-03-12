import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Heading from "@/components/ProductComponents/Heading/Heading";
import GameContent from "@/components/ProductComponents/GameContent";
import Pagenation from "@/components/ProductComponents/Pagenation/Pagenation";
import Footer from "@/components/Footer/Footer";
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
