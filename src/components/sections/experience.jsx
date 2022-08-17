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
        "Used deep learning to model power magnetic core loss with PyTorch, Tensorflow, Pandas, and Numpy.",
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
        "Developed code for automating the collection of books and their metadata, using Python and Selenium",
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
        "Increased meeting attendance by 300%, hosted 4 workshops, organized first hybrid hackathon ever.",
        "Led team of 20+ members of club in organizing MontyHacks V.",
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
