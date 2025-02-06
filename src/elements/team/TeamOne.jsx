import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import teamImg1 from "../../assets/images/team/team-01.jpg";
import teamImg2 from "../../assets/images/team/team-02.jpg";
import teamImg3 from "../../assets/images/team/team-03.jpg";
import teamImg4 from "../../assets/images/team/team-06.jpg";
import teamImg5 from "../../assets/images/team/team-05.jpg";
import teamImg6 from "../../assets/images/team/team-12.jpg";

let TeamContent = [
  {
    images: teamImg1,
    title: "Jone Due",
    designation: "Sr. Web Developer",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    images: teamImg2,
    title: "Fatima Asrafi",
    designation: "Front-end Engineer",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    images: teamImg3,
    title: "Al-Amin Bali",
    designation: "Sr. Graphic Designer",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    images: teamImg4,
    title: "Jone Due",
    designation: "Sr. Web Developer",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    images: teamImg5,
    title: "Fatima Asrafi",
    designation: "Front-end Engineer",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    images: teamImg6,
    title: "Al-Amin Bali",
    designation: "Sr. Graphic Designer",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
];

class TeamOne extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {TeamContent.map((value, i) => (
          <div className={`${column}`} key={i}>
            <div className="team">
              <div className="thumbnail">
                <img src={value.images} alt="Blog Images" />
              </div>
              <div className="content">
                <h4 className="title">{value.title}</h4>
                <p className="designation">{value.designation}</p>
              </div>
              <ul className="social-icon">
                {value.socialNetwork.map((social, index) => (
                  <li key={index}>
                    <a href={`${social.url}`}>{social.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default TeamOne;
