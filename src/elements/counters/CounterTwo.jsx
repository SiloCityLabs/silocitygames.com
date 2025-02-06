import React, { Component, Fragment } from "react";

import ScrollAnimation from "react-animate-on-scroll";
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
        countNum: 660,
        countTitle: "HAPPY CLIENTS",
      },
      {
        countNum: 894,
        countTitle: "STORES",
      },
      {
        countNum: 500,
        countTitle: "AWWARDS",
      },
      {
        countNum: 640,
        countTitle: "AWESOME FEATURE",
      },
    ];

    return (
      <Fragment>
        <div className="row mt--40">
          {Data.map((value, index) => (
            <div
              className="counterup_style--2 col-lg-3 col-md-6 col-6"
              key={index}
            >
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <h5 className="counter">
                  <CounterComponent max={value.countNum} />
                </h5>
                <h4 className="description">{value.countTitle}</h4>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default CounterOne;
