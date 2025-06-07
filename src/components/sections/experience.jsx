import "../../assets/css/experience.css";
import SectionHeader from "../section-header";
import Chevron from "../../assets/icons/chevron.svg";
import Stack from "../../assets/icons/stack.svg";

import SoftwareEngineer from "../../assets/icons/software-engineer.svg";
import MLIntern from "../../assets/icons/ml-intern.svg";
import DevIntern from "../../assets/icons/dev-intern.svg";

import { motion } from "motion/react";

function ExperienceCard(props) {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}>
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
  const experiences = [    {
      title: "Software Engineer Intern",
      company: "Predigle",
      date: "May 2025 - Present",
      img: SoftwareEngineer,
      pts: [
        "Developing time series forecasting models using Meta’s Robyn and statsmodels to model client revenue as a function of media spend, helping guide budget allocation decisions.",
        "Designing a supply chain optimization system for coordinating truck and barge routes across rural Indonesia, enabling efficient coconut collection from smallholder farms."
      ],
      link: false,
      stack:
        "Using the statsmodels library for building time series models and Google's OR-Tools for modeling supply chain scenarios.",
    },
    {
      title: "Software Engineer Intern",
      company: "Predigle",
      date: "May - Aug 2023, 2024",
      img: DevIntern,
      pts: [
        "Built and deployed machine learning models—including neural networks and random forests—for classifying insurance claim overpayment reasons using 400k+ data points, achieving 97% accuracy and identifying $250k+ in new overpayments.",
        "Designed a segmentation tool for identifying tech-inclined patient cohorts using technographic data, enabling targeted outreach across 100k+ patients.",
        "Created the initial prototype of Predigle Quest, an Atlassian Forge app for agile project execution in Jira, later monetized as a core product for enterprise clients.",
        "Containerized and deployed full-stack applications to client environments using Docker, AWS, and GCP.",
      ],
      link: false,
      stack:
        "Used Tensorflow to develop the neural network, scikit-learn to develop the Random Forest model, Pandas and Numpy for data-related modeling, Django to host web applications, and AWS + GCP + Docker to containerize software.",
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
  ];

  return (
    <div className="experience">
      <SectionHeader title="Experience"/>

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
