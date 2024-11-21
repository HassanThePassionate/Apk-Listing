"use client";
import { reviews } from "@/constant/reviews";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import style from "./gameDetail.module.css";
const GameComments = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReadMore = (id: any) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };
  return (
    <div className={style.reviews}>
      <h3
        className='text-[22px] leading-[28px] font-medium mt-[20px] pb-[20px]'
        id={style.recent}
      >
        Recent reviews
      </h3>
      <div className={style.review_cards}>
        {reviews.map((review) => (
          <div key={review.id} className={style.review_card}>
            <div className={style.left}>
              <div className={style.user_report}>
                <div className={style.more_icon}></div>
              </div>
              <Link href='#' className={style.follow}>
                <Image
                  src={review.avatar}
                  width={50}
                  height={50}
                  alt='img'
                  className='rounded-full'
                />
              </Link>
              <div className={style.like}>
                <Image
                  src='https://www.instant-gaming.com/themes/igv2/images/icons/icon-like.svg'
                  alt='img'
                  width={22}
                  height={22}
                />
              </div>
            </div>
            <div className={style.review_text}>
              <span className={style.text_content} id='text'>
                {expandedCard === review.id
                  ? review.fullDescription
                  : review.fullDescription.substring(0, 250)}
                ...
              </span>
              <ul className={style.props_cons}>
                {review.pros.map((pro, index) => (
                  <li key={index} className={style.pros}>
                    {pro}
                  </li>
                ))}
                {review.cons.map((con, index) => (
                  <li key={index} className={style.cons}>
                    {con}
                  </li>
                ))}
              </ul>
              <div className={style.user}>
                <span className='flex flex-col' style={{ display: "none" }}>
                  <span className='text-[14px]'>27th February 2024</span>
                </span>
                <div className={style.usefull}>
                  <div className={style.ask}>Useful?</div>
                  <div className={style.votes}>
                    <Link
                      href='#'
                      title='Useful? YES'
                      className={style.vote_link}
                    >
                      <div className={style.icon_like_btn}>
                        <Image
                          src='https://www.instant-gaming.com/themes/igv2/images/icons/icon-like.svg'
                          alt='img'
                          width={15}
                          height={15}
                        />
                      </div>
                      <span className={style.positive}>0</span>
                    </Link>
                    <Link
                      href='#'
                      title='Useful? NO'
                      className={style.vote_link}
                    >
                      <div className={style.icon_dislike_btn}>
                        <Image
                          src='https://www.instant-gaming.com/themes/igv2/images/icons/icon-dislike.svg'
                          alt='img'
                          width={15}
                          height={15}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <button
                className={style.read_more}
                onClick={() => handleReadMore(review.id)}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameComments;
