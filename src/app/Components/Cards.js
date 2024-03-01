import React, { useState } from "react";
import Image from "next/image";
import flash from "/public/light.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Cards = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNexts = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrevs = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  const data = [
    {
      Himg: "https://puui.qpic.cn/iwan_cloud/1/250f7286ccbb83cb074a93f3c720f1de/q45",
      Cimg: "https://puui.qpic.cn/iwan_cloud/1/403480220f513c418cd64be5b892f933/q45",
      title: "Hot List",
    },
    {
      Himg: "https://puui.qpic.cn/iwan_cloud/1/a514d8639cb4bbb9b13c5579ca8aa8f3/q45",
      Cimg: "https://puui.qpic.cn/iwan_cloud/1/ce724e2ccb86b323dbceb0cc0980aaf5/q45",
      title: "New Arrivals",
    },
    {
      Himg: "https://puui.qpic.cn/iwan_cloud/1/75037ddc291e3330ee5c3fd76c3e266d/q45",
      Cimg: "https://puui.qpic.cn/iwan_cloud/1/1c46a19bfe0cf0058151533487b589ea/q45",
      title: "Featured List",
    },
    {
      Himg: "https://puui.qpic.cn/iwan_cloud/1/a0a7d5ac0b0579c066da1a3ca90fffb4/q45",
      Cimg: "https://puui.qpic.cn/iwan_cloud/1/7c87ec4ba5cc1cb8b45002918aed61b2/q45",
      title: "Legend List",
    },
    {
      Himg: "https://puui.qpic.cn/iwan_cloud/1/bd87d206ef5dc57c67533a5c477416c8/q45",
      Cimg: "https://puui.qpic.cn/iwan_cloud/1/318c8d8a8ca360f51cd9a3785958fff5/q45",
      title: "Card Leaderboard",
    },
    {
      Himg: "https://puui.qpic.cn/iwan_cloud/1/a4b4ad53f0500389592fea7c825bd8c9/q45",
      Cimg: "https://puui.qpic.cn/iwan_cloud/1/3fc4ba13331ad8afc3dbd5eb0df076f3/q45",
      title: "Strategy  List",
    },
    {
      Himg: "https://puui.qpic.cn/iwan_cloud/1/3b7ee85e025cbedce1a0a8250ae3f404/q45",
      Cimg: "https://puui.qpic.cn/iwan_cloud/1/03f0c8d9cb0ca53b289a2c176c3fb4c1/q45",
      title: "Xiania List",
    },
  ];
  return (
    <>
      <section className="card-section">
        <div className="container">
          <div className="cards-tilte">
            <div className="p-title">
              <Image
                src="https://static.extfans.com/onesite-client/images/app_hot.png?v=2.4.50"
                width={32}
                height={32}
                alt="img"
              />
              <h2>Trending By Catagories</h2>
            </div>
          </div>
          <div className="catagory">
            <div className="catagory-text">
              <p>Vinyl Banners</p>
            </div>
            <div className="catagory-text">
              <p>Posters</p>
            </div>
            <div className="catagory-text">
              <p>Yard Signs</p>
            </div>
          </div>
          <div className="cards">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              // centeredSlides={true}
              loop={true}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              navigation={{
                nextEl: "#nexts",
                prevEl: "#prevs",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <div className="cards-wrapper">
                {data.map((e, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="card">
                        <div className="card-wrapper">
                          <div className="card-content">
                            <Image
                              className="head-img"
                              src={e.Himg}
                              width={840}
                              height={240}
                              alt="img"
                            />
                            <Image
                              className="card-img"
                              src={e.Cimg}
                              width={400}
                              height={200}
                              alt="img"
                            />
                            <span className="card-span">{e.title}</span>
                            <div className="card-div"></div>
                            <div className="card-list-wrapper">
                              <div className="rank-list">
                                <div style={{ paddingBottom: "10px" }}>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="num">No</span>
                                        <span className="digit">1</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="num">No</span>
                                        <span className="digit">2</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="num">No</span>
                                        <span className="digit">3</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="digit">4</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="digit">5</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="digit">6</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="digit">7</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="digit">8</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="digit">9</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src=""
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-list-iteam">
                                    <div className="card-iteam-content">
                                      <div className="card-id">
                                        <span className="digit">10</span>
                                      </div>
                                      <div className="card-image">
                                        <div className="img-wrapper">
                                          <div className="svg-wrapper">
                                            <Image
                                              src="https://puui.qpic.cn/iwan_cloud/1/4b8430733624f1f923cb72003ea1d1e1"
                                              height={64}
                                              width={64}
                                              className="game-icon"
                                            />
                                            <Image
                                              src={flash}
                                              height={24}
                                              width={24}
                                              className="flash-icon"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-des">
                                        <div className="card-title">
                                          Battlefield Without Borders
                                        </div>
                                        <div className="card-sub-title">
                                          A war strategy mobile game with a high
                                          sense of substitution and freedom
                                        </div>
                                      </div>
                                      <button className="card-btn">
                                        <span className="card-btn-text">
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
            <div className="slider-btns">
              <div id="prevs" onClick={goPrevs}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  id="IconChangeColor"
                  height="30"
                  width="30"
                  className="pre-svg"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    id="mainIconPathAttribute"
                    fill="#6b6b6b"
                  ></path>
                </svg>
              </div>
              <div id="nexts" onClick={goNexts}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  id="IconChangeColor"
                  height="30"
                  width="30"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    id="mainIconPathAttribute"
                    fill="#6b6b6b"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
