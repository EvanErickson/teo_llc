import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

const ServiceDetails = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Mobile App Development" BGImage="/images/page-banner1.jpg" />

      <ServiceDetailsContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default ServiceDetails;
