import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/PersonalPortfolio/MainBanner";
import MyExpertise from "./../components/HomePages/PersonalPortfolio/MyExpertise";
import MyAllProjects from "../components/HomePages/PersonalPortfolio/MyAllProjects";
import MySkills from "../components/HomePages/PersonalPortfolio/MySkills";
import MyEducationAndExperience from "../components/HomePages/PersonalPortfolio/MyEducationAndExperience";
import Testimonials from "../components/HomePages/PersonalPortfolio/Testimonials";
import MyBestClient from "../components/HomePages/PersonalPortfolio/MyBestClient";
import LatestBlogPost from "../components/HomePages/PersonalPortfolio/LatestBlogPost";
import ContactForm from "../components/HomePages/PersonalPortfolio/ContactForm";
import Footer from "../components/Layouts/Footer";

const PersonalPortfolio = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <MyExpertise />

      <MyAllProjects />

      <div className="separate-border" />

      <MySkills />

      <div className="separate-border" />

      <MyEducationAndExperience />

      <Testimonials />

      <div className="separate-border" />

      <MyBestClient />

      <div className="separate-border" />

      <LatestBlogPost />

      <div className="separate-border" />

      <ContactForm />

      <Footer />
    </>
  );
};

export default PersonalPortfolio;
