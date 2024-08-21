import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import BlogRightSidebar from "../components/Blog/BlogRightSidebar";
import Footer from "../components/Layouts/Footer";

const Blog2 = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Blog Right Sidebar" BGImage="/images/page-banner4.jpg" />

      <BlogRightSidebar />

      <Footer />
    </>
  );
};

export default Blog2;
