import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

import screenImg1 from "../../../public/images/software/screen1.jpg";
import screenImg2 from "../../../public/images/software/screen2.jpg";
import screenImg3 from "../../../public/images/software/screen3.jpg";
import screenImg4 from "../../../public/images/software/screen4.jpg";

const Screenshots = () => {
  return (
    <>
      <div className="screenshots-area bg-gradient ptb-100">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">Screenshots</span>
            <h2>
              Easily Customize within <br />
              One Minute
            </h2>
          </div>

          <div className="screenshots-tabs">
            <Tabs>
              <div className="row">
                <div className="col-lg-3 col-sm-4">
                  <TabList>
                    <Tab>
                      <i className="bx bx-data"></i>
                      Budget Overview
                    </Tab>
                    <Tab>
                      <i className="bx bx-add-to-queue"></i>
                      Create & Adjust
                    </Tab>
                    <Tab>
                      <i className="bx bx-file"></i>
                      View Reports
                    </Tab>
                    <Tab>
                      <i className="bx bx-bookmark-plus"></i>
                      Integrations
                    </Tab>
                  </TabList>
                </div>

                <div className="col-lg-9 col-sm-8">
                  <TabPanel>
                    <Image
                      src={screenImg1}
                      alt="screenshots 1"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      width={1170}
                      height={748}
                    />
                  </TabPanel>

                  <TabPanel>
                    <Image
                      src={screenImg2}
                      alt="screenshots 2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      width={1170}
                      height={748}
                    />
                  </TabPanel>

                  <TabPanel>
                    <Image
                      src={screenImg3}
                      alt="screenshots 3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      width={1170}
                      height={748}
                    />
                  </TabPanel>

                  <TabPanel>
                    <Image
                      src={screenImg4}
                      alt="screenshots 4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      width={1170}
                      height={748}
                    />
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screenshots;
