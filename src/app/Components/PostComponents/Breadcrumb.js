import Link from "next/link";
import React from "react";
import style from "@/app/style/Postdeatail.module.css";
import crumb1 from "/public/crumb.svg";
import Image from "next/image";
const Breadcrumb = () => {
  return (
    <>
      <nav className={style.breadcrumb}>
        <ul className={style.crumblist}>
          <li className={style.crumbiteam}>
            <Link href="/">
              <Image src={crumb1} alt="img" height={12} width={12} />
              <span>Home</span>
            </Link>
          </li>
          <li className={style.nuicrumbiteam}>
            <div className={style.inneriteam}>
              <span className={style.nuiIteam}>
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
                    fill: "rgb(154, 160, 166)",
                    marginLeft: "8px",
                    marginRight: "8px",
                  }}
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
              </span>
            </div>
          </li>
          <li className={style.crumbiteam}>
            <Link href="/">
              <span>Products</span>
            </Link>
          </li>
          <li className={style.nuicrumbiteam}>
            <div className={style.inneriteam}>
              <span className={style.nuiIteam}>
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
                    fill: "rgb(154, 160, 166)",
                    marginLeft: "8px",
                    marginRight: "8px",
                  }}
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
              </span>
            </div>
          </li>
          <li className={style.crumbiteam}>
            <Link href="/">
              <span>Laptops</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Breadcrumb;
