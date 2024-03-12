import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import "../../style/utility.css";
import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Gamedetail from "@/components/PostComponents/GameDetail/Gamedetail";
import Postdetail from "@/components/PostComponents/Postdetail/Postdetail";
import Similar from "@/components/PostComponents/Similar/Similar";
import Footer from "@/components/Footer/Footer";
import Apk from "@/components/PostComponents/Apk/Apk";
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
              <Apk />
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
