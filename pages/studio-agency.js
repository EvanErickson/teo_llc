import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/StudioAgency/MainBanner";
import Services from "../components/HomePages/StudioAgency/Services";
import OurWorks from "../components/HomePages/StudioAgency/OurWorks";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import About from "../components/HomePages/StudioAgency/About";
import Feedback from "../components/Common/Feedback";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";

const StudioAgency = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <Services />

      <OurWorks />

      <FunFactsTwo />

      <About />

      <Feedback />

      <LatestNewsSlider />

      <CtaAreaTwo />

      <Partner />

      <Footer />
    </>
  );
};

export default StudioAgency;
