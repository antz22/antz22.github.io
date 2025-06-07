import "../../assets/css/skills.css";
import SectionHeader from "../section-header";

import MobileDev from "../../assets/icons/mobile-dev.svg";
import AI from "../../assets/icons/ai.svg";
import WebDev from "../../assets/icons/web-dev.svg";

import { motion } from "motion/react";

function Skill(props) {
  return (
    <motion.div className="skill" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="skill-icon">
        <img className="icon" src={props.src} alt="icon" />
      </div>
      <h3 className="skill-name">{props.skill}</h3>
    </motion.div>
  );
}

function SkillBar(props) {
  return (
    <motion.div className="skillbar"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}>
      <div className="skillbar-name">
        <h4>{props.name}</h4>
      </div>
      <div className="skillbar-bar">
        <p className="skillbar-lang">{props.desc}</p>
      </div>
    </motion.div>
  );
}

function Skills() {
  const langs = [
    {
      name: "Python",
      desc: "Tensorflow, Keras, PyTorch, Django-rest-framework, Pandas, Numpy, Matplotlib, Plotly.",
    },
    {
      name: "HTML / CSS",
      desc: "Designed, built, and deployed websites from scratch with clean code, responsive design, and aesthetic UI.",
    },
    {
      name: "Dart",
      desc: "Used Flutter to develop multiple robust and production-ready mobile applications. Used Firebase and Django as backend servers.",
    },
    {
      name: "Javascript",
      desc: "Created multiple interactive web applications that deal with user data using React.js and Vue.js.",
    },
    {
      name: "Java",
      desc: "Created several programming projects dealing with graphics and data processing, as well as completing coursework in Java.",
    },
    {
      name: "C++",
      desc: "Competed in multiple competitive programming competitions, using C++ as my main programming language.",
    },
  ];

  return (
    <div id="skills">
      <SectionHeader title="Skills"/>

      <div className="container">
        <div className="skills-container">
          <Skill skill="Machine Learning & Artifical Intelligence" src={AI} />
          <Skill skill="Full-Stack Web Programming" src={WebDev} />
          <Skill
            skill="Cross-Platform Mobile App Development"
            src={MobileDev}
          />
        </div>

        <div className="skillbar-container">
          <div className="skillbar-col">
            {langs.slice(0, 3).map(({ name, desc }) => {
              return <SkillBar name={name} desc={desc} />;
            })}
          </div>

          <div className="skillbar-col">
            {langs.slice(3, 6).map(({ name, desc }) => {
              return <SkillBar name={name} desc={desc} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
