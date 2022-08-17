import "../../assets/css/footer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Email from "../../assets/icons/mail.svg";
import Github from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import StackOverflow from "../../assets/icons/stackoverflow.svg";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="footer">
      <div className="container">
        <h2
          className="footer-heading"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Feel free to contact me below!
        </h2>

        <div className="footer-bottom">
          <div className="socials">
            <a href="mailto:anthonyznj@gmail.com">
              <img id="email" src={Email} alt="Email" />
            </a>
            <a href="https://github.com/antzz">
              <img id="github" src={Github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-zhai-275182210/">
              <img id="linkedin" src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/anthny.z/">
              <img id="instagram" src={Instagram} alt="Instagram" />
            </a>
            <a href="https://stackoverflow.com/users/19739293/anthony">
              <img id="stackoverflow" src={StackOverflow} alt="StackOverflow" />
            </a>
          </div>

          <p className="footer-mark">Designed and built by Anthony Zhai</p>

          <p className="footer-year">
            <span>2022</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
