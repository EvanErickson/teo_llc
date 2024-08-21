import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/DefaultHomeTwo/MainBanner";
import Services from "../components/HomePages/DefaultHomeTwo/Services";
import About from "../components/HomePages/DefaultHomeTwo/About";
import OurWorks from "../components/HomePages/DefaultHomeTwo/OurWorks";
import Feedback from "../components/Common/Feedback";
import Team from "../components/Common/Team";
import FunFacts from "../components/Common/FunFacts";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import WorkProcess from "../components/HomePages/DefaultHomeTwo/WorkProcess";
import Footer from "../components/Layouts/Footer";

const DefaultHome2 = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <About />

      <OurWorks />

      <WorkProcess />

      <Feedback />

      <Team />

      <FunFacts />

      <LatestNewsSlider />

      <CtaArea />

      <Partner />

      <Footer />
    </>
  );
};

export default DefaultHome2;
