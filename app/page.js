import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "../style/Reset.css";
import "../style/button.css";
import "../style/Variable.css";
import "../style/utility.css";
import style from "./page.module.css";
import SCard from "./Components/Cards/S-Cards/SCard";
import ThumbCards from "./Components/Cards/ThumbCards/ThumbCards";
import OrderedCard from "./Components/Cards/OrderedCards/OrderedCard";
import Footer from "./Components/Footer/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <SCard title="Popular Games" />
              <SCard title="Popular Games" />
            </div>
            <div className={style.layout_sidebar}></div>
          </div>
        </div>
      </div>

      <ThumbCards title="Recommended" />
      <OrderedCard />
      <Footer />
    </>
  );
};

export default page;
