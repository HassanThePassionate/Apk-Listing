import List from "@/components/listComponents/Home";
import React from "react";
import "../../style/Reset.css";
import "../../style/Variable.css";
import "../../style/utility.css";
import "../../style/button.css";
import Navbar from "@/components/Navbar/Navbar";
import SCard from "@/components/Cards/S-Cards/SCard";
import ThumbCards from "@/components/Cards/ThumbCards/ThumbCards";
import OrderedCard from "@/components/Cards/OrderedCards/OrderedCard";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={style.layout_container}>
          <div className={style.layout_wrap}>
            <div className={style.layout_main}>
              <SCard title="Popular Games" />
              <SCard title="Popular Games" />
            </div>
            <div className={style.layout_sidebar}></div>
          </div>
        </div>
      </div>

      <ThumbCards title="Popular Games" />
      <OrderedCard />
      <Footer />
    </>
  );
};

export default page;
