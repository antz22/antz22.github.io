import "../../assets/css/experience.css";
import SectionHeader from "../section-header";
import Chevron from "../../assets/icons/chevron.svg";
import Stack from "../../assets/icons/stack.svg";

import MLIntern from "../../assets/icons/ml-intern.svg";
import DevIntern from "../../assets/icons/dev-intern.svg";
import BoardMember from "../../assets/icons/board-member.svg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ExperienceCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="experience-card"
      data-aos="fade-right"
      data-aos-duration="1000"
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

        <div className="experience-pt">
          <img className="stack" src={Stack} alt="Stack" />
          <p>{props.stack}</p>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
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
      stack:
        "Used Python for the automation scripts and the Selenium Python library for webscraping the book data.",
    },
    {
      title: "Board Member, Lead Organizer",
      company: "Montgomery Computer Science Club",
      date: "Jun 2021 - Present",
      img: BoardMember,
      pts: [
        "Increased meeting attendance by 400% with new meeting structures and teaching methods",
        "Hosted 4 workshops for varying levels of background knowledge, including introductory Python and algorithmic programming.",
        "Organized first ever hybrid hackathon, MontyHacks V, which attracted over 150 participants from over 30 different schools.",
        "Led team of 20+ members of club to obtain sponsorships and extend outreach for marketing the MontyHacks V event.",
      ],
      stack:
        "Taught and used beginner and intermediate Python concepts, algorithmic programming, and game development.",
    },
  ];

  return (
    <div className="experience">
      <SectionHeader title="Experience" />

      <div className="container">
        {experiences.map(({ title, company, date, img, pts, stack }, index) => (
          <ExperienceCard
            title={title}
            company={company}
            date={date}
            img={img}
            pts={pts}
            stack={stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
