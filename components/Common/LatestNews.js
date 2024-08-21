import React from "react";
import Link from "next/link";
import Image from "next/image";

const latestNewsData = [
  {
    image: "/images/blog/blog1.jpg",
    title: "How to Become a Successful Entry Level UX Designer",
    admin: "Admin",
    category: "Web Development",
    date: "Feb 15, 2023",
    viewDetails: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog2.jpg",
    title: "How to Become a Successful Entry Level ReactJS Designer",
    admin: "Admin",
    category: "ReactJS",
    date: "Feb 16, 2023",
    viewDetails: "/blog/blog-details/",
    aosDelay: "150",
  },
  {
    image: "/images/blog/blog3.jpg",
    title: "The Guide to Running a Client Discovery Process",
    admin: "Admin",
    category: "Angular JS",
    date: "Feb 17, 2023",
    viewDetails: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog4.jpg",
    title: "3 Ways to Get Client Approval for Scope Changes",
    admin: "Admin",
    category: "Design",
    date: "Feb 18, 2023",
    viewDetails: "/blog/blog-details/",
    aosDelay: "250",
  },
  {
    image: "/images/blog/blog5.jpg",
    title: "Top 21 Must-Read Blogs For Creative Agencies",
    admin: "Admin",
    category: "Development",
    date: "Feb 19, 2023",
    viewDetails: "/blog/blog-details/",
    aosDelay: "300",
  },
];

const LatestNews = () => {
  return (
    <>
      <div className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row align-items-center">
            {latestNewsData &&
              latestNewsData.slice(0, 1).map((value, i) => (
                <div className="col-lg-6 col-md-12" key={i}>
                  <div
                    className="single-blog-post mb-0"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="post-image">
                      <Link href={value.viewDetails}>
                        <Image
                          src={value.image}
                          alt="image"
                          width={510}
                          height={383}
                        />
                      </Link>
                    </div>

                    <div className="post-content">
                      <ul className="post-meta">
                        <li>
                          <i className="fa-solid fa-user"></i>
                          <Link href={value.viewDetails}>{value.admin}</Link>
                        </li>
                        <li>
                          <i className="fa-solid fa-tag"></i>
                          <Link href={value.viewDetails}>{value.category}</Link>
                        </li>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          {value.date}
                        </li>
                      </ul>

                      <h3 className="mb-0">
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}

            <div className="col-lg-6 col-md-12">
              <div className="blog-item-box">
                {latestNewsData &&
                  latestNewsData.slice(1, 5).map((value, i) => (
                    <div
                      className="blog-item"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay={value.aosDelay}
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-4 col-md-3 col-sm-4">
                          <div className="post-image">
                            <Link href={value.viewDetails}>
                              <Image
                                src={value.image}
                                alt="image"
                                width={510}
                                height={383}
                              />
                            </Link>
                          </div>
                        </div>

                        <div className="col-lg-8 col-md-9 col-sm-8">
                          <div className="post-content">
                            <ul className="post-meta">
                              <li>
                                <i className="fa-solid fa-user"></i>
                                <Link href={value.viewDetails}>
                                  {value.admin}
                                </Link>
                              </li>
                              <li>
                                <i className="fa-solid fa-tag"></i>
                                <Link href={value.viewDetails}>
                                  {value.category}
                                </Link>
                              </li>
                              <li>
                                <i className="fa-solid fa-calendar-days"></i>
                                {value.date}
                              </li>
                            </ul>

                            <h3>
                              <Link href={value.viewDetails}>
                                {value.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
