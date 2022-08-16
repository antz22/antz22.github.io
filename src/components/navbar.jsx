import pfp from "../assets/images/profile-pic.jpg";
import "../assets/css/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <a href="/">
            <img id="navbar-pfp" src={pfp} alt="Pfp"></img>
          </a>
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
