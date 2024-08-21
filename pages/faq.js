import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import FaqForm from "../components/Faq/FaqForm";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Faq = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Frequently Asked Questions" BGImage="/images/page-banner1.jpg" />

      <FaqContent />

      <div className="pb-100">
        <FaqForm />
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Faq;
