import React from "react";
import Link from "next/link";
import Image from "next/image";

const latestNewsData = [
  {
    image: "/images/blog/blog7.jpg",
    title: "The Most Popular New top Business Apps",
    date: "Feb 15, 2023",
    category: "Technology",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    detailsLink: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog8.jpg",
    title: "The Best Marketing top use Management Tools",
    date: "Feb 16, 2023",
    category: "Agency",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    detailsLink: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog9.jpg",
    title: "3 WooCommerce Plugins to Boost Sales",
    date: "Feb 17, 2023",
    category: "IT Agency",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    detailsLink: "/blog/blog-details/",
    aosDelay: "300",
  },
];

const LatestNews = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">News</span>
            <h2>Our Latest News</h2>
          </div>

          <div className="row justify-content-center">
            {latestNewsData &&
              latestNewsData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-blog-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="blog-image">
                      <Link href={value.detailsLink}>
                        <Image
                          src={value.image}
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={value.detailsLink}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">{value.date}</span>
                      <h3>
                        <Link href={value.detailsLink}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>

                      <Link href={value.detailsLink} className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
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
