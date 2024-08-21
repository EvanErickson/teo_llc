import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import PricingStyleTwo from "../components/Pricing/PricingStyleTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Pricing = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Our Pricing" BGImage="/images/page-banner4.jpg" />

      <PricingStyleTwo />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Pricing;
