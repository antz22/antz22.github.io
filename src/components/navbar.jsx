import pfp from "../assets/images/profile-pic.jpg";
import menu from "../assets/icons/menu.svg";
import exit from "../assets/icons/exit.svg";
import "../assets/css/navbar.css";

import { useState } from "react";

function NavBar() {
  const [navClass, setNavClass] = useState("");

  const handleToggle = () => {
    console.log(navClass);
    if (navClass === "") {
      setNavClass("menu-btn");
    } else {
      setNavClass("");
    }
    console.log(navClass);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-left">
          <a href="/">
            <img id="navbar-pfp" src={pfp} alt="Pfp"></img>
          </a>
        </div>

        <img
          id="mobile-cta"
          className="mobile-menu"
          src={menu}
          alt="Open Navigation"
          onClick={handleToggle}
        />

        <nav className={navClass}>
          <img
            id="mobile-exit"
            className="mobile-menu-exit"
            src={exit}
            alt="Exit Navigation"
            onClick={handleToggle}
          />
          <ul className="primary-nav">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#awards">Awards</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <a
              className="resume-cta"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <li>Resume</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
