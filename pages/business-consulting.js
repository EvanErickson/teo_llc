import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/BusinessConsulting/MainBanner";
import Features from "../components/HomePages/BusinessConsulting/Features";
import WhoWeAre from "../components/HomePages/BusinessConsulting/WhoWeAre";
import Services from "./../components/HomePages/BusinessConsulting/Services";
import Funfacts from "../components/HomePages/BusinessConsulting/Funfacts";
import WhatWeDo from "../components/HomePages/BusinessConsulting/WhatWeDo";
import TeamMembers from "../components/HomePages/BusinessConsulting/TeamMembers";
import Pricing from "../components/HomePages/BusinessConsulting/Pricing";
import CallToAction from "../components/HomePages/BusinessConsulting/CallToAction";
import LatestNews from "../components/HomePages/BusinessConsulting/LatestNews";
import OurClients from "../components/HomePages/BusinessConsulting/OurClients";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const BusinessConsulting = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <WhoWeAre />

      <Services />

      <Funfacts />

      <WhatWeDo />

      <TeamMembers />

      <Pricing />

      <CallToAction />

      <LatestNews />

      <OurClients />

      <div className="ptb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default BusinessConsulting;
