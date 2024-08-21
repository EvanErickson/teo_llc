import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "./../components/HomePages/FreelancerPortfolio/MainBanner";
import Projects from "../components/HomePages/FreelancerPortfolio/Projects";
import Feedback from "../components/Common/Feedback";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const FreelancerPortfolio = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Projects />

      <Feedback />

      <CtaAreaTwo />

      <div className="ptb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default FreelancerPortfolio;
