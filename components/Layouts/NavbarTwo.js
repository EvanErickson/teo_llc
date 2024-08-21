import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo.png";
import whiteLogo from "../../public/images/logo-white.png";

const NavbarTwo = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <Image
                src={logo}
                className="black-logo"
                alt="logo"
                width={150}
                height={40}
              />
              <Image
                src={whiteLogo}
                className="white-logo"
                alt="logo"
                width={150}
                height={40}
              />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                  >
                    Home
                  </Link>

                </li>

                <li className="nav-item">
                  <Link
                    href="/services/"
                    className="nav-link"
                  >
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about/"
                    className={`nav-link ${
                      currentPath == "/about/" && "active"
                    }`}
                  >
                    About us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/portfolio/"
                    className="nav-link"
                  >
                    Portfolio
                  </Link>

                </li>

                <li className="nav-item">
                  <Link
                    href="/blog/"
                    className="nav-link"
                  >
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact-us/"
                    className={`nav-link ${
                      currentPath == "/contact-us/" && "active"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="others-options">
                <Link href="/contact-us/" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
