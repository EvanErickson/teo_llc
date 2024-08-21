import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/PortfolioAgencyTwo/MainBanner";
import OurWorks from "../components/HomePages/PortfolioAgencyTwo/OurWorks";
import Feedback from "../components/Common/Feedback";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

const PortfolioAgency2 = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <OurWorks />

      <Feedback />

      <TeamStyleThree />

      <CtaAreaTwo />

      <div className="ptb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default PortfolioAgency2;
