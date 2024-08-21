import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from '../../public/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image 
                      src={logo}
                      alt="Logo" 
                      width={150}
                      height={40}
                    />
                  </Link>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="200"
              >
                <h3>Explore</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio/">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/team/">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="/contact-us/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing/">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions/">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="400"
              >
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> 2750 Quadra Street
                    Victoria, Canada.
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+324-9442-515">+324-9442-515</a> 
                    <br />
                    <a href="tel:+324-9442-515">+324-9442-999</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:hello@pungent.com">hello@pungent.com</a>
                    <a href="mailto:support@pungent.com">support@pungent.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Pungent. All Rights Reserved By{" "}
              <a href="https://envytheme.com" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
