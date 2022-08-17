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
        "Worked on changing the world, one potato at a time. Ate many potato fries.",
        "Worked on changing the world, one potato at a time. Ate many potato fries.",
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
        "Worked on changing the world, one potato at a time. Ate many potato fries.",
        "Worked on changing the world, one potato at a time. Ate many potato fries.",
      ],
      stack:
        "Used Tensorflow, Keras, PyTorch, Pandas, Numpy, Matplotlib, Scipy, and Scikit-learn.",
    },
    {
      title: "Board Member, Lead Organizer",
      company: "Montgomery Computer Science Club",
      date: "Jun 2021 - Present",
      img: BoardMember,
      pts: [
        "Worked on changing the world, one potato at a time. Ate many potato fries.",
        "Worked on changing the world, one potato at a time. Ate many potato fries.",
      ],
      stack:
        "Used Tensorflow, Keras, PyTorch, Pandas, Numpy, Matplotlib, Scipy, and Scikit-learn.",
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
