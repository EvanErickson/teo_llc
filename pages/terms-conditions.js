import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import TermsAndConditionsContent from "../components/TermsAndConditions/TermsAndConditionsContent";
import Footer from "../components/Layouts/Footer";

const TermsConditions = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Terms Conditions"
        BGImage="/images/page-banner2.jpg"
      />

      <TermsAndConditionsContent />

      <Footer />
    </>
  );
};

export default TermsConditions;
