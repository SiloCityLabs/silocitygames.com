import React, { Component, Fragment } from "react";

import CounterComponent from "../../component/common/Counter";

class CounterOne extends Component {
  state = {
    didViewCountUp: false,
  };
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    let Data = [
      {
        countNum: 199,
        countTitle:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
      },
      {
        countNum: 575,
        countTitle:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
      },
      {
        countNum: 69,
        countTitle:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
      },
    ];

    return (
      <Fragment>
        <div className="row">
          {Data.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
              key={index}
            >
              <h5 className="counter">
                <CounterComponent max={value.countNum} />
              </h5>
              <p className="description">{value.countTitle}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default CounterOne;
