import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

import portfolio1 from "../../assets/images/portfolio/big/dp-big--portfolio-01.jpg";

//json
import gameSites from "../../json/game_sites.json";
import accessories from "../../json/accessories.json";

const allProjects = [...gameSites, ...accessories];


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
                    <span>Game Sites</span>
                  </Tab>
                  <Tab>
                    <span>Accessories</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>

          {gallerySection(allProjects, column)}
          {gallerySection(gameSites, column)}
          {gallerySection(accessories, column)}
        </Tabs>
      </div>
    );
  }
}

function gallerySection(projects, column) {
  return (
    <Gallery>
      <TabPanel className="row row--35">
        {projects.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className="item-portfolio-static">
              <div>
                <div className="portfolio-static">
                  <div className="thumbnail-inner">
                    <div className="thumbnail">
                      <Item
                        original={value.bigImage || portfolio1}
                        thumbnail={value.bigImage || portfolio1}
                        width="1024"
                        height="768"
                      >
                        {({ ref, open }) => (
                          <a onClick={open}>
                            <img
                              ref={ref}
                              src={value.image || portfolio1} // Use "portfolio1" if value.image is empty
                              alt="Portfolio Images"
                              onError={(e) => { e.target.onerror = null; e.target.src = "portfolio1"; }} // Fallback on image load error
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
                        <a href={value.url}>{value.title}</a>
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
  )
}

export default TabStyleThree;
