import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./gameDetail.module.css";
import ArrowBtn from "./arrowBtn/ArrowBtn";
import GameComments from "./GameComments";
const GameDetail = () => {
  return (
    <div className={style.detail}>
      <div className={style.titles}>
        <h6>About this game</h6>
        <ArrowBtn />
      </div>
      <div className={style.paras}>
        <p>
          In Asphalt 9: Legends, take the wheel of real cars from high-end
          renowned legendary car manufacturers, such as Ferrari, Porsche,
          Lamborghini, and W Motors, among many other international brands.
          Drive, boost and perform stunts across dynamic real-life locations in
          single or multiplayer play. Racing adrenaline, brought to you by the
          creators of Asphalt 8: Airborne.
        </p>
        <br />
        Customise high-end hypercars
        <br />
        ...
      </div>
      <div className={style.date}>
        <span className={style.update}>Updated On</span>
        <br />
        <span className={style.da}>Apr 25, 2024</span>
      </div>
      <div className={style.tags}>
        <div className={style.tag}>top grossing racing</div>
        <div className={style.tag}>Racing</div>
        <div className={style.tag}>Racing Simultor</div>
        <div className={style.tag}>MultiPlayer</div>
        <div className={style.tag}>Single Player</div>
      </div>
      <div className={style.titles}>
        <h6>Data Safety</h6>
        <ArrowBtn />
      </div>
      <div className={style.paras}>
        <p>
          Safety starts with understanding how developers collect and share your
          data. Data privacy and security practices may vary based on your use,
          region, and age. The developer provided this information and may
          update it over time.
        </p>
      </div>
      <div className={style.safety}>
        <div className={style.iteam}>
          <div className='img'>
            <Image
              src='https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm=s20-rw'
              alt='img'
              height={20}
              width={20}
            />
          </div>
          <div>
            <div>This app may share these data types with third parties</div>
            <div>Location, Personal info and 2 others</div>
          </div>
        </div>
        <div className={style.iteam}>
          <div className='img'>
            <Image
              src='https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts=s20-rw'
              alt='img'
              height={20}
              width={20}
            />
          </div>
          <div>
            <div>This app may share these data types with third parties</div>
            <div>Location, Personal info and 2 others</div>
          </div>
        </div>
        <div className={style.iteam}>
          <div className='img'>
            <Image
              src='https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ=s20-rw'
              alt='img'
              height={20}
              width={20}
            />
          </div>
          <div>This app may share these data types with third parties</div>
        </div>
        <div className={style.iteam}>
          <div className='img'>
            <Image
              src='https://play-lh.googleusercontent.com/ohRyQRA9rNfhp7xLW0MtW1soD8SEX45Oec7MyH3FaxtukWUG_6GKVpvh3JiugzryLi7Bia02HPw=s20-rw'
              alt='img'
              height={20}
              width={20}
            />
          </div>
          This app may share these data types with third parties
        </div>
        <Link
          href='#'
          className='text-[#056449] font-medium mb-[10px] text-[16px]'
        >
          See Detail
        </Link>
      </div>
      <GameComments />
    </div>
  );
};

export default GameDetail;
