import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../style/Home.module.css";
const Heading = ({ title }) => {
  return (
    <div className="p-title">
      <Image
        src="https://static.extfans.com/onesite-client/images/app_hot.png?v=2.4.50"
        width={32}
        height={32}
        alt="img"
      />
      <h2>{title}</h2>
      <Link href="/">
        <div className={style.veiw}>
          <span>View More</span>
          <span className={style.viewIcon}>
            <i className={style.greaterIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                id="IconChangeColor"
                height="10"
                width="10"
                style={{
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
            </i>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Heading;
