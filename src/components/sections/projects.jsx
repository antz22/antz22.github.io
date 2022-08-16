import "../../assets/css/projects.css";
import SectionHeader from "../section-header";

import Github from "../../assets/logos/github.svg";

import Dart from "../../assets/logos/dart.svg";
import Flutter from "../../assets/logos/flutter.svg";
import Firebase from "../../assets/logos/firebase.svg";
import HTML from "../../assets/logos/html.svg";
import CSS from "../../assets/logos/css.svg";
import Django from "../../assets/logos/django.svg";
import Python from "../../assets/logos/python.svg";
import Selenium from "../../assets/logos/selenium.svg";
import VueJS from "../../assets/logos/vuejs.svg";
import Linux from "../../assets/logos/linux.svg";
import C from "../../assets/logos/c.svg";
import ArchLinux from "../../assets/logos/arch-linux.svg";

import FlutterGuide from "../../assets/images/flutter-guide.svg";

function Project(props) {
  return (
    <div className="project">
      <div className="project-card">
        <div className="title-row">
          <h4 className="project-title">{props.title}</h4>
          <a className="project-github" href="https://github.com/antz22">
            <img className="github" src={Github} alt="Github" />
          </a>
        </div>

        <p className="project-blurb">{props.blurb}</p>

        <div className="project-icons">
          {props.icons.map((src) => (
            <img className="project-icon" src={src} alt="Project Icon" />
          ))}
        </div>
      </div>
      <img className="project-img" src={props.img} alt="Project Banner" />
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Ultimate Guide to Flutter",
      blurb:
        "An open source Github guide for learning Dart, Flutter, and Firebase from the ground up. Over 200 stars on Github with 25 forks.",
      icons: [Dart, Flutter, Firebase],
      img: FlutterGuide,
    },
    {
      title: "ConnectAnon",
      blurb:
        "A chat app built from scratch using Flutter and Firebase. Allows teenagers to safely and anonymously chat with their high school.",
      icons: [Dart, Flutter, Firebase, HTML, CSS],
      img: FlutterGuide,
    },
    {
      title: "Alertra",
      blurb:
        "A school safety system that allows students and teachers to quickly transmit vital information on school safety alerts.",
      icons: [Dart, Flutter, Django, Python, Selenium],
      img: FlutterGuide,
    },
    {
      title: "Monty CSC",
      blurb:
        "Designed a website for the Montgomery Computer Science Club, including essential information for new members, up-to-date schedules and forms to register.",
      icons: [HTML, CSS],
      img: FlutterGuide,
    },
    {
      title: "MontyHacks",
      blurb:
        "Hosted the first ever hybrid hackathon at Montgomery High School, attracting over 150 participants from over 30 different schools. Designed website with hackathon information, sponsors, and registration forms.",
      icons: [HTML, CSS],
      img: FlutterGuide,
    },
    {
      title: "OneFocus",
      blurb:
        "A productivity app that combines task organization with studying techniques and scheduling features.",
      icons: [VueJS, Django, Python],
      img: FlutterGuide,
    },
    {
      title: "Arch Linux",
      blurb:
        "Built a configuration from scratch using Arch Linux  with a heavily customized window manager (dwm) and terminal (st).",
      icons: [Linux, C, ArchLinux],
      img: FlutterGuide,
    },
  ];

  return (
    <div id="projects">
      <SectionHeader title="Projects" />

      <div className="container">
        {projects.map(({ title, blurb, icons, img }, index) => (
          <Project title={title} blurb={blurb} icons={icons} img={img} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
