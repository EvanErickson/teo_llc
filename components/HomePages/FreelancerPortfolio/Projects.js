import React from "react";
import Image from "next/image";

const projectsData = [
  {
    image: "/images/freelancer-portfolio/portfolio-img1.jpg",
    title: "Designing a better cinema experience",
    category: "Web Design",
    url: "#",
    aosDelay: "100",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img2.jpg",
    title: "Building design process within teams",
    category: "Web Development",
    url: "#",
    aosDelay: "200",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img3.jpg",
    title: "How intercom brings play eCommerce",
    category: "eCommerce Development",
    url: "#",
    aosDelay: "300",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img4.jpg",
    title: "UI/UX Design for ABC company",
    category: "UI/UX Design",
    url: "#",
    aosDelay: "400",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img5.jpg",
    title: "Examples of different types of sprints",
    category: "Digital Marketing",
    url: "#",
    aosDelay: "500",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img6.jpg",
    title: "Redesigning the New York times app",
    category: "PSD to HTML",
    url: "#",
    aosDelay: "600",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img7.jpg",
    title: "We provide any type of JavaScript development",
    category: "JavaScript Development",
    url: "#",
    aosDelay: "700",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img8.jpg",
    title: "We provide any type of Mobile App",
    category: "Mobile App",
    url: "#",
    aosDelay: "800",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img9.jpg",
    title: "We provide any type of WordPress",
    category: "WordPress Development",
    url: "#",
    aosDelay: "900",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img10.jpg",
    title: "Maintenance service provides for ABC Company",
    category: "IT Maintenance",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img11.jpg",
    title: "We provide any type of Email Marketing",
    category: "Email Marketing",
    url: "#",
    aosDelay: "1100",
  },
  {
    image: "/images/freelancer-portfolio/portfolio-img12.jpg",
    title: "We provide any type of Marketing & Reporting",
    category: "Marketing & Reporting",
    url: "#",
    aosDelay: "1200",
  },
];

const Projects = () => {
  return (
    <>
      <div className="fp-projects pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title">
            <h2>My all Projects</h2>
          </div>

          <div className="row justify-content-center">
            {projectsData &&
              projectsData.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="fp-project-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <a href={value.url} className="link-btn" target="_blank">
                      <Image
                        src={value.image}
                        alt="image"
                        width={800}
                        height={800}
                      />
                    </a>
                    <div className="content">
                      <a href={value.url} className="link-btn" target="_blank">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                      <h3>
                        <a href={value.url} target="_blank">
                          {value.title}
                        </a>
                      </h3>
                      <span>{value.category}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
