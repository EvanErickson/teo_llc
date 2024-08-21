import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/BusinessAgency/MainBanner";
import About from "../components/HomePages/BusinessAgency/About";
import Services from "../components/HomePages/BusinessAgency/Services";
import OurWorks from "../components/HomePages/BusinessAgency/OurWorks";
import WorkProcess from "../components/HomePages/BusinessAgency/WorkProcess";
import Feedback from "../components/Common/Feedback";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import PricingStyleTwo from "../components/Pricing/PricingStyleTwo";
import PartnerTwo from "../components/Common/PartnerTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import LatestNewsSlider from "../components/Common/LatestNewsSliderTwo";
import Footer from "../components/Layouts/Footer";

const BusinessAgency = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <About />

      <Services />

      <OurWorks />

      <WorkProcess />

      <Feedback />

      <TeamStyleTwo />

      <PricingStyleTwo />

      <PartnerTwo />

      <CtaAreaTwo />

      <LatestNewsSlider />

      <Footer />
    </>
  );
};

export default BusinessAgency;
