import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Aabout = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="About Us" BGImage="/images/page-banner1.jpg" />

      <AboutContent />

      <FunFactsTwo />

      <TeamStyleThree />

      <Feedback />

      <Partner />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Aabout;
