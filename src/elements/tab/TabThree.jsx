import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

import portfolio1 from "../../assets/images/portfolio/big/dp-big--portfolio-01.jpg";
import portfolio2 from "../../assets/images/portfolio/big/dp-big--portfolio-02.jpg";
import portfolio3 from "../../assets/images/portfolio/big/dp-big--portfolio-03.jpg";
import portfolio4 from "../../assets/images/portfolio/big/dp-big--portfolio-04.jpg";
import portfolio5 from "../../assets/images/portfolio/big/dp-big--portfolio-05.jpg";
import portfolio6 from "../../assets/images/portfolio/big/dp-big--portfolio-06.jpg";
import portfolio7 from "../../assets/images/portfolio/big/dp-big--portfolio-07.jpg";
import portfolio8 from "../../assets/images/portfolio/big/dp-big--portfolio-08.jpg";
import portfolio9 from "../../assets/images/portfolio/big/dp-big--portfolio-09.jpg";
import portfolio10 from "../../assets/images/portfolio/big/dp-big--portfolio-10.jpg";
import portfolio11 from "../../assets/images/portfolio/big/dp-big--portfolio-11.jpg";

const TabOne = [
  {
    image: portfolio1,
    bigImage: portfolio1,
    category: "Web Design",
    title: "Design is a creative part",
  },
  {
    image: portfolio2,
    bigImage: portfolio2,
    category: "Mobile App",
    title: "The service provide for designer",
  },
  {
    image: portfolio3,
    bigImage: portfolio3,
    category: "Web Design",
    title: "Mobile App landing Design",
  },
  {
    image: portfolio4,
    bigImage: portfolio4,
    category: "Mobile App",
    title: "Logo Design creativity",
  },
  {
    image: portfolio5,
    bigImage: portfolio5,
    category: "Web Design",
    title: "T-shirt design is the part of design",
  },
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
];

const TabTwo = [
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Logo design is the main part for a designer",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "App Landing",
    title: "Mobile App landign is a landing page design",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Dasboard",
    title: "Dasboard design is the main part for data management",
  },
  {
    image: portfolio10,
    bigImage: portfolio10,
    category: "T-shirt Design",
    title: "T-shirt design is the popular design for digital market",
  },
  {
    image: portfolio11,
    bigImage: portfolio11,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
];

const TabThree = [
  {
    image: portfolio4,
    bigImage: portfolio4,
    category: "Mobile App",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio5,
    bigImage: portfolio5,
    category: "Web Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
];

const TabFour = [
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio10,
    bigImage: portfolio10,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio11,
    bigImage: portfolio11,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
];

class TabStyleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      tab2: 0,
      tab3: 0,
      tab4: 0,
      isOpen: false,
    };
  }
  render() {
    const { column } = this.props;

    return (
      <div>
        <Tabs>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tablist-inner">
                <TabList className="pv-tab-button text-center mt--0">
                  <Tab>
                    <span>All Project</span>
                  </Tab>
                  <Tab>
                    <span>Web Design</span>
                  </Tab>
                  <Tab>
                    <span>Logo Design</span>
                  </Tab>
                  <Tab>
                    <span>Mobile App</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>

          <Gallery>
            <TabPanel className="row row--35">
              {TabOne.map((value, index) => (
                <div className={`${column}`} key={index}>
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
            </TabPanel>
          </Gallery>
          <Gallery>
            <TabPanel className="row row--35">
              {TabTwo.map((value, index) => (
                <div className={`${column}`} key={index}>
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
            </TabPanel>
          </Gallery>

          <Gallery>
            <TabPanel className="row row--35">
              {TabThree.map((value, index) => (
                <div className={`${column}`} key={index}>
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
            </TabPanel>
          </Gallery>
          <Gallery>
            <TabPanel className="row row--35">
              {TabFour.map((value, index) => (
                <div className={`${column}`} key={index}>
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
            </TabPanel>
          </Gallery>
        </Tabs>
      </div>
    );
  }
}

export default TabStyleThree;
