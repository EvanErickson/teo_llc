import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/MarketingAgencyTwo/MainBanner";
import Services from "../components/HomePages/MarketingAgencyTwo/Services";
import OurWorks from "../components/HomePages/MarketingAgencyTwo/OurWorks";
import Feedback from "../components/Common/Feedback";
import About from "../components/HomePages/MarketingAgencyTwo/About";
import FunFacts from "../components/Common/FunFacts";
import PartnerTwo from "../components/Common/PartnerTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/Layouts/Footer";

const MarketingAgency2 = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <Services />

      <OurWorks />

      <Feedback />

      <About />

      <FunFacts />

      <PartnerTwo />

      <CtaAreaTwo />

      <div className="ptb-100">
        <LatestNews />
      </div>

      <Footer />
    </>
  );
};

export default MarketingAgency2;
