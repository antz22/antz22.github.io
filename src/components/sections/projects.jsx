import "../../assets/css/projects.css";
import SectionHeader from "../section-header";

import Github from "../../assets/logos/github.svg";
import Link from "../../assets/icons/link.svg";

import Dart from "../../assets/logos/dart.svg";
import Flutter from "../../assets/logos/flutter.svg";
import Firebase from "../../assets/logos/firebase.svg";
import HTML from "../../assets/logos/html.svg";
import CSS from "../../assets/logos/css.svg";
import Django from "../../assets/logos/django.svg";
import Python from "../../assets/logos/python.svg";
import Selenium from "../../assets/logos/selenium.svg";
import Linux from "../../assets/logos/linux.svg";
import C from "../../assets/logos/c.svg";
import Arch from "../../assets/logos/arch-linux.svg";
import React from "../../assets/logos/react.svg";
import OpenCV from "../../assets/logos/opencv.svg";
import GoogleCloud from "../../assets/logos/googlecloud.svg";

import FlutterGuide from "../../assets/images/flutter-guide.svg";
import ConnectAnon from "../../assets/images/connectanon.png";
import VirtualMouse from "../../assets/images/virtualmouse.png";
import Alertra from "../../assets/images/alertra.png";
import ArchLinux from "../../assets/images/arch-linux.png";

import { motion } from "motion/react";

function Project(props) {
  return (
    <motion.div className="project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="project-card">
        <div className="title-row">
          <h3 className="project-title">{props.title}</h3>
          <a className="project-github" href={props.github}>
            <img className="github" src={Github} alt="Github" />
          </a>
          {props.link !== "" ? (
            <a className="project-link" href={props.link}>
              <img className="link" src={Link} alt="Link" />
            </a>
          ) : null}
        </div>

        <p className="project-blurb">{props.blurb}</p>

        <div className="project-icons">
          {props.icons.map((src) => (
            <img className="project-icon" src={src} alt="Project Icon" />
          ))}
        </div>
      </div>
      <div className="project-img-container">
        <img className="project-img" src={props.img} alt="Project Banner"/>
      </div>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Ultimate Guide to Flutter",
      github: "https://github.com/antz22/ultimate-guide-to-flutter",
      link: "",
      blurb:
        "An open source Github guide for learning Dart, Flutter, and Firebase from the ground up. Over 200 stars on Github with 25 forks.",
      icons: [Dart, Flutter, Firebase],
      img: FlutterGuide,
    },
    {
      title: "ConnectAnon",
      github: "https://github.com/antz22/ConnectAnon",
      link: "https://connect-anonymous.netlify.app/",
      blurb:
        "A chat app built from scratch using Flutter and Firebase. Allows teenagers to safely and anonymously chat with their high school.",
      icons: [Dart, Flutter, Firebase, HTML, CSS],
      img: ConnectAnon,
    },
    {
      title: "VirtualMouse",
      github: "https://github.com/antz22/virtual-mouse",
      link: "",
      blurb:
        "A program that allows users to control their computer or GUI using only hand gestures. Built using Python, OpenCV, and Mediapipe.",
      icons: [Python, OpenCV, GoogleCloud],
      img: VirtualMouse,
    },
    {
      title: "Alertra",
      github: "https://github.com/antz22/Alertra-peddiehacks",
      link: "",
      blurb:
        "A school safety system that allows students and teachers to quickly transmit vital information on school safety alerts.",
      icons: [Dart, Flutter, Django, Python, Selenium],
      img: Alertra,
    },
    {
      title: "Arch Linux",
      github: "https://github.com/antz22/dotfiles",
      link: "",
      blurb:
        "Built a configuration from scratch using Arch Linux  with a heavily customized window manager (dwm) and terminal (st).",
      icons: [Linux, C, Arch],
      img: ArchLinux,
    },
  ];

  return (
    <div className="projects">
      <SectionHeader
        title="Projects"
      />

      <div className="container">
        {projects.map(({ title, github, link, blurb, icons, img }) => (
          <Project
            title={title}
            github={github}
            link={link}
            blurb={blurb}
            icons={icons}
            img={img}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
