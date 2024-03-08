import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import style from "@/app/style/Postdeatail.module.css";

const Popup = ({ isOpen, onClose, imageUrl }) => {
  return (
    <>
      {isOpen && (
        <div className={style.popupContainer}>
          <div className={style.popupContent}>
            <button className={style.closeButton} onClick={onClose}>
              &times;
            </button>
            <Swiper slidesPerView={1} navigation className={style.popupSwiper}>
              <SwiperSlide>
                <div className={style.popupImage}>
                  <Image
                    src={imageUrl}
                    alt="popup-image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
