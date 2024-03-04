import React from "react";
import logo from "/public/first.svg";
import logo1 from "/public/second.svg";
import logo2 from "/public/third.svg";
import logo3 from "/public/fourth.svg";
import logo4 from "/public/fifth.svg";
import logo5 from "/public/sixth.svg";
import logo6 from "/public/seven.svg";
import logo7 from "/public/eight.svg";
import logo8 from "/public/nine.svg";
import Image from "next/image";
import Link from "next/link";
const BrandsLogo = () => {
  return (
    <>
      <div className="brands">
        <ul className="brands-logo">
          <li className="brand">
            <Link href="/">
              <Image src={logo} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo1} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo2} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo3} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo4} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo5} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo6} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo7} height={48} width={96} alt="img" />
            </Link>
          </li>
          <li className="brand">
            <Link href="/">
              <Image src={logo8} height={48} width={96} alt="img" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BrandsLogo;
