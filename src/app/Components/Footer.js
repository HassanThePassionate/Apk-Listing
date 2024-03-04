import Link from "next/link";
import React from "react";
import FooterLinks from "./FooterLinks";
// import BrandsLogo from "./BrandsLogo";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-sign">
          <div className="container">
            <div className="company-logo">
              <Link href="/" className="c-logo">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-links">
            <FooterLinks />
          </div>
          <div className="logo-footer">
            <h4>an amazon company</h4>
          </div>
          {/* <BrandsLogo /> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
