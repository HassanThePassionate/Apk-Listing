"use client";
import React, { useState } from "react";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Sidebar from "./Components/Sidebar";
const Page = () => {
  return (
    <>
      <Navbar />
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
