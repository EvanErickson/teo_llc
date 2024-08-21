import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import TeamStyleThree from "../components/Team/TeamStyleThree";
import TeamStyleTwo from "../components/Team/TeamStyleTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Team = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Our Skilled Team" BGImage="/images/page-banner1.jpg" />
      
      <TeamStyleThree />

      <TeamStyleTwo />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Team;
