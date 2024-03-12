import React from "react";
import style from "./Aboutgame.module.css";
import Arrowbtn from "../Arrowbtn/Arrowbtn";
const Aboutgame = () => {
  return (
    <div className={style.about_game}>
      <div className={style.title}>
        <h2>About this game</h2>
        <Arrowbtn />
      </div>
      <div className={style.description}>
        Play the most realistic driving simulator of 2023! (version 1.49.5)
        <br />
        A new open world, over 95 new cars, and amazing gameplay await you!
        <br />
        <br />
        Play online with real players from all over the world, win, and earn
        currency you can spend on new cars, upgrades, garages, and a house.
        <br />
        ...
        <br />
      </div>
    </div>
  );
};

export default Aboutgame;
