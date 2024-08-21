import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/PortfolioAgency/MainBanner";
import OurWorks from "../components/HomePages/PortfolioAgency/OurWorks";
import Feedback from "../components/Common/Feedback";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Newsletter from "../components/Common/Newsletter";
import CtaArea from "../components/Common/CtaArea";
import Footer from "../components/Layouts/Footer";

const PortfolioAgency = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <OurWorks />

      <Feedback />

      <TeamStyleThree />

      <CtaArea />

      <div className="ptb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default PortfolioAgency;
