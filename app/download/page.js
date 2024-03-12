import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Similar from "@/components/PostComponents/Similar/Similar";
import style from "./page.module.css";
import Download from "@/components/Downloadcomponents/Download";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <Download />
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
