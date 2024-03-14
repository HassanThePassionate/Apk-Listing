"use client";
import Logo from "./Gamelogo/Logo";
import Gametext from "./Gametext/Gametext";
import Rating from "../PostComponents/GameDetail/Rating/Rating";
import style from "./GameContent.module.css";
import Link from "next/link";

const GameContent = () => {
  return (
    <>
      <div className={style.content}>
        <Link href="/post" className={style.game_content}>
          <Logo />
          <Gametext />
        </Link>

        <div className={style.postrating}>
          <Rating />
        </div>
      </div>
    </>
  );
};

export default GameContent;
