import React from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import MainBanner from "../components/HomePages/StartupAgency/MainBanner";
import FeaturedServices from "../components/HomePages/StartupAgency/FeaturedServices";
import CaseStudies from "../components/HomePages/StartupAgency/CaseStudies";
import FeedbackTwo from "../components/Common/FeedbackTwo";
import BestServices from "../components/HomePages/StartupAgency/BestServices";
import Partner from "../components/Common/Partner";
import Feedback from "../components/Common/Feedback";
import Portfolio from "../components/HomePages/StartupAgency/Portfolio";
import TeamStyleFour from "../components/Common/TeamStyleFour";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import WorkProcess from "../components/HomePages/StartupAgency/WorkProcess";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";
import LatestNews from "../components/Common/LatestNews";
import Newsletter from "../components/Common/Newsletter";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const StartupAgency = () => {
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <FeaturedServices />

      <CaseStudies />

      <FeedbackTwo />

      <BestServices />

      <Partner />

      <Feedback />

      <Portfolio />

      <TeamStyleFour />

      <FunFactsTwo />

      <WorkProcess />

      <PricingStyleThree />

      <div className="pt-100">
        <Newsletter />
      </div>

      <div className="ptb-100">
        <LatestNews />
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default StartupAgency;
