import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import style from "./page.module.css";

import Apk from "@/components/PostComponents/Apk/Apk";
import Download from "@/components/DownloadComponents/Download";
import Similar from "@/components/PostComponents/Similar/Similar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <Download />
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
