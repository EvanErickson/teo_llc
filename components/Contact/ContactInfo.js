import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Please email us</h3>
                <p>
                  <a href="mailto:evan@teollc.us">evan@teollc.us</a>
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+1234567890">+1 949 449 9650</a>
                </p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
