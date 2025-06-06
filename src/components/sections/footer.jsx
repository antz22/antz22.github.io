import "../../assets/css/footer.css";

import Email from "../../assets/icons/mail.svg";
import Github from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import StackOverflow from "../../assets/icons/stackoverflow.svg";

import { motion } from "motion/react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <motion.h2
          className="footer-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Feel free to contact me below!
        </motion.h2>

        <div className="footer-bottom">
          <div className="socials">
            <a href="mailto:zhai@princeton.edu">
              <img id="email" src={Email} alt="Email" />
            </a>
            <a href="https://github.com/antz22">
              <img id="github" src={Github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-zhai/">
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
            <span>&copy; 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
