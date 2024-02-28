import Image from "next/image";
import Link from "next/link";
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
// import brand from "/public/imdb.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-sign">
          <div className="container">
            <Link href="/">
              <span className="btn-text">Sign in for more aceess</span>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="footer-links">
            <div className="social-icons">
              <ul className="list-icons">
                <li>
                  <Link href="/">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--tiktok"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M15.2346 3C15.5316 5.55428 16.9572 7.07713 19.4359 7.23914V10.112C17.9995 10.2524 16.7412 9.78262 15.2778 8.89699V14.2702C15.2778 21.096 7.83633 23.2291 4.84463 18.3365C2.92217 15.1882 4.09941 9.66382 10.2664 9.44241V12.4719C9.7966 12.5475 9.29438 12.6663 8.83536 12.8229C7.46372 13.2873 6.68609 14.1568 6.9021 15.6904C7.31791 18.6281 12.7073 19.4975 12.2591 13.7571V3.0054H15.2346V3Z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--instagram"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M11.997 2.04c-2.715 0-3.056.011-4.122.06-1.064.048-1.79.217-2.426.463a4.901 4.901 0 0 0-1.771 1.151 4.89 4.89 0 0 0-1.153 1.767c-.247.635-.416 1.36-.465 2.422C2.011 8.967 2 9.307 2 12.017s.011 3.049.06 4.113c.049 1.062.218 1.787.465 2.422a4.89 4.89 0 0 0 1.153 1.767 4.901 4.901 0 0 0 1.77 1.15c.636.248 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.217 2.426-.464a4.901 4.901 0 0 0 1.77-1.15 4.89 4.89 0 0 0 1.154-1.768c.247-.635.416-1.36.465-2.422.048-1.064.06-1.404.06-4.113 0-2.71-.012-3.05-.06-4.114-.049-1.062-.218-1.787-.465-2.422a4.89 4.89 0 0 0-1.153-1.767 4.901 4.901 0 0 0-1.77-1.15c-.637-.247-1.363-.416-2.427-.464-1.067-.049-1.407-.06-4.122-.06m0 1.797c2.67 0 2.985.01 4.04.058.974.045 1.503.207 1.856.344.466.181.8.397 1.15.746.349.35.566.682.747 1.147.137.352.3.88.344 1.853.048 1.052.058 1.368.058 4.032 0 2.664-.01 2.98-.058 4.031-.044.973-.207 1.501-.344 1.853a3.09 3.09 0 0 1-.748 1.147c-.35.35-.683.565-1.15.746-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.746 3.09 3.09 0 0 1-.747-1.147c-.137-.352-.3-.88-.344-1.853-.049-1.052-.059-1.367-.059-4.031 0-2.664.01-2.98.059-4.032.044-.973.207-1.501.344-1.853a3.09 3.09 0 0 1 .748-1.147c.35-.349.682-.565 1.149-.746.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058"></path>
                      <path d="M11.997 15.342a3.329 3.329 0 0 1-3.332-3.325 3.329 3.329 0 0 1 3.332-3.326 3.329 3.329 0 0 1 3.332 3.326 3.329 3.329 0 0 1-3.332 3.325m0-8.449a5.128 5.128 0 0 0-5.134 5.124 5.128 5.128 0 0 0 5.134 5.123 5.128 5.128 0 0 0 5.133-5.123 5.128 5.128 0 0 0-5.133-5.124m6.536-.203c0 .662-.537 1.198-1.2 1.198a1.198 1.198 0 1 1 1.2-1.197"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--twitter"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--youtube"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--facebook"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="links">
                <li className="sub-links">
                  <Link href="/">
                    Get the IMDb App
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="sub-links">
                  <Link href="/">
                    Help
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="sub-links">
                  <Link href="/">
                    Site Index
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="sub-links">
                  <Link href="/">
                    IMDbPro
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="sub-links">
                  <Link href="/">
                    Box Office Mojo
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="sub-links">
                  <Link href="/">
                    IMDb Developer
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="links">
                <li className="sub-links">
                  <Link href="/">Press Room</Link>
                </li>
                <li className="sub-links">
                  <Link href="/">
                    Adversting
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="sub-links">
                  <Link href="/">
                    Jobs
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="sub-links">
                  <Link href="/">Condition of Use</Link>
                </li>
                <li className="sub-links">
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li className="sub-links">
                  <div className="privacy">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 30 14"
                      className="last-svg"
                    >
                      <g>
                        <g id="final---dec.11-2020_1_">
                          <g
                            id="_x30_208-our-toggle_2_"
                            transform="translate(-1275.000000, -200.000000)"
                          >
                            <g
                              id="Final-Copy-2_2_"
                              transform="translate(1275.000000, 200.000000)"
                            >
                              <path
                                className="st0"
                                d="M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g id="final---dec.11-2020">
                          <g
                            id="_x30_208-our-toggle"
                            transform="translate(-1275.000000, -200.000000)"
                          >
                            <g
                              id="Final-Copy-2"
                              transform="translate(1275.000000, 200.000000)"
                            >
                              <path
                                className="st1"
                                d="M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8
                            h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z"
                              ></path>
                              <path
                                id="x"
                                className="st2"
                                d="M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0
                            l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8
                            c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z"
                              ></path>
                              <path
                                id="y"
                                className="st3"
                                d="M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0
                            L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>

                    <a
                      className="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color"
                      role="button"
                      tabIndex="0"
                      aria-disabled="false"
                      href="/privacy/redirect/?ref_=ft_redir"
                    >
                      Your Ads Privacy Choices
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="logo-footer">
            <Image src={brand} height={100} width={100} />
          </div> */}
          <p className="copyright">© 1990-2024 by IMDb.com, Inc.</p>\
          <div className="brands">
            <ul className="brands-logo">
              <li className="brand">
                <Link href="/">
                  <Image src={logo} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo1} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo2} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo3} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo4} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo5} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo6} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo7} height={48} width={96} />
                </Link>
              </li>
              <li className="brand">
                <Link href="/">
                  <Image src={logo8} height={48} width={96} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
