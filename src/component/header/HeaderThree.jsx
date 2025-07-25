import React, { Component } from "react";
import { FaTwitter, FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";

import scgLogo from "/logo.svg"; // Updated import path to point to the public directory
import socials from "../../json/socials.json";

const SocialShare = [
  { Social: <FaFacebookF />, link: socials.facebook },
  { Social: <FaLinkedinIn />, link: socials.linkedIn },
  { Social: <FaGithub />, link: socials.github },
  { Social: <FaTwitter />, link: socials.twitter },
];
class HeaderThree extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper")?.classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");
  }

  closeSidebar() {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");
  }

  stickyHeader() {}

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed")?.classList.add("sticky");
      } else {
        document.querySelector(".header--fixed")?.classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            ?.classList.toggle("active");
          this?.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    // Added width and height attributes to the img tag
    const logoUrl = (
      <img src={scgLogo} alt="Digital Agency" width="100" height="100" />
    );

    return (
      <header className={`header-area header-style-two header--fixed ${color}`}>
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo" style={{ cursor: "pointer" }}>
              <a href={this.props.homeLink}>{logoUrl}</a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <ul className="mainmenu">
                <li className="activeClass">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="https://silocitylabs.com/">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`} target="_blank">
                      {val.Social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderThree;
