import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div 
            className="newsletter-inner-area" 
            style={{ 
              backgroundImage: `url(/images/newsletter-bg.jpg)` 
            }}
          >
            <div className="newsletter-content">
              <span 
                className="sub-title"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Get Started Instantly!
              </span>

              <h2
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Get the only new update from this newsletter
              </h2>

              <form 
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
                <button type="submit">Subscribe!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
