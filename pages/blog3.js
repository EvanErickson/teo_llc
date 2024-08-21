import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import BlogLeftSidebar from "../components/Blog/BlogLeftSidebar";
import Footer from "../components/Layouts/Footer";

const Blog3 = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Blog Left Sidebar" BGImage="/images/page-banner5.jpg" />

      <BlogLeftSidebar />

      <Footer />
    </>
  );
};

export default Blog3;
