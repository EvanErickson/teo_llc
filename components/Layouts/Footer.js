import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
      

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} TEOLLC. All Rights Reserved By{" "}
              <a href="https://teollc.us/" target="_blank">
                TEOLLC
              </a>
            </p>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
