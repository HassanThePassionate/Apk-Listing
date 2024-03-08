import React from "react";
import Link from "next/link";

import style from "@/app/style/Postdeatail.module.css";
import Image from "next/image";
import SimilarSlider from "../SimilarSlider";
import Tags from "./Tags";
const Postdetail = () => {
  return (
    <>
      <div className={style.postDetail}>
        <SimilarSlider slides="2" />
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
            Play the most realistic driving simulator of 2023! (version 1.49.5)
            <br />
            A new open world, over 95 new cars, and amazing gameplay await you!
            <br />
            <br />
            Play online with real players from all over the world, win, and earn
            currency you can spend on new cars, upgrades, garages, and a house.
            <br />
            ...
            <br />
          </div>
        </div>
        <Tags />
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
            Safety starts with understanding how developers collect and share
            your data. Data privacy and security practices may vary based on
            your use, region, and age. The developer provided this information
            and may update it over time.
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
                <div className={style.datades}>Device or other IDs</div>
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
                <div className={style.datades}>Data can’t be deleted</div>
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
    </>
  );
};

export default Postdetail;
