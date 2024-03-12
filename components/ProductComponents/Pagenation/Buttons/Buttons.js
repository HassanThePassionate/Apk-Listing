import Link from "next/link";
import React from "react";
import style from "./Buttons.module.css";
const Buttons = () => {
  return (
    <div>
      <div className={style.buttons}>
        <Link href="/">
          <span className={style.btn_text}>
            Previous
            <strong> page</strong>
          </span>
        </Link>
        <Link href="/">
          <span className={style.btn_text}>
            Next
            <strong> page</strong>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
