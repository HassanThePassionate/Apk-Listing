import React from "react";
import Gamedetail from "../Components/PostComponents/GameDetail/Gamedetail";
import "../../style/Reset.css";
import "../../style/Variable.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Postdetail from "../Components/PostComponents/Postdetail/Postdetail";
import Similar from "../Components/PostComponents/Similar/Similar";
import style from "./page.module.css";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <Gamedetail />
              <Postdetail />
              <Similar />
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
