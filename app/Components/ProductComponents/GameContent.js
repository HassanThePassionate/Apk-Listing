"use client";
import React, { useState } from "react";
import Logo from "./Gamelogo/Logo";
import Gametext from "./Gametext/Gametext";
import Rating from "../PostComponents/GameDetail/Rating/Rating";
import style from "./GameContent.module.css";
import ReactPaginate from "react-paginate";
const GameContent = () => {
  return (
    <div className={style.content}>
      <div className={style.game_content}>
        <Logo />
        <Gametext />
      </div>
      <div className={style.postrating}>
        <Rating />
      </div>
    </div>
  );
};

export default GameContent;
