import React, { Component } from "react";

import icon1 from "../../assets/images/icons/icon-01.png";
import icon2 from "../../assets/images/icons/icon-02.png";
import icon3 from "../../assets/images/icons/icon-03.png";

const ServiceList = [
  {
    icon: icon1,
    title: "Business Stratagy",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    icon: icon2,
    title: "Website Development",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    icon: icon3,
    title: "Marketing & Reporting",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
];

class ServiceOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {ServiceList.map((val, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="service service__style--1">
                <div className="icon">
                  <img src={val.icon} alt="Digital Agency" />
                </div>
                <div className="content">
                  <h4 className="title">{val.title}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceOne;
