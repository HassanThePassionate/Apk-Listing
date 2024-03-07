import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import style from "./MiniCard.module.css";
import { data } from "@constant/MiniCardData";
import Link from "next/link";

const MiniCard = ({ setSwiperInstance }) => {
  const renderSwiperSlides = () => {
    return data.map((entry, index) => (
      <SwiperSlide key={index} style={{ maxWidth: "180px", width: "140px" }}>
        <Link href="/post">
          <div className={style.sliderIteam}>
            <Image src={entry.img} alt="img" width={141} height={141} />
            <div className={style.sliderText}>
              <h3>{entry.title}</h3>
              <div className="texts">
                <span className={style.rating}>{entry.rating}</span>
                <span className="star">
                  <i className="star-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      onSwiper={setSwiperInstance}
      navigation={{ nextEl: "#next", prevEl: "#prev" }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {renderSwiperSlides()}
    </Swiper>
  );
};

export default MiniCard;
