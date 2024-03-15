"use client";
import { useEffect } from "react";
import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Heading from "@/components/productComponents/Heading/Heading";
import GameContent from "@/components/productComponents/GameContent";
import Pagenation from "@/components/productComponents/Pagenation/Pagenation";
import Footer from "@/components/Footer/Footer";
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <Heading />
              <GameContent />
              <div className={style.line}></div>
              <GameContent />
              <div className={style.line}></div>
              <GameContent />
              <div className={style.line}></div>
              <GameContent />
              <div className={style.line}></div>
              <GameContent />
              <div className={style.line}></div>
              <GameContent />
              <div className={style.line}></div>
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

export default Page;
