import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import team1 from "../assets/images/team/team-01.jpg";
import team2 from "../assets/images/team/team-02.jpg";
import team3 from "../assets/images/team/team-03.jpg";
import team6 from "../assets/images/team/team-06.jpg";
import team5 from "../assets/images/team/team-05.jpg";
import team12 from "../assets/images/team/team-12.jpg";

let TeamContent = [
  {
    images: team1,
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
    images: team2,
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
    images: team3,
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
    images: team6,
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
    images: team5,
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
    images: team12,
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

class Team extends Component {
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
export default Team;
