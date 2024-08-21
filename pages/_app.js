import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "animate.css";
import "../styles/all.min.css";
import "../styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Software Startup Home Style
import "../styles/software-home-page.css";
// App Showcase Home Style
import "../styles/app-home-page.css";
// Digital Marketing Home Page Style
import "../styles/digital-marketing-home-page.css";
// Personal Portfolio Home Style
import "../styles/personal-portfolio-home-page.css";
// Business Consulting Home Page Style
import "../styles/business-consulting-home-page.css";
// SaaS Startup Home Page Style
import "../styles/saas-startup-home-page.css";
// Freelancer Portfolio Home Page Style
import "../styles/freelancer-portfolio-home-page.css";
// Cyber Security Agency Home Page Style
import "../styles/cyber-security-agency-home-page.css";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Pungent - React Nextjs Multipurpose Startup & Digital Agency Template
        </title>
      </Head>

      <Component {...pageProps} />

      <GoTop />
    </>
  );
}

export default MyApp;
