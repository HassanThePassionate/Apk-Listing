import React from "react";
import Link from "next/link";
import style from "./Genres.module.css";
const Genres = () => {
  return (
    <div>
      <div className={style.tags}>
        <h2 className={style.title}>Genres</h2>
        <ul className={style.list}>
          <li className={style.tag}>
            <Link href="/">Simulation</Link>
          </li>
          <li className={style.tag}>
            <Link href="/">Car Sim</Link>
          </li>
          <li className={style.tag}>
            <Link href="/">Vehicle</Link>
          </li>
          <li className={style.tag}>
            <Link href="/">Casual</Link>
          </li>
          <li className={style.tag}>
            <Link href="/">Single player</Link>
          </li>
          <li className={style.tag}>
            <Link href="/">Stylized</Link>
          </li>
          <li className={style.tag}>
            <Link href="/">Offline</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Genres;
