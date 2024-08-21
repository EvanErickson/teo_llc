import React from "react";

const keyFeaturesData = [
  {
    iconName: "fa-solid fa-eye",
    iconBgClass: "",
    title: "High Resolution",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-layer-group",
    iconBgClass: "bg2",
    title: "Retina Ready Screen",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-database",
    iconBgClass: "bg3",
    title: "Easy Editable Data",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-lock",
    iconBgClass: "bg4",
    title: "Fully Secured",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
    aosDelay: "400",
  },
  {
    iconName: "fa-solid fa-cloud-bolt",
    iconBgClass: "bg5",
    title: "Cloud Storage",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
    aosDelay: "500",
  },
  {
    iconName: "fa-solid fa-chart-pie",
    iconBgClass: "bg6",
    title: "Responsive Ready",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
    aosDelay: "600",
  },
];

const KeyFeatures = () => {
  return (
    <>
      <div className="app-features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">KEY FEATURES</span>
            <h2>Most Probably Included Best Features Ever</h2>
          </div>

          <div className="row justify-content-center">
            {keyFeaturesData &&
              keyFeaturesData.slice(0, 6).map((value, i) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                  <div
                    className="app-features-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className={`icon ${value.iconBgClass}`}>
                      <i className={value.iconName}></i>
                    </div>
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

export default KeyFeatures;
