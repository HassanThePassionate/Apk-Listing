import React from "react";
import SmallCard from "./Cards/Card/SmallCard";
import Sidebar from "./Sidebar";
import Heading from "./Heading";
import style from "../style/Home.module.css";
const Home = ({ title, classTitle }) => {
  return (
    <>
      <section className={style.mTop}>
        <div className="container">
          <div className={classTitle}>
            <Heading title={title} />
          </div>
          <div className={style.wrapperBox}>
            <SmallCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
