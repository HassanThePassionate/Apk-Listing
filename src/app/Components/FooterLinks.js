import React from "react";
import Link from "next/link";

const FooterLink = ({ href, text }) => (
  <li className="sub-links">
    <Link href={href}>
      {text}
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
);

const PrivacyLink = () => (
  <li className="sub-links">
    <Link href="/privacy/redirect/?ref_=ft_redir">
      Your Ads Privacy Choices
    </Link>
  </li>
);

const FooterLinks = () => (
  <>
    <div>
      <ul className="links">
        <FooterLink href="/" text="Get the IMDb App" />
        <FooterLink href="/" text="Help" />
        <FooterLink href="/" text="Site Index" />
        <FooterLink href="/" text="IMDbPro" />
        <FooterLink href="/" text="Box Office Mojo" />
        <FooterLink href="/" text="IMDb Developer" />
      </ul>
    </div>
    <div>
      <ul className="links">
        <li className="sub-links">
          <Link href="/">Press Room</Link>
        </li>
        <FooterLink href="/" text="Advertising" />
        <FooterLink href="/" text="Jobs" />
        <li className="sub-links">
          <Link href="/">Condition of Use</Link>
        </li>
        <li className="sub-links">
          <Link href="/">Privacy Policy</Link>
        </li>
        <PrivacyLink />
      </ul>
    </div>
  </>
);

export default FooterLinks;
