import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/DigitalMarketing/MainBanner";
import Partner from "./../components/HomePages/DigitalMarketing/Partner";
import MarketingProcess from "../components/HomePages/DigitalMarketing/MarketingProcess";
import AboutContent from "./../components/HomePages/DigitalMarketing/AboutContent";
import OurServices from "../components/HomePages/DigitalMarketing/OurServices";
import FunFacts from "../components/HomePages/DigitalMarketing/FunFacts";
import Testimonials from "../components/HomePages/DigitalMarketing/Testimonials";
import PricingPlans from "../components/HomePages/DigitalMarketing/PricingPlans";
import TeamMember from "../components/HomePages/DigitalMarketing/TeamMember";
import LatestNews from "../components/HomePages/DigitalMarketing/LatestNews";
import CtaArea from "../components/Common/CtaArea";
import CaseStudies from "../components/HomePages/DigitalMarketing/CaseStudies";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const DigitalMarketing = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <MarketingProcess />

      <AboutContent />

      <OurServices />

      <FunFacts />

      <CaseStudies />

      <Testimonials />

      <PricingPlans />

      <CtaArea />

      <TeamMember />

      <LatestNews />

      <Partner />

      <div className="pb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default DigitalMarketing;
