import React from "react";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    image: "/images/personal-portfolio/project-img1.jpg",
    title: "Startup Business",
    detailsLink: "/portfolio/portfolio-details/",
    aosDelay: "100",
  },
  {
    image: "/images/personal-portfolio/project-img2.jpg",
    title: "App Landing",
    detailsLink: "/portfolio/portfolio-details/",
    aosDelay: "200",
  },
  {
    image: "/images/personal-portfolio/project-img3.jpg",
    title: "Digital Marketing",
    detailsLink: "/portfolio/portfolio-details/",
    aosDelay: "300",
  },
  {
    image: "/images/personal-portfolio/project-img4.jpg",
    title: "Business Startup",
    detailsLink: "/portfolio/portfolio-details/",
    aosDelay: "400",
  },
  {
    image: "/images/personal-portfolio/project-img5.jpg",
    title: "Digital Agency",
    detailsLink: "/portfolio/portfolio-details/",
    aosDelay: "500",
  },
  {
    image: "/images/personal-portfolio/project-img6.jpg",
    title: "Blog Business",
    detailsLink: "/portfolio/portfolio-details/",
    aosDelay: "600",
  },
];

const MyAllProjects = () => {
  return (
    <>
      <div className="pp-works-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <h2>My All Projects</h2>
          </div>

          <div className="row justify-content-center">
            {projectsData &&
              projectsData.map((value, i) => (
                <div className="col-lg-4 col-sm-6 col-md-6" key={i}>
                  <div
                    className="pp-works-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={860}
                      height={860}
                    />
                    <h3>{value.title}</h3>
                    <Link href={value.detailsLink} className="link-btn"></Link>
                  </div>
                </div>
              ))}

            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="pp-works-box-btn">
                <Link href="#" className="default-btn-two">
                  View More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAllProjects;
