import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import "../../style/utility.css";
import style from "./page.module.css";
import Version from "@/components/VersionComponents/Version";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Apk from "@/components/PostComponents/Apk/Apk";
import Similar from "@/components/PostComponents/Similar/Similar";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <Version />
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
