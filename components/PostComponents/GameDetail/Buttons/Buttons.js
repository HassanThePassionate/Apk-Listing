import React from "react";
import style from "./Button.module.css";
import Link from "next/link";
const Buttons = () => {
  return (
    <div href="/download" className={style.buttons}>
      <Link href="/download" className={style.button}>
        <i className={style.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="BrandBanner_downloadIcon__amQpo"
            height={20}
            width={20}
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M9 2a1 1 0 0 0-1 1v6.166L5.122 6.292a1 1 0 0 0-1.414 1.416l4.588 4.582.003.004.004.003a.997.997 0 0 0 1.409 0l.711-.71 3.87-3.864a1 1 0 0 0-.001-1.414 1 1 0 0 0-1.416 0L10 9.18V3a1 1 0 0 0-1-1M4 16a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"
              clip-rule="evenodd"
            />
          </svg>
        </i>

        <span class={style.btn_text}>Install</span>
      </Link>

      <button className={style.btn}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
        </svg>
      </button>

      <button className={style.btn}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Buttons;
