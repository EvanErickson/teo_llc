import React from "react";
import Link from "next/link";

const latestBlogPostData = [
  {
    title: "Top 5 Tips To Create An Eye-Catching Website",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    date: "Dec 02, 2022",
    author: "Shelley Percy",
    authorLink: "#",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    title: "Improve Marketing Techniques For Lead Generation",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    date: "Dec 03, 2022",
    author: "Stevn Smith",
    authorLink: "#",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    title: "Esit And A Case For Successful Fast Delivery",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    date: "Dec 04, 2022",
    author: "David Warner",
    authorLink: "#",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "300",
  },
];

const LatestBlogPost = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Latest Blog Post</h2>
          </div>

          <div className="row justify-content-center">
            {latestBlogPostData &&
              latestBlogPostData.map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div 
                    className="pp-post-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
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
                      <p>{value.shortText}</p>
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

export default LatestBlogPost;
