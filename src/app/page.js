"use client";
import React, { useState } from "react";
import "./globals.css";
import Navbar from "./Components/Navbar";
import MobileNav from "./Components/MobileNav";
import MobileSearch from "./Components/MobileSearch";
import Home from "./Components/Home";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
const page = () => {
  const [mode, setMode] = useState("light");

  const newMode = mode === "light" ? "dark" : "light";
  const toggle = () => {
    setMode(newMode);
    document.body.style.backgroundColor =
      newMode === "dark" ? "black" : "white";
  };
  const [clear, setClear] = useState(false);
  const handler = () => {
    setClear(!clear);
  };

  return (
    <>
      <Navbar mode={mode} toggle={toggle} open={handler} />
      <Home title="Popular apps" />
      <Home title="Popular Games" />
      <Slider />
      <Footer />
      <MobileSearch open={handler} clear={clear} mode={mode} />
      <MobileNav mode={mode} />
    </>
  );
};

export default page;
