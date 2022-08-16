import pfp from "../assets/images/profile-pic.jpg";
import menu from "../assets/icons/menu.svg";
import exit from "../assets/icons/exit.svg";
import "../assets/css/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div class="nav-left">
          <a href="/">
            <img id="navbar-pfp" src={pfp} alt="Pfp"></img>
          </a>
        </div>

        <img
          id="mobile-cta"
          class="mobile-menu"
          src={menu}
          alt="Open Navigation"
        />

        <nav>
          <img
            id="mobile-exit"
            class="mobile-menu-exit"
            src={exit}
            alt="Exit Navigation"
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
            <li>
              <a href="/">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
