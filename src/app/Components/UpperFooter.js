import React from "react";
import Link from "next/link";
const UpperFooter = () => {
  return (
    <div className="footer-upper">
      <div className="socials">
        <div className="socials-group">
          <h4 className="social-title">
            <div className="socials-text">
              Follow our &nbsp;
              <Link href="/">Blog</Link>
            </div>
            <ul className="socials-list">
              <li className="socials-iteam">
                <Link href="https://www.youtube.com">
                  <svg
                    role="presentation"
                    aria-hidden="true"
                    class="glue-icon glue-icon--24px glue-icon--social"
                  >
                    <svg id="video-youtube" viewBox="0 0 24 24">
                      <path d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z"></path>
                    </svg>
                    <use href="#video-youtube"></use>
                  </svg>
                </Link>
              </li>
              <li className="socials-iteam">
                <Link href="https://www.twitter.com">
                  <svg
                    role="presentation"
                    aria-hidden="true"
                    class="glue-icon glue-icon--24px glue-icon--social"
                  >
                    <svg id="twitter" viewBox="0 0 24 24">
                      <path d="M7.5,21.8c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6c1-0.7,1.8-1.6,2.5-2.5c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7 c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1 C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,4,4.8c-0.4,0.1-0.8,0.2-1.3,0.2 c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1C2.2,20.9,4.8,21.8,7.5,21.8"></path>
                    </svg>
                    <use href="#twitter"></use>
                  </svg>
                </Link>
              </li>
              <li className="socials-iteam">
                <Link href="https://www.facebook.com">
                  <svg
                    role="presentation"
                    aria-hidden="true"
                    class="glue-icon glue-icon--24px glue-icon--social"
                  >
                    <svg id="post-facebook" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 2v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h-3v-7h-2v-3h2V7.5C13 5.57 14.57 4 16.5 4H19z"></path>
                    </svg>
                    <use href="#post-facebook"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
