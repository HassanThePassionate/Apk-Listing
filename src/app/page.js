"use client";
import "./globals.css";
import Home from "./Components/Home";
import Slider from "./Components/Slider";
import Cards from "./Components/Cards";
import Sidebar from "./Components/Sidebar";
const Page = () => {
  return (
    <>
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
    </>
  );
};

export default Page;
