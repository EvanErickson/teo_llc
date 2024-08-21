import React from "react";

const myEducationData = [
  {
    university: "Stanford University",
    year: "2003",
    category: "Computer Science",
    shortText:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.",
    aosDelay: "100",
  },
  {
    university: "Harvard University",
    year: "2005",
    category: "Bachelor's Degree",
    shortText:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.",
    aosDelay: "200",
  },
  {
    university: "Stanford University",
    year: "2007",
    category: "Computer Programming",
    shortText:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.",
    aosDelay: "200",
  },
];

const myExperienceData = [
  {
    company: "EnvyTheme",
    year: "2017 - Present",
    category: "Graphics Designer",
    shortText:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.",
    aosDelay: "100",
  },
  {
    company: "ThemeForest",
    year: "2015 - 2017",
    category: "UX/UI Designer",
    shortText:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.",
    aosDelay: "200",
  },
  {
    company: "Envato",
    year: "2014",
    category: "Jonior Web Developer",
    shortText:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.",
    aosDelay: "300",
  },
];

const MyEducationAndExperience = () => {
  return (
    <>
      <div className="short-brief-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="short-brief-content">
                <div className="section-title style-two">
                  <h2>My Education</h2>
                </div>

                <ul className="timeline">
                  {myEducationData &&
                    myEducationData.map((value, i) => (
                      <li
                        className="timeline-item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <div className="timeline-info">
                          <span className="sub-title">
                            {value.university} - <span>{value.year}</span>
                          </span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h3>{value.category}</h3>
                          <p>{value.shortText}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="short-brief-content">
                <div className="section-title style-two">
                  <h2>My Experience</h2>
                </div>

                <ul className="timeline">
                  {myExperienceData &&
                    myExperienceData.map((value, i) => (
                      <li
                        className="timeline-item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <div className="timeline-info">
                          <span className="sub-title">
                            {value.company} - <span>{value.year}</span>
                          </span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h3>{value.category}</h3>
                          <p>{value.shortText}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEducationAndExperience;
