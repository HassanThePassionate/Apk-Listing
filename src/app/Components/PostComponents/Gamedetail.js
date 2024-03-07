import React from "react";
import Link from "next/link";
import style from "@/app/style/Postdeatail.module.css";
import Image from "next/image";
import QrCode from "./QrCode";
import Breadcrumb from "./Breadcrumb";

const Gamedetail = () => {
  return (
    <>
      <div className={style.posts}>
        <Breadcrumb />

        <div className={style.postWrapper}>
          <div className={style.postiteam}>
            <div className={style.gameiteam}>
              <div className={style.gameImage}>
                <Image
                  src="https://play-lh.googleusercontent.com/r_CaT5Gub5pQbgGoJ1PdtqqgNQvff_KSCaS4bCKl14IrUxsya7Mo00y8As-BQnmIDQ=s800-rw"
                  alt="img"
                  width={96}
                  height={96}
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
                <div className={style.line}></div>
                <div className={style.downloads}>
                  <span className={style.ratingtitle}>50M+</span>
                  <p>Downloads</p>
                </div>
                <div className={style.line}></div>
                <div className={style.rated}>
                  <Image
                    src="data:image/webp;base64,UklGRlYBAABXRUJQVlA4TEoBAAAvIcAHENVAsbZtmfJjM3tCG0twpznJPc6huib35O7u7iRP7g6/vrMGpj+ZDfiLQ1bQto1k/hCHYBzuyQQwjiSpTRIU+UcELxeJR+oJcBhBfyQBxLorW6+oPwqiEI/4IHx5hNXTBXYArkEcBoFPYPiDKhwCx2imMAul03ECbaB8DUawDiNYBTMfYgfbUtOJXkn2owUAHMXMbBCgRj5RALYkSoZmQwCQCaYBgDNIpEKrUgDIA3MfmmHqjCAAHWiRqR6nUHMOADgAs1NA4S7UVAJAopjZVQQAMAdmrkJ+FKAEngCK9f+fq2OoGISIZdMAsLSiUAHIgty9JicBALOg6YGI5ZOgiQEA/KRgUyuxBA0AoDAUKFWwA9GQaCYg2gLNu+gKNGOoQg0eqoJpCI3jLwBU4fGtuwqiEI/4IHyJBqye7jCC7kog1l3ZekU="
                    alt="img"
                    width={16}
                    height={16}
                  />
                  <p>Rated For 7+</p>
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
                        marginLeft: "5px",
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
          <QrCode />
        </div>
      </div>
    </>
  );
};

export default Gamedetail;
