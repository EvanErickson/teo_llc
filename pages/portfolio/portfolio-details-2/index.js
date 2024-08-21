import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../../../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

const PortfolioDetails2 = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="UX for Mobile Apps" BGImage="/images/page-banner2.jpg" />

      <PortfolioDetailsContent2 />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default PortfolioDetails2;
