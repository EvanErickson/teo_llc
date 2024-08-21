import React from "react";

const myExpertiseData = [
  {
    iconName: "icon fa-solid fa-clone",
    title: "Product Design",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    aosDelay: "100",
  },
  {
    iconName: "icon fa-solid fa-desktop",
    title: "Web Design",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    aosDelay: "200",
  },
  {
    iconName: "icon bg-f3f9e7 fa-brands fa-bandcamp",
    title: "Branding & Logo",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    aosDelay: "300",
  },
  {
    iconName: "icon fa-solid fa-print",
    title: "Print Design",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    aosDelay: "400",
  },
  {
    iconName: "icon bg-eaf6ff fa-solid fa-mobile-screen-button",
    title: "App Design",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    aosDelay: "500",
  },
  {
    iconName: "icon bg-faf2ff fa-solid fa-chart-area",
    title: "Motion & Animation",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    aosDelay: "600",
  },
];

const MyExpertise = () => {
  return (
    <>
      <div className="pp-expertise-area pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>My Expertise</h2>
          </div>

          <div className="row justify-content-center">
            {myExpertiseData &&
              myExpertiseData.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="pp-expertise-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
