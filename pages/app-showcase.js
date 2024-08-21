import React from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import MainBanner from "./../components/HomePages/AppShowcase/MainBanner";
import Partners from "./../components/HomePages/AppShowcase/Partners";
import AboutUsContent from "../components/HomePages/AppShowcase/AboutUsContent";
import Funfacts from "../components/HomePages/AppShowcase/Funfacts";
import KeyFeatures from "../components/HomePages/AppShowcase/KeyFeatures";
import AppDownload from "../components/HomePages/AppShowcase/AppDownload";
import AppScreenshots from "./../components/HomePages/AppShowcase/AppScreenshots";
import ClientFeedback from "../components/HomePages/AppShowcase/ClientFeedback";
import FreeTrial from "../components/HomePages/AppShowcase/FreeTrial";
import BlogPost from "../components/HomePages/AppShowcase/BlogPost";
import PricingPlan from "../components/HomePages/AppShowcase/PricingPlan";
import FAQ from "../components/HomePages/AppShowcase/FAQ";
import Footer from "../components/Layouts/Footer";

const AppShowcase = () => {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <Partners />

      <AboutUsContent />

      <Funfacts />

      <KeyFeatures />

      <AppScreenshots />

      <AppDownload />

      <ClientFeedback />

      <PricingPlan />

      <FAQ />

      <BlogPost />

      <div className="ptb-100">
        <FreeTrial />
      </div>

      <Footer />
    </>
  );
};

export default AppShowcase;
