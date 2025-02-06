import React from "react";
import ScrollToTop from "react-scroll-up";

import FooterTwo from "../component/footer/FooterTwo";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFour";
import TabThree from "../elements/tab/TabThree";
import Helmet from "../component/common/Helmet";

const DesignerPortfolio = () => {
  return (
    <div>
      <Helmet pageTitle="Silo City Games" />
      {/* Start Header Area  */}
      <Header
        headerPosition="header--static"
        logo="symbol-dark"
        color="color-black"
      />
      {/* End Header Area  */}

      {/* Start Designer Portfolio  */}
      <div className="designer-portfolio-area ptb--120 bg_color--1">
        <div className="wrapper plr--70 plr_sm--30 plr_md--30">
          <TabThree column="col-lg-4 col-md-6 col-sm-6 col-12" />
        </div>
      </div>
      {/* End Designer Portfolio  */}

      {/* Start Footer Style  */}
      <FooterTwo />
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default DesignerPortfolio;
