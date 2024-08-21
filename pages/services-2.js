import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleTwo from "../components/Services/ServicesStyleTwo";
import CtaArea from "../components/Common/CtaArea";
import Footer from "../components/Layouts/Footer";

const Services2 = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Services Style 2" BGImage="/images/page-banner2.jpg" />

      <ServicesStyleTwo />

      <CtaArea />

      <Footer />
    </>
  );
};

export default Services2;
