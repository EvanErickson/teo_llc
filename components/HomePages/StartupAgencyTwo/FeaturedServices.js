import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const featuredServicesData = [
  {
    iconName: "pe-7s-filter",
    title: "Information Architect",
    bgText: "Ia",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-display1",
    title: "Business Analyst",
    bgText: "Ba",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-plugin",
    title: "Interaction Designer",
    bgText: "Id",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-arc",
    title: "Information Architect",
    bgText: "Ia",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-diamond",
    title: "Visual Designer",
    bgText: "Vd",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-helm",
    title: "Content Strategist",
    bgText: "Cs",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-magnet",
    title: "UX Strategist",
    bgText: "Ux",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/services/service-details/",
  },
];

const FeaturedServices = () => {
  return (
    <>
      <section className="featured-services-area">
        <div className="container">
          <div className="row">
            <Swiper
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="featured-services-slides"
            >
              {featuredServicesData &&
                featuredServicesData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="col-lg-12">
                      <div className="featured-services-box">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>
                        
                        <h3>
                          <Link href={value.viewDetails}>{value.title}</Link>
                        </h3>

                        <p>{value.shortText}</p>

                        <Link
                          href={value.viewDetails}
                          className="read-more-btn"
                        >
                          Read More
                        </Link>

                        <div className="back-text">
                          {value.bgText}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
