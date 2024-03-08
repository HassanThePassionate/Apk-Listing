import React from "react";
import Link from "next/link";
import style from "@/app/style/Postdeatail.module.css";
const Tags = () => {
  return (
    <div>
      <div className={style.gametags}>
        <ul className={style.tagList}>
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

export default Tags;
