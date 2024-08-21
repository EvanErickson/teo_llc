import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from "./../components/HomePages/SoftwareStartup/Banner";
import HelpDesk from "./../components/HomePages/SoftwareStartup/HelpDesk";
import Screenshots from "./../components/HomePages/SoftwareStartup/Screenshots";
import Partners from "../components/HomePages/SoftwareStartup/Partners";
import Overview from "../components/HomePages/SoftwareStartup/Overview";
import Funfacts from "../components/HomePages/SoftwareStartup/Funfacts";
import FeedbackThree from "../components/Common/FeedbackThree";
import Pricing from "../components/HomePages/SoftwareStartup/Pricing";
import Faq from "../components/HomePages/SoftwareStartup/Faq";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import AppDownload from "../components/HomePages/SoftwareStartup/AppDownload";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const SoftwareStartup = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <HelpDesk />

      <Screenshots />

      <Partners />

      <Overview />

      <Funfacts />

      <FeedbackThree />

      <Pricing />

      <Faq />

      <AppDownload />

      <LatestNewsSlider />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default SoftwareStartup;
