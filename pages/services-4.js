import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleFour from "../components/Services/ServicesStyleFour";
import CtaArea from "../components/Common/CtaArea";
import Footer from "../components/Layouts/Footer";

const Services4 = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Services Style 4" BGImage="/images/page-banner4.jpg" />

      <ServicesStyleFour />

      <CtaArea />

      <Footer />
    </>
  );
};

export default Services4;
