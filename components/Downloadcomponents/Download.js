import React from "react";
import style from "./download.module.css";
import Link from "next/link";
import Image from "next/image";
import lock from "../../public/lock.svg";
import information from "../../public/information.svg";
const Download = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <div className={style.title}>
          <h2>Thanks for downloading</h2>
          <Link href="/download">
            The Last of Us Part I Digital Deluxe Edition
          </Link>
        </div>
        <a className={style.button}>
          <i className={style.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M480-322.87 268.521-534.348l63.892-65.413L434.5-497.435v-310.696h91v310.696l102.087-102.326 63.892 65.413zM242.87-151.869q-37.783 0-64.392-26.609t-26.609-64.392v-120h91.001v120h474.26v-120h91.001v120q0 37.783-26.609 64.392t-64.392 26.609z"></path>
            </svg>
          </i>

          <span class={style.btn_text}>Click to Download</span>
        </a>
        <ul className={style.download_help}>
          <li>
            <i className={style.icon}>
              <Image
                src={lock}
                height={16}
                width={16}
                alt="img"
                style={{ marginRight: "6px" }}
              />
            </i>
            <span class="text">Password for Zip file is : </span>
            <span class="password">123</span>
          </li>
          <li>
            <i className={style.icon}>
              <Image
                src={information}
                height={16}
                width={16}
                alt="img"
                style={{ marginRight: "6px" }}
              />
            </i>
            <span class="text">For more help please visit :</span>
            <a href="/faqs">FAQs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Download;
