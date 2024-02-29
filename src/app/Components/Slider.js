import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  const data = [
    {
      img: "https://play-lh.googleusercontent.com/MPDzYIvnXkFgILeyVYa1ZrBhWrQI6voJQ83R3TGhUvU4jjcV3ClQVlhuWDucmSkSwqc=s256-rw",
      title: "Learn HTML",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/ShO8lmMq5rNQa16SxMCGLZ1w4oS-oM17mPWlxU9UaYSzzonFZ2hY6pdqG1Zo2lyGYQ=s256-rw",
      title: "Learn Python Programming",
      rating: 4.6,
    },
    {
      img: "https://play-lh.googleusercontent.com/I9ntUdX9H-F1LN7KD3qlMnbUH6RLtiRqD5dd9BUYZZ7X3pJaTrq3X5Lh0iS29NuhlZw=s256-rw",
      title: "SHAREit Lite - Fast File Share",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/QoiGnvynjBjtraueo9bqoSceqfJb6oMRmHl4qMd3D6qXzb5egnqS2HPmSVK0eSoUQIQ=s256-rw",
      title: "Daraz Online Shopping App",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/WCwcq3DvY0pbaTqUfU1ToySB2s5mmqAUxcLcTN3Y2J5l-sDwS2L2z6_qmCYNX9wdXg=s256-rw",
      title: "Learn C Programming",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/HjYgnX_xxcCvObyzcl-turC6uUmwRPeNohAWc7uP9edYdiC-1J7yZD3Yy5zBkSjdxw=s256-rw",
      title: "Learn Web Development",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/0mvy747JRrqlziGtpvii5zKcMgL0AYRjXNRMlBkUbYadBabC1Dg466LsLKFION1vTg=s256-rw",
      title: "VN - Video Editor & Maker",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/MPDzYIvnXkFgILeyVYa1ZrBhWrQI6voJQ83R3TGhUvU4jjcV3ClQVlhuWDucmSkSwqc=s256-rw",
      title: "Learn HTML",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/ShO8lmMq5rNQa16SxMCGLZ1w4oS-oM17mPWlxU9UaYSzzonFZ2hY6pdqG1Zo2lyGYQ=s256-rw",
      title: "Learn Python Programming",
      rating: 4.6,
    },
    {
      img: "https://play-lh.googleusercontent.com/I9ntUdX9H-F1LN7KD3qlMnbUH6RLtiRqD5dd9BUYZZ7X3pJaTrq3X5Lh0iS29NuhlZw=s256-rw",
      title: "SHAREit Lite - Fast File Share",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/QoiGnvynjBjtraueo9bqoSceqfJb6oMRmHl4qMd3D6qXzb5egnqS2HPmSVK0eSoUQIQ=s256-rw",
      title: "Daraz Online Shopping App",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/WCwcq3DvY0pbaTqUfU1ToySB2s5mmqAUxcLcTN3Y2J5l-sDwS2L2z6_qmCYNX9wdXg=s256-rw",
      title: "Learn C Programming",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/HjYgnX_xxcCvObyzcl-turC6uUmwRPeNohAWc7uP9edYdiC-1J7yZD3Yy5zBkSjdxw=s256-rw",
      title: "Learn Web Development",
      rating: 4.7,
    },
    {
      img: "https://play-lh.googleusercontent.com/0mvy747JRrqlziGtpvii5zKcMgL0AYRjXNRMlBkUbYadBabC1Dg466LsLKFION1vTg=s256-rw",
      title: "VN - Video Editor & Maker",
      rating: 4.7,
    },
  ];
  return (
    <>
      <section className="slider">
        <div className="container">
          <div className="main-text">
            <div className="p-title">
              <Image
                src="https://static.extfans.com/onesite-client/images/app_hot.png?v=2.4.50"
                width={32}
                height={32}
                alt="img"
              />
              <h2>Recommended</h2>
            </div>

            <div className="buttons">
              <button onClick={goPrev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  id="IconChangeColor"
                  height="12"
                  width="12"
                >
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                    id="mainIconPathAttribute"
                    strokeWidth="0.5"
                    stroke="#ff0000"
                    fill="#000000"
                  ></path>
                </svg>
              </button>
              <button onClick={goNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  id="IconChangeColor"
                  height="12"
                  width="12"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    id="mainIconPathAttribute"
                    strokeWidth="0.5"
                    stroke="#ff0000"
                    fill="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <main className="main-slider">
            <div className="slider-wrapper">
              <Swiper
                slidesPerView="auto"
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                navigation={{
                  nextEl: "#next",
                  prevEl: "#prev",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {data.map((e, index) => {
                  return (
                    <SwiperSlide
                      style={{ maxWidth: "180px", width: "140px" }}
                      key={index}
                    >
                      <div className="slider-iteam">
                        <Image src={e.img} alt="img" width={141} height={141} />
                        <div className="slider-text">
                          <h3>{e.title}</h3>
                          <div className="texts">
                            <span className="rating">{e.rating}</span>
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Slider;
