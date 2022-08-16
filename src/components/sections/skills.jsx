import "../../assets/css/skills.css";
import SectionHeader from "../section-header";

import MobileDev from "../../assets/icons/mobile-dev.svg";
import AI from "../../assets/icons/ai.svg";
import WebDev from "../../assets/icons/web-dev.svg";

function Skill(props) {
  return (
    <div className="skill">
      <div className="skill-icon">
        <img className="icon" src={props.src} alt="icon" />
        <h3>{props.skill}</h3>
      </div>
    </div>
  );
}

function SkillBar(props) {
  return (
    <div className="skillbar">
      <div className="skillbar-name">
        <h4>{props.name}</h4>
      </div>
      <div className="skillbar-bar">{props.percent}</div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <SectionHeader title="Skills" />

      <Skill skill="Cross-Platform Mobile App Development" src={MobileDev} />
      <Skill skill="Machine Learning & Artifical Intelligence" src={AI} />
      <Skill skill="Full-Stack Web Programming" src={WebDev} />

      <SkillBar name="Python" percent="0.98" />
      <SkillBar name="Dart" percent="0.90" />
      <SkillBar name="Javascript" percent="0.78" />
      <SkillBar name="HTML/CSS" percent="0.68" />
      <SkillBar name="C++" percent="0.55" />
      <SkillBar name="Java" percent="0.45" />
    </div>
  );
}

export default Skills;
