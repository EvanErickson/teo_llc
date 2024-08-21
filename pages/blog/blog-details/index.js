import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";

const BlogDetails = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Blog Details" BGImage="/images/page-banner2.jpg" />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
