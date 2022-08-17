import "../../assets/css/skills.css";
import SectionHeader from "../section-header";

import MobileDev from "../../assets/icons/mobile-dev.svg";
import AI from "../../assets/icons/ai.svg";
import WebDev from "../../assets/icons/web-dev.svg";
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
        <p className="skillbar-lang">{props.desc}</p>
      </div>
    </div>
  );
}

function Skills() {
  const langs = [
    {
      name: "Python",
      desc: "Tensorflow, Keras, PyTorch, Django-rest-framework, Pandas, Numpy, Matplotlib, Plotly.",
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
      name: "HTML / CSS",
      desc: "Designed, built, and deployed websites with responsive design and clean UI.",
    },
    {
      name: "C++",
      desc: "Competed in competitive programming competitions, using C++ as my main language.",
    },
    {
      name: "Java",
      desc: "Learning algorithms and data structures in Java and taking the AP CS A course.",
    },
  ];

  return (
    <div id="skills">
      <SectionHeader
        title="Skills"
        aos="fade-up"
        offset="20px"
        duration="1000"
      />

      <div className="container">
        <div className="skills-container">
          <Skill
            skill="Cross-Platform Mobile App Development"
            src={MobileDev}
          />
          <Skill skill="Machine Learning & Artifical Intelligence" src={AI} />
          <Skill skill="Full-Stack Web Programming" src={WebDev} />
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
