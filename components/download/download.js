import React from "react";
import style from "./download.module.css";
import Link from "next/link";
const download = () => {
  return (
    <div className={wrapper}>
      <div className={style.text}>
        <div className={style.title}>
          <h2>Thanks for downloading</h2>
          <Link href="/download">
            The Last of Us Part I Digital Deluxe Edition
          </Link>
        </div>
        <div className={style.button}>
          <button>Click to Download</button>
        </div>
        <div className={style.para}>
          <div className={style.des}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 34 34"
            >
              <path d="M17 1c-5 0-9 4-9 9v4c-1.7 0-3 1.3-3 3v13c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V17c0-1.7-1.3-3-3-3v-4c0-5-4-9-9-9m10 16v13c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1h18c.6 0 1 .4 1 1m-17-3v-4c0-3.9 3.1-7 7-7s7 3.1 7 7v4z"></path>
              <path d="M17 19c-1.7 0-3 1.3-3 3 0 1.3.8 2.4 2 2.8V27c0 .6.4 1 1 1s1-.4 1-1v-2.2c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3m0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1"></path>
            </svg>
            <p>
              Password for Zip file is : <span>123</span>
            </p>
          </div>
        </div>
        <div className={style.para}>
          <div className={style.des}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 512 512"
            >
              <path d="M290.211 360.727a24.9 24.9 0 0 1-15.011-3.375 15.6 15.6 0 0 1-4.305-12.8 66.5 66.5 0 0 1 1.396-11.636c.781-4.394 1.79-8.744 3.025-13.033l13.731-47.244a71.5 71.5 0 0 0 2.793-14.313c0-5.236.698-8.844.698-10.938a30.6 30.6 0 0 0-10.822-24.32 45.5 45.5 0 0 0-30.72-9.309 79.7 79.7 0 0 0-23.273 3.84q-12.335 3.84-25.949 9.193l-3.956 15.36c2.676-.931 5.935-1.978 9.658-3.142a39.6 39.6 0 0 1 10.938-1.629 22.34 22.34 0 0 1 14.778 3.607 16.88 16.88 0 0 1 3.84 12.684 55.2 55.2 0 0 1-1.28 11.636q-1.222 6.11-3.142 12.916L218.763 325.7a136 136 0 0 0-2.676 13.382 83 83 0 0 0-.815 11.636 30.37 30.37 0 0 0 11.636 24.087 46.55 46.55 0 0 0 31.185 9.542 71.8 71.8 0 0 0 23.273-3.375q9.891-3.375 26.415-9.658l3.724-14.662a64 64 0 0 1-9.193 3.025 44.2 44.2 0 0 1-12.101 1.05m14.545-224A33.16 33.16 0 0 0 281.483 128a33.4 33.4 0 0 0-23.273 8.727c-11.632 10.03-12.931 27.591-2.9 39.224a28 28 0 0 0 2.9 2.9c13.252 11.853 33.294 11.853 46.545 0 11.632-10.129 12.851-27.769 2.722-39.401a28 28 0 0 0-2.721-2.723"></path>
              <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0m0 488.727C127.468 488.727 23.273 384.532 23.273 256S127.468 23.273 256 23.273 488.727 127.468 488.727 256 384.532 488.727 256 488.727"></path>
            </svg>
            <p>
              For more help please visit{" "}
              <span className={style.link}>
                {" "}
                <Link href="/">FAQs</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default download;
