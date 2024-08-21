import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const ourWorksData = [
  {
    image: "/images/works/work1.jpg",
    title: "Designing a better cinema experience",
    category: "Development",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work2.jpg",
    title: "Building design process within teams",
    category: "Web Design",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work3.jpg",
    title: "How intercom brings play into their design process",
    category: "eCommerce",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work4.jpg",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "Email Marketing",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work5.jpg",
    title: "Examples of different types of sprints",
    category: "Marketing & Reporting",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work6.jpg",
    title: "Redesigning the New York times app",
    category: "App Development",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work7.jpg",
    title: "Design the Web, Mobile, and eCommerce",
    category: "SEO Optimization",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work8.jpg",
    title: "Redesigning the New York times app",
    category: "Digital Marketing",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work9.jpg",
    title: "We provide any type of app development",
    category: "App Development",
    viewDetails: "/portfolio/portfolio-details/",
  },
  {
    image: "/images/works/work10.jpg",
    title: "We provide any type of marketing support",
    category: "SEO Marketing",
    viewDetails: "/portfolio/portfolio-details/",
  },
];

const OurWorks = () => {
  return (
    <>
      <section className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            cssMode={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="work-slides"
          >
            {ourWorksData &&
              ourWorksData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="work-card">
                    <Image src={value.image} alt="image" width={510} height={750} />

                    <div className="content text-center">
                      <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span>

                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>

                      <Link href={value.viewDetails} className="custom-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
