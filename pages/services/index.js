import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyleOne from "../../components/Services/ServicesStyleOne";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

const Services = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Our Services" BGImage="/images/page-banner1.jpg" />

      <ServicesStyleOne />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Services;
