import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg1 from "../assets/images/client/testimonial-1.jpg";
import testimonialImg2 from "../assets/images/client/testimonial-2.jpg";
import testimonialImg3 from "../assets/images/client/testimonial-3.jpg";
import testimonialImg4 from "../assets/images/client/testimonial-4.jpg";
import testimonialImg5 from "../assets/images/client/testimonial-5.jpg";
import testimonialImg6 from "../assets/images/client/testimonial-6.jpg";
import testimonialImg7 from "../assets/images/client/testimonial-7.jpg";
import testimonialImg8 from "../assets/images/client/testimonial-8.jpg";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Aklima The standard chunk of Lorem Ipsum used since the
                      1500s is reproduced below for those interested. Sections
                      Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Aklima </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Fatima Asrafy standard chunk of Lorem Ipsum used since the
                      1500s is reproduced below for those interested. Sections
                      Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES,
                      INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Jannat Tumpa The standard chunk of Lorem Ipsum used since
                      the 1500s is reproduced below for those interested.
                      Sections Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Jannat Tumpa </span> - COO, AMERIMAR ENTERPRISES,
                      INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections Bonorum et
                      Malorum original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      John Doe The standard chunk of Lorem Ipsum used since the
                      1500s is reproduced below for those interested. Sections
                      Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>John Doe </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Chunk of Lorem Ipsum used since the 1500s is reproduced
                      below for those interested. Sections Bonorum et Malorum
                      original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Amar Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections Bonorum et
                      Malorum original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Fatima Ma </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Lorem Ipsum used since the 1500s is reproduced below for
                      those interested. Sections Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES,
                      INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg1} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg2} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg3} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg4} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg5} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg6} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg7} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg8} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
