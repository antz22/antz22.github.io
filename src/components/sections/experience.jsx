import "../../assets/css/experience.css";
import SectionHeader from "../section-header";
import Chevron from "../../assets/icons/chevron.svg";
import Stack from "../../assets/icons/stack.svg";

import SoftwareEngineer from "../../assets/icons/software-engineer.svg";
import MLIntern from "../../assets/icons/ml-intern.svg";
import DevIntern from "../../assets/icons/dev-intern.svg";
import BoardMember from "../../assets/icons/board-member.svg";

import { motion } from "motion/react";

function ExperienceCard(props) {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="experience-img">
        <img src={props.img} alt="Icon" />
      </div>
      <div className="experience-text">
        <h3 className="experience-title">{props.title}</h3>
        <p className="experience-company">{props.company}</p>
        <p className="experience-date">{props.date}</p>

        {props.pts.map((pt) => (
          <div className="experience-pt">
            <img className="chevron" src={Chevron} alt="Chevron" />
            <p>{pt}</p>
          </div>
        ))}

        {props.link === true &&
          <div className="experience-pt">
            <img className="chevron" src={Chevron} alt="Chevron" />
            <p>Click here to see the research report I wrote: <a href="/report.pdf">LLP Research Report</a></p>
          </div>
        }

        <div className="experience-pt">
          <img className="stack" src={Stack} alt="Stack" />
          <p>{props.stack}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Predigle",
      date: "May 2024 - Aug 2024",
      img: SoftwareEngineer,
      pts: [
        "Developed neural network and random forest models for classifying insurance claim overpayment reasons. Using 400,000+ data points, performed data cleaning, feature engineering, and model training to achieve 97% accuracy. In first batch, successfully classified $250,000+ worth of new insurance overpayments.",
        "Created end-to-end pipeline for automatic classification of refund reason for unlabeled scanned insurance documents, using Optical Character Recognition (OCR) and machine learning. Allowed client to tap into 150,000+ additional data points for insurance claim overpayment model training.",
        "Developed production software to perform segmentation on 100k+ of client’s patients. Uses technographic data-driven models to identify tech-inclined patient cohorts for increasing digital payment adoption.",
        "Performed containerization of software using Docker, AWS, and GCP to deploy Predigle’s software solutions in client environments."
      ],
      link: false,
      stack:
        "Used Tensorflow to develop the neural network, scikit-learn to develop the Random Forest model, Pandas and Numpy for data-related modeling, Django to host web applications, and AWS + GCP + Docker to containerize software.",
    },
    {
      title: "Software Engineer Intern",
      company: "Predigle",
      date: "May 2023 - Aug 2023",
      img: SoftwareEngineer,
      pts: [
        "Created first prototype of Predigle Quest, a Project Delivery Accelerator app developed using Atlassian Forge that allows teams to perform project initiation and agile execution in Jira. Originally developed for billion+ dollar evaluated client and later monetized as an official Predigle software product.",
        "Developed mobile app to allow users to interact with 3-D avatar for increasing engagement with physical therapy exercises through gamification process."
      ],
      link: false,
      stack:
        "Used Flutter and Three.js to build the 3D avatar app, and used Atlassian Forge's development toolkit to develop the extension, including Jira's Rest API and React.js.",
    },
    {
      title: "Machine Learning Research Intern",
      company: "Princeton University ECE Department",
      date: "Jun 2022 - Aug 2022",
      img: MLIntern,
      pts: [
        "Worked on using deep learning to model power magnetic core loss.",
        "Used the Fast Fourier Transform to develop a novel neural network for time series forecasting, utilizing <20% parameters than LSTM networks with <15% training time and equal performance.",
        "Analyzed data down sampling methods for frequency and peak flux density to assess the relative significance of different variables in predicting core loss and to reduce the parameter search space by ~20%.",
      ],
      link: true,
      stack:
        "Used Tensorflow, Keras, PyTorch, Pandas, Numpy, Matplotlib, Scipy, and Scikit-learn.",
    },
    {
      title: "Software Developer Intern",
      company: "The Writing Institute of Princeton",
      date: "Jun 2021 - Aug 2021",
      img: DevIntern,
      pts: [
        "Developed scripts to search the web for electronic books and separately obtain their metadata.",
        "Automated the process with headless web scraper drivers from Python web scraping libraries.",
      ],
      link: false,
      stack:
        "Used Python for the automation scripts and the Selenium Python library for webscraping the book data.",
    },
    {
      title: "President, Lead Organizer",
      company: "Montgomery Computer Science Club",
      date: "Jun 2021 - Jun 2022",
      img: BoardMember,
      pts: [
        "Increased meeting attendance by 400% with new meeting structures and teaching methods",
        "Hosted 4 workshops for varying levels of background knowledge, including introductory Python and algorithmic programming.",
        "Organized first ever hybrid hackathon, MontyHacks V, which attracted over 150 participants from over 30 different schools.",
        "Led team of 20+ members of club to obtain sponsorships and extend outreach for marketing the MontyHacks V and MontyHacks VI events.",
      ],
      link: false,
      stack:
        "Taught and used beginner and intermediate Python concepts, algorithmic programming, and game development.",
    },
  ];

  return (
    <div className="experience">
      <SectionHeader
        title="Experience"
        aos="fade-right"
        offset="20px"
        duration="1000"
      />

      <div className="container">
        {experiences.map(({ title, company, date, img, pts, link, stack }) => (
          <ExperienceCard
            title={title}
            company={company}
            date={date}
            img={img}
            pts={pts}
            link={link}
            stack={stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
