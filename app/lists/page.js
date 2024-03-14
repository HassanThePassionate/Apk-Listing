import List from "@/components/listComponents/List";
import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import "../../style/utility.css";
import "../../style/button.css";
import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThumbCards from "@/components/Cards/ThumbCards/ThumbCards";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <List />
            </div>
            <div className={style.layout_sidebar}></div>
          </div>
        </div>
      </div>
      <ThumbCards />
      <Footer />
    </>
  );
};

export default page;
