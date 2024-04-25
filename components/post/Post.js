import React from "react";
// import { data } from "@/constant/data";
import style from "./post.module.css";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className='pagena text-[16px] ml-[15px] my-[10px]'>
          <Link href='#' className={style.page}>
            Welcome
          </Link>
          <Link href='#' className={style.page}>
            Download
          </Link>
          <Link href='#' className={style.page}>
            Internet
          </Link>
          <Link href='#' className={style.page}>
            Instant messaging
          </Link>
        </div>

        <Link href={"/posts"} className={style.cards}>
          <div className={style.card}>
            <div className='img_text'>
              <div className={style.img}>
                <Image src='/2.webp' width={120} height={120} />
              </div>
              <p className={style.img_text}>Updated : 04/22/2024</p>
            </div>

            <div className={style.card_content}>
              <div className={style.title}>GBWhatsApp</div>
              <p className={style.para}>
                A modified and more complete WhatsApp
              </p>
              <div className='downloads_r flex items-center gap-[80px]'>
                <div className={style.rating}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <strong className={style.strong}>3.5</strong>
                  <span>( 115139 ratings )</span>
                </div>
                <div className='mt-[10px] flex items-center gap-4'>
                  <span>
                    <svg
                      width='13'
                      height='14'
                      viewBox='0 0 12 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.25 4.75H8.25V0.25H3.75V4.75H0.75L6 10L11.25 4.75ZM0.75 11.5V13H11.25V11.5H0.75Z'
                        fill='#3F547E'
                      ></path>
                    </svg>
                  </span>
                  <span
                    className=' text-[16px] leading-[19px]   font-bold '
                    id={style.sp}
                  >
                    24880 <span className=' font-normal'>( 30 days )</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Post;
