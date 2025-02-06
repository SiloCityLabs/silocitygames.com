import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";

import portfolioImg1 from "../assets/images/portfolio/portfolio-1.jpg";
import portfolioImg2 from "../assets/images/portfolio/portfolio-2.jpg";
import portfolioImg3 from "../assets/images/portfolio/portfolio-3.jpg";
import portfolioImg7 from "../assets/images/portfolio/portfolio-7.jpg";
import portfolioImg8 from "../assets/images/portfolio/portfolio-8.jpg";
import portfolioImg9 from "../assets/images/portfolio/portfolio-9.jpg";
import tabImg1 from "../assets/images/portfolio/dp-portfolio-01.jpg";
import tabImg2 from "../assets/images/portfolio/dp-portfolio-02.jpg";
import tabImg3 from "../assets/images/portfolio/dp-portfolio-03.jpg";
import tabImg4 from "../assets/images/portfolio/dp-portfolio-04.jpg";
import tabImg5 from "../assets/images/portfolio/dp-portfolio-05.jpg";
import tabImg6 from "../assets/images/portfolio/dp-portfolio-06.jpg";
import tabBgImg1 from "../assets/images/portfolio/big/dp-big--portfolio-01.jpg";
import tabBgImg2 from "../assets/images/portfolio/big/dp-big--portfolio-02.jpg";
import tabBgImg3 from "../assets/images/portfolio/big/dp-big--portfolio-03.jpg";
import tabBgImg4 from "../assets/images/portfolio/big/dp-big--portfolio-04.jpg";
import tabBgImg5 from "../assets/images/portfolio/big/dp-big--portfolio-05.jpg";
import tabBgImg6 from "../assets/images/portfolio/big/dp-big--portfolio-06.jpg";
import { Gallery, Item } from "react-photoswipe-gallery";

const PortfolioList = [
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

const TabOne = [
  {
    image: tabImg1,
    bigImage: tabBgImg1,
    category: "Web Design",
    title: "Design is a creative part",
  },
  {
    image: tabImg2,
    bigImage: tabBgImg2,
    category: "Mobile App",
    title: "The service provide for designer",
  },
  {
    image: tabImg3,
    bigImage: tabBgImg3,
    category: "Web Design",
    title: "Mobile App landing Design",
  },
  {
    image: tabImg4,
    bigImage: tabBgImg4,
    category: "Mobile App",
    title: "Logo Design creativity",
  },
  {
    image: tabImg5,
    bigImage: tabBgImg5,
    category: "Web Design",
    title: "T-shirt design is the part of design",
  },
  {
    image: tabImg6,
    bigImage: tabBgImg6,
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
];

class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      isOpen: false,
    };
  }
  render() {
    return (
      <div>
        <PageHelmet pageTitle="Gallery" />

        {/* Start Header Area  */}
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* End Header Area  */}

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Gallery"} />
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper  */}
        <main className="page-wrapper">
          {/* Start Portfolio Area  */}
          <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
            <div className="container">
              <Gallery>
                <div className="row">
                  {TabOne.map((value, index) => (
                    <div className="col-lg-6" key={index}>
                      <div className="item-portfolio-static">
                        <div>
                          <div className="portfolio-static">
                            <div className="thumbnail-inner">
                              <div className="thumbnail">
                                <Item
                                  original={value.bigImage}
                                  thumbnail={value.bigImage}
                                  width="1024"
                                  height="768"
                                >
                                  {({ ref, open }) => (
                                    <a onClick={open}>
                                      <img
                                        ref={ref}
                                        src={value.image}
                                        alt="Portfolio Images"
                                      />
                                    </a>
                                  )}
                                </Item>
                              </div>
                            </div>
                            <div className="content">
                              <div className="inner">
                                <p>{value.category}</p>
                                <h4>
                                  <a href="#portfolio-details">{value.title}</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Gallery>
            </div>
          </div>
          {/* End Portfolio Area  */}

          {/* Start Portfolio Area  */}
          <div className="creative-portfolio-wrapper ptb--120 bg_color--1">
            <div className="container plr--10">
              <div className="row row--5">
                {PortfolioList.map((value, i) => (
                  <div className="col-lg-4 col-md-6 col-12" key={i}>
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
        </main>
        {/* End Page Wrapper  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        {/* Start Footer Area  */}
        <Footer />
        {/* End Footer Area  */}
      </div>
    );
  }
}

export default GalleryComponent;
