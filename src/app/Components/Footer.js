import Link from "next/link";
import React from "react";
import UpperFooter from "./UpperFooter";
import Footerlang from "./Footerlang";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <UpperFooter />
        <div className="footer-global">
          <div className="footer-logo"></div>
          <ul class="global-links ">
            <li class="glue-item">
              <a
                href="https://about.google/"
                class="glue-footer-link"
                target="_blank"
              >
                About Google
              </a>
            </li>
            <li class="glue-item">
              <a
                href="https://about.google/products/"
                class="glue-footer-link"
                target="_blank"
              >
                Google products
              </a>
            </li>
            <li class="glue-item">
              <a
                href="https://policies.google.com/privacy?hl=en"
                class="glue-footer-link"
                target="_blank"
              >
                Privacy
              </a>
            </li>
            <li class="glue-list-item">
              <a
                href="https://policies.google.com/terms?hl=en"
                class="glue-footer-link"
                target="_blank"
              >
                Terms
              </a>
            </li>
          </ul>
          <Footerlang />
        </div>
      </div>
    </div>
  );
};

export default Footer;
