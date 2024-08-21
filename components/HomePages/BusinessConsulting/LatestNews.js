import React from "react";
import Link from "next/link";
import Image from "next/image";

const latestNewsData = [
  {
    image: "/images/business-consulting/blog-img1.jpg",
    title: "The Best Way to Get Consulting From Business Clients",
    date: "Dec 02, 2022",
    author: "Shelley Percy",
    authorLink: "#",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    image: "/images/business-consulting/blog-img2.jpg",
    title: "Grow Your Counsulting Business and This Questions",
    date: "Dec 03, 2022",
    author: "Shelley Percy",
    authorLink: "#",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    image: "/images/business-consulting/blog-img3.jpg",
    title: "How to Have a Good Relation With Clients in YourBusiness",
    date: "Dec 03, 2022",
    author: "Shelley Percy",
    authorLink: "#",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "300",
  },
];

const LatestNews = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR BLOG</span>
            <h2>Our Latest News</h2>
          </div>

          <div className="row justify-content-center">
            {latestNewsData &&
              latestNewsData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="bc-post-item"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="post-image">
                      <Link href={value.blogDetailsLink} className="d-block">
                        <Image
                          src={value.image}
                          alt="image"
                          width={860}
                          height={552}
                        />
                      </Link>
                    </div>

                    <div className="post-content">
                      <ul className="meta">
                        <li>
                          <i className="far fa-calendar-alt"></i> {value.date}
                        </li>
                        <li>
                          <i className="far fa-user-circle"></i>{" "}
                          <a href={value.authorLink}>{value.author}</a>
                        </li>
                      </ul>

                      <h3>
                        <Link href={value.blogDetailsLink}>{value.title}</Link>
                      </h3>

                      <Link href={value.blogDetailsLink} className="link-btn">
                        Read More <i className="fas fa-chevron-right"></i>
                      </Link>
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

export default LatestNews;
