import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import whiteLogo from "../../public/images/logo-white.png";

const NavbarDark = () => {
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
      <div id="navbar" className="navbar-area dark-navbar">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
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
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Home <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu mega-dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        Default Home
                      </Link>

                      <Link
                        href="/creative-agency/"
                        className={`nav-link ${
                          currentPath == "/creative-agency/" && "active"
                        }`}
                      >
                        Creative Agency
                      </Link>

                      <Link
                        href="/it-agency/"
                        className={`nav-link ${
                          currentPath == "/it-agency/" && "active"
                        }`}
                      >
                        IT Agency
                      </Link>

                      <Link
                        href="/marketing-agency/"
                        className={`nav-link ${
                          currentPath == "/marketing-agency/" && "active"
                        }`}
                      >
                        Marketing Agency
                      </Link>

                      <Link
                        href="/portfolio-agency/"
                        className={`nav-link ${
                          currentPath == "/portfolio-agency/" && "active"
                        }`}
                      >
                        Portfolio Agency
                      </Link>

                      <Link
                        href="/studio-agency/"
                        className={`nav-link ${
                          currentPath == "/studio-agency/" && "active"
                        }`}
                      >
                        Studio Agency
                      </Link>

                      <Link
                        href="/business-agency/"
                        className={`nav-link ${
                          currentPath == "/business-agency/" && "active"
                        }`}
                      >
                        Business Agency
                      </Link>

                      <Link
                        href="/startup-agency/"
                        className={`nav-link ${
                          currentPath == "/startup-agency/" && "active"
                        }`}
                      >
                        Startup Agency
                      </Link>

                      <Link
                        href="/software-startup/"
                        className={`nav-link ${
                          currentPath == "/software-startup/" && "active"
                        }`}
                      >
                        Software Startup <span className="new">New</span>
                      </Link>

                      <Link
                        href="/digital-marketing/"
                        className={`nav-link ${
                          currentPath == "/digital-marketing/" && "active"
                        }`}
                      >
                        Digital Marketing <span className="new">New</span>
                      </Link>

                      <Link
                        href="/business-consulting/"
                        className={`nav-link ${
                          currentPath == "/business-consulting/" && "active"
                        }`}
                      >
                        Business Consulting <span className="new">New</span>
                      </Link>

                      <Link
                        href="/freelancer-portfolio/"
                        className={`nav-link ${
                          currentPath == "/freelancer-portfolio/" && "active"
                        }`}
                      >
                        Freelancer Portfolio <span className="new">New</span>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/default-home-2/"
                        className={`nav-link ${
                          currentPath == "/default-home-2/" && "active"
                        }`}
                      >
                        Default Home Two
                      </Link>

                      <Link
                        href="/creative-agency-2/"
                        className={`nav-link ${
                          currentPath == "/creative-agency-2/" && "active"
                        }`}
                      >
                        Creative Agency Two
                      </Link>

                      <Link
                        href="/it-agency-2/"
                        className={`nav-link ${
                          currentPath == "/it-agency-2/" && "active"
                        }`}
                      >
                        IT Agency Two
                      </Link>

                      <Link
                        href="/marketing-agency-2/"
                        className={`nav-link ${
                          currentPath == "/marketing-agency-2/" && "active"
                        }`}
                      >
                        Marketing Agency Two
                      </Link>

                      <Link
                        href="/portfolio-agency-2/"
                        className={`nav-link ${
                          currentPath == "/portfolio-agency-2/" && "active"
                        }`}
                      >
                        Portfolio Agency Two
                      </Link>

                      <Link
                        href="/studio-agency-2/"
                        className={`nav-link ${
                          currentPath == "/studio-agency-2/" && "active"
                        }`}
                      >
                        Studio Agency Two
                      </Link>

                      <Link
                        href="/business-agency-2/"
                        className={`nav-link ${
                          currentPath == "/business-agency-2/" && "active"
                        }`}
                      >
                        Business Agency Two
                      </Link>

                      <Link
                        href="/startup-agency-2/"
                        className={`nav-link ${
                          currentPath == "/startup-agency-2/" && "active"
                        }`}
                      >
                        Startup Agency Two
                      </Link>

                      <Link
                        href="/app-showcase/"
                        className={`nav-link ${
                          currentPath == "/app-showcase/" && "active"
                        }`}
                      >
                        App Showcase <span className="new">New</span>
                      </Link>

                      <Link
                        href="/personal-portfolio/"
                        className={`nav-link ${
                          currentPath == "/personal-portfolio/" && "active"
                        }`}
                      >
                        Personal Portfolio <span className="new">New</span>
                      </Link>

                      <Link
                        href="/saas-startup/"
                        className={`nav-link ${
                          currentPath == "/saas-startup/" && "active"
                        }`}
                      >
                        SaaS Startup <span className="new">New</span>
                      </Link>

                      <Link
                        href="/cyber-security-agency/"
                        className={`nav-link ${
                          currentPath == "/cyber-security-agency/" && "active"
                        }`}
                      >
                        Cyber Security Agency <span className="new">New</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Services <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services Style 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-2/"
                        className={`nav-link ${
                          currentPath == "/services-2/" && "active"
                        }`}
                      >
                        Services Style 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-3/"
                        className={`nav-link ${
                          currentPath == "/services-3/" && "active"
                        }`}
                      >
                        Services Style 3
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-4/"
                        className={`nav-link ${
                          currentPath == "/services-4/" && "active"
                        }`}
                      >
                        Services Style 4
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/service-details/"
                        className={`nav-link ${
                          currentPath == "/services/service-details/" &&
                          "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
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
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Portfolio <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/portfolio/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/portfolio-details/"
                        className={`nav-link ${
                          currentPath == "/portfolio/portfolio-details/" &&
                          "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/portfolio-details-2/"
                        className={`nav-link ${
                          currentPath == "/portfolio/portfolio-details-2/" &&
                          "active"
                        }`}
                      >
                        Portfolio Details 2
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pages <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/about/"
                        className={`nav-link ${
                          currentPath == "/about/" && "active"
                        }`}
                      >
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/service-details/"
                        className={`nav-link ${
                          currentPath == "/services/service-details/" &&
                          "active"
                        }`}
                      >
                        Services Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/portfolio-details/"
                        className={`nav-link ${
                          currentPath == "/portfolio/portfolio-details/" &&
                          "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentPath == "/team/" && "active"
                        }`}
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentPath == "/404/" && "active"
                        }`}
                      >
                        404 error
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentPath == "/coming-soon/" && "active"
                        }`}
                      >
                        Coming Soon
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
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Blog <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/blog/"
                        className={`nav-link ${
                          currentPath == "/blog/" && "active"
                        }`}
                      >
                        Blog Grid
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog2/"
                        className={`nav-link ${
                          currentPath == "/blog2/" && "active"
                        }`}
                      >
                        Blog Right Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog3/"
                        className={`nav-link ${
                          currentPath == "/blog3/" && "active"
                        }`}
                      >
                        Blog Left Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog/blog-details/"
                        className={`nav-link ${
                          currentPath == "/blog/blog-details/" && "active"
                        }`}
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
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

export default NavbarDark;
