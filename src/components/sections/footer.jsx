import "../../assets/css/footer.css";

import Email from "../../assets/icons/mail.svg";
import Github from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import StackOverflow from "../../assets/icons/stackoverflow.svg";

function Footer() {
  return (
    <div id="footer">
      <h2 className="footer-heading">Feel free to contact me below!</h2>

      <div className="footer-bottom">
        <div className="socials">
          <img id="email" src={Email} alt="Email" />
          <img id="github" src={Github} alt="Github" />
          <img id="linkedin" src={LinkedIn} alt="LinkedIn" />
          <img id="instagram" src={Instagram} alt="Instagram" />
          <img id="stackoverflow" src={StackOverflow} alt="StackOverflow" />
        </div>
      </div>

      <p>Designed and built by Anthony Zhai</p>

      <p id="footer-year">
        <span>2022</span>
      </p>
    </div>
  );
}

export default Footer;
