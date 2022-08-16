import "../../assets/css/skills.css";
import SectionHeader from "../section-header";

import MobileDev from "../../assets/icons/mobile-dev.svg";
import AI from "../../assets/icons/ai.svg";
import WebDev from "../../assets/icons/web-dev.svg";
import ProgressBar from "../progress-bar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skill(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="skill" data-aos="fade-up" data-aos-duration="1000">
      <div className="skill-icon">
        <img className="icon" src={props.src} alt="icon" />
      </div>
      <h3 className="skill-name">{props.skill}</h3>
    </div>
  );
}

function SkillBar(props) {
  return (
    <div className="skillbar" data-aos="fade-left" data-aos-duration="1000">
      <div className="skillbar-name">
        <h4>{props.name}</h4>
      </div>
      <div className="skillbar-bar">
        <ProgressBar bgcolor="#62E3FF" completed={props.percent} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <SectionHeader title="Skills" />

      <div className="container">
        <Skill skill="Cross-Platform Mobile App Development" src={MobileDev} />
        <Skill skill="Machine Learning & Artifical Intelligence" src={AI} />
        <Skill skill="Full-Stack Web Programming" src={WebDev} />

        <SkillBar name="Python" percent="90" />
        <SkillBar name="Dart" percent="80" />
        <SkillBar name="Javascript" percent="65" />
        <SkillBar name="HTML/CSS" percent="65" />
        <SkillBar name="C++" percent="50" />
        <SkillBar name="Java" percent="35" />
      </div>
    </div>
  );
}

export default Skills;
