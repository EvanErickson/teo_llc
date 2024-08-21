import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/Portfolio/PortfolioDetailsContent";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

const PortfolioDetails = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="UX for Mobile Apps" BGImage="/images/page-banner2.jpg" />

      <PortfolioDetailsContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default PortfolioDetails;
