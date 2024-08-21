import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import MainBanner from "./../components/HomePages/SaasStartup/MainBanner";
import OurClients from "../components/HomePages/SaasStartup/OurClients";
import AboutUs from "../components/HomePages/SaasStartup/AboutUs";
import Services from "./../components/HomePages/SaasStartup/Services";
import HowItWorks from "../components/HomePages/SaasStartup/HowItWorks";
import PricingPlan from "../components/HomePages/SaasStartup/PricingPlan";
import Testimonials from "../components/HomePages/SaasStartup/Testimonials";
import LatestNews from "../components/HomePages/SaasStartup/LatestNews";
import Newsletter from "../components/Common/Newsletter";
import FooterDark from "../components/Layouts/FooterDark";

const SaasStartup = () => {
  return (
    <>
      <NavbarDark />

      <MainBanner />

      <OurClients />

      <AboutUs />

      <Services />

      <HowItWorks />

      <PricingPlan />

      <Testimonials />

      <LatestNews />

      <div className="bg-dark pb-100">
        <Newsletter />
      </div>

      <FooterDark />
    </>
  );
};

export default SaasStartup;
