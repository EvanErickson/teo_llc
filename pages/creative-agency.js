import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/CreativeAgency/MainBanner";
import About from "../components/HomePages/CreativeAgency/About";
import Services from "../components/HomePages/CreativeAgency/Services";
import OurWorks from "../components/HomePages/CreativeAgency/OurWorks";
import Feedback from "../components/Common/Feedback";
import WorkProcess from "../components/HomePages/CreativeAgency/WorkProcess";
import PricingStyleOne from "../components/Pricing/PricingStyleOne";
import Team from "../components/HomePages/CreativeAgency/Team";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";

const CreativeAgency = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <About />

      <Services />

      <OurWorks />

      <Feedback />

      <WorkProcess />

      <PricingStyleOne />

      <Team />

      <FunFactsTwo />

      <LatestNewsSlider />

      <CtaArea />

      <Partner />

      <Footer />
    </>
  );
};

export default CreativeAgency;
