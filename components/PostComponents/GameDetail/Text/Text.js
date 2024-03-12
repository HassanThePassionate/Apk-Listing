import React from "react";
import Link from "next/link";
import style from "./Text.module.css";
const Text = () => {
  return (
    <div className={style.text}>
      <div className={style.text1}>
        <p>You don not have any device</p>
      </div>
      <div className={style.text2}>
        <span>
          <svg
            style={{
              color: "rgb(154, 160, 166)",
              marginRight: "10px",
              marginLeft: "5px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            height={15}
            width={15}
          >
            <path
              d="M511.8 287.6L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6zM288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288zM192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416z"
              fill="#9aa0a6"
            ></path>
          </svg>
        </span>
        <p>
          You can share this with your family.{" "}
          <Link href="/">Learn more about Family Library</Link>
        </p>
      </div>
    </div>
  );
};

export default Text;