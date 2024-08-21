import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import MainBanner from "./../components/HomePages/CyberSecurityAgency/MainBanner";
import TopFeatures from "../components/HomePages/CyberSecurityAgency/TopFeatures";
import TopServices from "../components/HomePages/CyberSecurityAgency/TopServices";
import Services from "../components/HomePages/CyberSecurityAgency/Services";
import AboutContent from "../components/HomePages/CyberSecurityAgency/AboutContent";
import WhyChooseUs from "../components/HomePages/CyberSecurityAgency/WhyChooseUs";
import FunFacts from "../components/HomePages/CyberSecurityAgency/FunFacts";
import OurClients from "../components/HomePages/CyberSecurityAgency/OurClients";
import ProvideAdvancedSecurity from "../components/HomePages/CyberSecurityAgency/ProvideAdvancedSecurity";
import Overview from "../components/HomePages/CyberSecurityAgency/Overview";
import Feedbacks from "../components/HomePages/CyberSecurityAgency/Feedbacks";
import CtaAreaThree from "../components/Common/CtaAreaThree";
import LatestNews from "../components/HomePages/CyberSecurityAgency/LatestNews";
import Newsletter from "../components/Common/Newsletter";
import FooterDark from "../components/Layouts/FooterDark";

const CyberSecurityAgency = () => {
  return (
    <>
      <NavbarDark />

      <MainBanner />

      <div className="bg-1F1F22">
        <TopFeatures />

        <TopServices />

        <Services />

        <AboutContent />

        <WhyChooseUs />

        <FunFacts />

        <OurClients />

        <ProvideAdvancedSecurity />

        <Overview />

        <Feedbacks />

        <CtaAreaThree />

        <LatestNews />

        <div className="pb-100">
          <Newsletter />
        </div>
      </div>

      <FooterDark />
    </>
  );
};

export default CyberSecurityAgency;
