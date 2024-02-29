import React from "react";
import Image from "next/image";
import flash from "/public/light.svg";

const Cards = () => {
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
            <div className="cards-wrapper">
              <div className="card">
                <div className="card-wrapper">
                  <div className="card-content">
                    <Image
                      className="head-img"
                      src="https://puui.qpic.cn/iwan_cloud/1/250f7286ccbb83cb074a93f3c720f1de/q45"
                      width={840}
                      height={240}
                      alt="img"
                    />
                    <Image
                      className="card-img"
                      src="https://puui.qpic.cn/iwan_cloud/1/403480220f513c418cd64be5b892f933/q45"
                      width={400}
                      height={200}
                      alt="img"
                    />
                    <span className="card-span">Popular List</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-wrapper">
                  <div className="card-content">
                    <Image
                      className="head-img"
                      src="https://puui.qpic.cn/iwan_cloud/1/a514d8639cb4bbb9b13c5579ca8aa8f3/q45"
                      width={840}
                      height={240}
                      alt="img"
                    />
                    <Image
                      className="card-img"
                      src="https://puui.qpic.cn/iwan_cloud/1/ce724e2ccb86b323dbceb0cc0980aaf5/q45"
                      width={400}
                      height={200}
                      alt="img"
                    />
                    <span className="card-span">Popular List</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-wrapper">
                  <div className="card-content">
                    <Image
                      className="head-img"
                      src="https://puui.qpic.cn/iwan_cloud/1/75037ddc291e3330ee5c3fd76c3e266d/q45"
                      width={840}
                      height={240}
                      alt="img"
                    />
                    <Image
                      className="card-img"
                      src="https://puui.qpic.cn/iwan_cloud/1/1c46a19bfe0cf0058151533487b589ea/q45"
                      width={400}
                      height={200}
                      alt="img"
                    />
                    <span className="card-span">Popular List</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
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
                                  A war strategy mobile game with a high sense
                                  of substitution and freedom
                                </div>
                              </div>
                              <button className="card-btn">
                                <span className="card-btn-text">Play</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
