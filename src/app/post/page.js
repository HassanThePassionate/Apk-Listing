import Link from "next/link";
import React from "react";
import style from "../style/Postdeatail.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";
import SimiliarCard from "../Components/Cards/Card/SimiliarCard";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="sticky-wrapper">
          <main className="main">
            <div className="container">
              <div className={style.tags}>
                <ul className={style.taglist}>
                  <li className={style.tagIteam}>
                    <Link href="/"></Link>
                  </li>
                  <li className={style.tagIteam}>
                    <Link href="/">/Programming & Tech</Link>
                  </li>
                  <li className={style.tagIteam}>
                    <Link href="/">/Convert File</Link>
                  </li>
                  <li className={style.tagIteam}>
                    <Link href="/">/Convert to ebook</Link>
                  </li>
                </ul>
              </div>
              <div className={style.mainWrapper}>
                <div className={style.postWrapper}>
                  <div className={style.postiteam}>
                    <div className={style.gameiteam}>
                      <div className={style.gameImage}>
                        <Image
                          src="https://play-lh.googleusercontent.com/r_CaT5Gub5pQbgGoJ1PdtqqgNQvff_KSCaS4bCKl14IrUxsya7Mo00y8As-BQnmIDQ=s800-rw"
                          alt="img"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className={style.gametext}>
                        <h2>Car Simulator 2</h2>
                        <h5>OppanaGames FZC LLC</h5>
                        <p>Contains adsIn-app purchases</p>
                      </div>
                    </div>
                    <div className={style.iteamdetail}>
                      <div className={style.postrating}>
                        <div className={style.gamerating}>
                          <span className={style.ratingtitle}>4.5</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="currentColor"
                              class="bi bi-star-fill"
                              viewBox="0 0 16 16"
                              id="IconChangeColor"
                            >
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                id="mainIconPathAttribute"
                                fill="#ffffff"
                              ></path>
                            </svg>
                          </span>
                          <p>1.29M reviews</p>
                        </div>
                        <div className={style.downloads}>
                          <span className={style.ratingtitle}>50M+</span>
                          <p>Downloads</p>
                        </div>
                        <div className={style.rated}>
                          <Image
                            src="https://play-lh.googleusercontent.com/csiz76udPjXmaJddU_1sanHGlQAAbKkvlprK3DSUNmwu1nY3U6qnXRrI2IDMaivooYK1x11oxz3PEO4z=w48-h16-rw"
                            alt="img"
                            width={16}
                            height={16}
                          />
                          <p>Everyone 10+</p>
                        </div>
                      </div>
                      <div className={style.btns}>
                        <div className="btn">
                          <button className={style.install}>Install</button>
                        </div>
                        <div className="btn">
                          <button className={style.sharebtn}>
                            <svg
                              class="f70z8e"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="btn">
                          <button className={style.sharebtn}>
                            <svg
                              class="aThNrd"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className={style.text}>
                        <div className={style.text1}>
                          <p>You don't have any device</p>
                        </div>
                        <div className={style.text2}>
                          <span>
                            <svg
                              style={{
                                color: "rgb(154, 160, 166)",
                                marginRight: "10px",
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              height={15}
                              width={15}
                            >
                              <path
                                d="M511.8 287.6L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6zM288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288zM192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416z"
                                fill="#9aa0a6"
                              ></path>
                            </svg>
                          </span>
                          <p>You can share this with your family.</p>
                          <Link href="/">Learn more about Family Libary</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.qrcode}>
                    <Image
                      src="https://clipground.com/images/codes-clipart-7.jpg"
                      width={200}
                      height={200}
                      alt="qrcode"
                    />
                  </div>
                </div>

                <div className={style.postDetail}>
                  <div className={style.imageWrapper}>
                    <div className={style.img}>
                      <Image
                        src="https://play-lh.googleusercontent.com/wq8j0eajviPxSZHa51zj2VtkDhT2Tovdm6ByVQY99offUKmhJGVmbX-uSzlhIt2Ffg=w2560-h1440-rw"
                        alt="img"
                        width={526}
                        height={295}
                      />
                    </div>
                  </div>
                  <div className={style.aboutgame}>
                    <div className={style.aboutTile}>
                      <h2>About this game</h2>
                      <div className={style.arrow}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          id="IconChangeColor"
                          height="18"
                          width="18"
                        >
                          <path
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                            id="mainIconPathAttribute"
                            stroke-width="0"
                            stroke="#ff0000"
                            fill="#5F6364"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className={style.gamedes}>
                      Play the most realistic driving simulator of 2023!
                      (version 1.49.5)
                      <br />
                      A new open world, over 95 new cars, and amazing gameplay
                      await you!
                      <br />
                      <br />
                      Play online with real players from all over the world,
                      win, and earn currency you can spend on new cars,
                      upgrades, garages, and a house.
                      <br />
                      ...
                      <br />
                    </div>
                  </div>
                  <div className={style.data}>
                    <div className={style.aboutTile}>
                      <h2>Data Safety</h2>

                      <div className={style.arrow}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          id="IconChangeColor"
                          height="18"
                          width="18"
                        >
                          <path
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                            id="mainIconPathAttribute"
                            stroke-width="0"
                            stroke="#ff0000"
                            fill="#5F6364"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className={style.gamedes}>
                      Safety starts with understanding how developers collect
                      and share your data. Data privacy and security practices
                      may vary based on your use, region, and age. The developer
                      provided this information and may update it over time.
                    </div>
                    <div className={style.datawrapper}>
                      <div className={style.dataiteam1}>
                        <Image
                          src="https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm=s20-rw"
                          alt="img"
                          height={20}
                          width={20}
                        />
                        <div className={style.datatitle}>
                          This app may share these data types with third parties
                          <div className={style.datades}>
                            Device or other IDs
                          </div>
                        </div>
                      </div>
                      <div className={style.dataiteam}>
                        <Image
                          src="https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts=s20-rw"
                          alt="img"
                          height={20}
                          width={20}
                        />
                        <div className={style.datatitle}>
                          No data collected
                          <div className={style.datades}>
                            <Link href="/">Learn more </Link>
                            about how developers declare collection
                          </div>
                        </div>
                      </div>
                      <div className={style.dataiteam}>
                        <Image
                          src="https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ=s20-rw"
                          alt="img"
                          height={20}
                          width={20}
                        />
                        <div className={style.datatitle}>
                          <div className={style.datades}>
                            Data is encrypted in transit
                          </div>
                        </div>
                      </div>
                      <div className={style.dataiteam}>
                        <Image
                          src="https://play-lh.googleusercontent.com/neRBP16KYqhC7f1N3vUT1Q_HMLwAw7vXu8aOWOqvlY3JXNGd8qyXVNyAQyNLpdUdCV0kYEs9BXk=s20-rw"
                          alt="img"
                          height={20}
                          width={20}
                        />
                        <div className={style.datatitle}>
                          <div className={style.datades}>
                            Data can’t be deleted
                          </div>
                        </div>
                      </div>
                      <div
                        className="de"
                        style={{ paddingTop: "15px", paddingLeft: "10px" }}
                      >
                        <Link
                          href="/"
                          style={{
                            color: "#00a173",
                            fontFamily: "Roboto",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          See details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.similargame}>
                  <div className={style.title1}>
                    <h2>Similar Games</h2>
                    <div className={style.arrow}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        id="IconChangeColor"
                        height="18"
                        width="18"
                      >
                        <path
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                          id="mainIconPathAttribute"
                          stroke-width="0"
                          stroke="#ff0000"
                          fill="#5F6364"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <SimiliarCard />
                  <div className={style.title2}>
                    <h2>More by OppanaGames FZC LLC</h2>
                    <div className={style.arrow}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        id="IconChangeColor"
                        height="18"
                        width="18"
                      >
                        <path
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                          id="mainIconPathAttribute"
                          stroke-width="0"
                          stroke="#ff0000"
                          fill="#5F6364"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <SimiliarCard />
                </div>
              </div>
            </div>
          </main>

          <aside className={style.Sidebar}></aside>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
