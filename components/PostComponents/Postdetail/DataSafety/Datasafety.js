import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrowbtn from "../Arrowbtn/Arrowbtn";
import style from "./Datasafety.module.css";
const Datasafety = () => {
  return (
    <div className={style.data}>
      <div className={style.title}>
        <h2>Data Safety</h2>

        <Arrowbtn />
      </div>
      <div className={style.description}>
        Safety starts with understanding how developers collect and share your
        data. Data privacy and security practices may vary based on your use,
        region, and age. The developer provided this information and may update
        it over time.
      </div>
      <div className={style.wrapper}>
        <div className={style.iteam1}>
          <Image
            src="https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm=s20-rw"
            alt="img"
            height={20}
            width={20}
          />
          <div className={style.data_title}>
            This app may share these data types with third parties
            <div className={style.data_des}>Device or other IDs</div>
          </div>
        </div>
        <div className={style.iteam}>
          <Image
            src="https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts=s20-rw"
            alt="img"
            height={20}
            width={20}
          />
          <div className={style.data_title}>
            No data collected
            <div className={style.data_des}>
              <Link href="/">Learn more </Link>
              about how developers declare collection
            </div>
          </div>
        </div>
        <div className={style.iteam}>
          <Image
            src="https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ=s20-rw"
            alt="img"
            height={20}
            width={20}
          />
          <div className={style.data_title}>
            <div className={style.data_des}>Data is encrypted in transit</div>
          </div>
        </div>
        <div className={style.iteam}>
          <Image
            src="https://play-lh.googleusercontent.com/neRBP16KYqhC7f1N3vUT1Q_HMLwAw7vXu8aOWOqvlY3JXNGd8qyXVNyAQyNLpdUdCV0kYEs9BXk=s20-rw"
            alt="img"
            height={20}
            width={20}
          />
          <div className={style.data_title}>
            <div className={style.data_des}>Data can’t be deleted</div>
          </div>
        </div>
        <div className={style.detail}>
          <Link href="/">See details</Link>
        </div>
      </div>
    </div>
  );
};

export default Datasafety;
