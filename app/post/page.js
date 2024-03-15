"use client";
import { useEffect } from "react";
import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import "../../style/utility.css";
import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Gamedetail from "@/components/postComponents/GameDetail/Gamedetail";
import Postdetail from "@/components/postComponents/Postdetail/Postdetail";
import Similar from "@/components/postComponents/Similar/Similar";
import Footer from "@/components/Footer/Footer";
import Apk from "@/components/postComponents/Apk/Apk";
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

export default Page;
