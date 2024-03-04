import Link from "next/link";
import React from "react";
import FooterList from "./FooterList";
import FooterLinks from "./FooterLinks";
import BrandsLogo from "./BrandsLogo";
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
              <FooterList />
            </div>
            <FooterLinks />
          </div>
          <div className="logo-footer">
            <h4>an amazon company</h4>
          </div>
          <p className="copyright">© 1990-2024 by IMDb.com, Inc.</p>
          <BrandsLogo />
        </div>
      </footer>
    </>
  );
};

export default Footer;
