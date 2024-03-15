import React from "react";
import SimilarCard from "../Cards/SimilarCard/SimilarCard";

import style from "./Home.module.css";
import Arrowbtn from "./Arrowbtn/Arrowbtn";

const Home = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>Similar Games</h2>

          <Arrowbtn />
        </div>
        <SimilarCard />
      </div>

      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>More by OppanaGames FZC LLC</h2>
          <Arrowbtn />
        </div>
        <SimilarCard />
      </div>

      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>More by OppanaGames FZC LLC</h2>
          <Arrowbtn />
        </div>
        <SimilarCard />
      </div>
    </>
  );
};

export default Home;
