import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaGithub } from "react-icons/fa";

import portfolio1 from "../../assets/images/portfolio/big/dp-big--portfolio-01.jpg";

//json
import gameSites from "../../json/projects/game_sites.json";
import accessories from "../../json/projects/accessories.json";

const allProjects = [...gameSites, ...accessories];

class TabStyleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      tab2: 0,
      tab3: 0,
      isOpen: false,
    };
  }
  render() {
    const { column } = this.props;

    return (
      <div id="project-list">
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
    <TabPanel className="row row--35">
      {projects.map((value, index) => (
        <div className={`${column}`} key={index}>
          <div className="item-portfolio-static">
            <div>
              <div className="portfolio-static">
                <div className="thumbnail-inner">
                  <div className="thumbnail">
                    <a
                      href={value.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={value.image || portfolio1}
                        alt="Portfolio Images"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = portfolio1;
                        }} // Fallback on image load error
                      />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>
                      <span className="left">{value.category}</span>

                      {value.github?.trim() && (
                        <span className="right" style={{ float: "right" }}>
                          <a
                            href={value.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub size={30} />
                          </a>
                        </span>
                      )}
                    </p>
                    <h4>
                      <a
                        href={value.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value.title}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </TabPanel>
  );
}

export default TabStyleThree;
