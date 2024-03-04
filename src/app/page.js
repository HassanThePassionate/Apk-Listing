"use client";
import React, { useState } from "react";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
// import SocialCards from "./Components/Cards/SocialCards";
import Sidebar from "./Components/Sidebar";
const Page = () => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor =
      newMode === "dark" ? "black" : "white";
  };

  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <div className="container">
        <div className="sticky-wrapper">
          <main className="main">
            <Home title="Popular apps" classTitle="wrapper" />
            <Home title="Popular Games" classTitle="wrapper2" />
          </main>

          <Sidebar />
        </div>
      </div>
      <Slider />
      <Cards />
      <Footer />
    </>
  );
};

export default Page;
