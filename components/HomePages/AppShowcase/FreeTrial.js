import React from "react";

const FreeTrial = () => {
  return (
    <>
      <div className="app-free-trial-area">
        <div className="container">
          <div className="app-free-trial-content">
            <span 
              className="sub-title"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              FREE TRIAL
            </span>

            <h2
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Start Your 14 Days Free Trials Today!
            </h2>

            <form
              className="free-trial-form"
              onSubmit={(e) => e.preventDefault()}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <input
                type="text"
                className="input-newsletter"
                placeholder="Enter Your Email Address"
                name="email"
              />
              <button type="submit" className="app-default-btn">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrial;
