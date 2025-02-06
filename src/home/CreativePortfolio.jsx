import React from "react";
import ScrollToTop from "react-scroll-up";
import FooterTwo from "../component/footer/FooterTwo";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFour";
import Helmet from "../component/common/Helmet";

import portfolioImg1 from "../assets/images/portfolio/portfolio-1.jpg";
import portfolioImg2 from "../assets/images/portfolio/portfolio-2.jpg";
import portfolioImg3 from "../assets/images/portfolio/portfolio-3.jpg";
import portfolioImg4 from "../assets/images/portfolio/portfolio-4.jpg";
import portfolioImg5 from "../assets/images/portfolio/portfolio-5.jpg";
import portfolioImg6 from "../assets/images/portfolio/portfolio-6.jpg";
import portfolioImg7 from "../assets/images/portfolio/portfolio-7.jpg";
import portfolioImg8 from "../assets/images/portfolio/portfolio-8.jpg";
import portfolioImg9 from "../assets/images/portfolio/portfolio-9.jpg";

const PortfolioList = [
  {
    images: portfolioImg9,
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    images: portfolioImg8,
    category: "Html",
    title: "Getting tickets to the big show",
  },
  {
    images: portfolioImg7,
    category: "Graphic",
    title: "Getting tickets to the big show",
  },
  {
    images: portfolioImg4,
    category: "Developer",
    title: "The design is Thinking",
  },
  {
    images: portfolioImg5,
    category: "Freelancer",
    title: "The portfolio For Frelancer",
  },
  {
    images: portfolioImg6,
    category: "Freelancer",
    title: "You can see your Portfolio",
  },
  {
    images: portfolioImg7,
    category: "Freelancer",
    title: "The Language of Developer",
  },
  {
    images: portfolioImg1,
    category: "Freelancer",
    title: "The new Thinking for Design",
  },
  {
    images: portfolioImg2,
    category: "Freelancer",
    title: "The new Thinking for Design",
  },
  {
    images: portfolioImg3,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    images: portfolioImg8,
    category: "Freelancer",
    title: "You can see your Portfolio",
  },
  {
    images: portfolioImg9,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
];

const CreativePortfolio = () => {
  return (
    <div className="creative-portfolio">
      <Helmet pageTitle="Creative Portfolio" />

      {/* Start Header Area  */}
      <Header
        headerPosition="header--static"
        logo="symbol-dark"
        color="color-black"
      />
      {/* End Header Area  */}

      {/* Start Portfolio Area  */}
      <div className="creative-portfolio-wrapper bg_color--1">
        <div className="creative-portfolio-wrapper plr--10">
          <div className="row row--5">
            {PortfolioList.map((value, i) => (
              <div className="col-lg-3 col-md-6 col-12" key={i}>
                <div className="portfolio-style--3">
                  <div className="thumbnail">
                    <a href="/portfolio-details">
                      <img
                        className="w-100"
                        src={value.images}
                        alt="Portfolio Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <p className="portfoliotype">{value.category}</p>
                    <h4 className="title">
                      <a href="/portfolio-details">{value.title}</a>
                    </h4>
                    <div className="portfolio-btn">
                      <a
                        className="rn-btn text-white"
                        href="/portfolio-details"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Portfolio Area  */}

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

export default CreativePortfolio;
