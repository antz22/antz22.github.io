import "../../assets/css/awards.css";
import SectionHeader from "../section-header";

import { motion } from "motion/react";

function Award(props) {
  return (
    <motion.div className="aos-award"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}>
      <div className="award">
        <h3 className="award-title">{props.title}</h3>
        <p className="award-issuer">{props.issuer}</p>
        <p className="award-date">{props.date}</p>
        <p className="award-blurb">{props.blurb}</p>
      </div>
    </motion.div>
  );
}

function Awards() {
  const awards = [
    {
      title: "IEEE Publication",
      issuer: "IEEE Access",
      date: "Aug 2022",
      blurb:
        "Published as co-first author in IEEE Access, a journal with a 3.48 impact factor and 30% acceptance rate. Conducted completely independent research on automating sustainable practices.",
    },
    {
      title: "NASA Earth System Science Award",
      issuer: "NJRSF",
      date: "Mar 2022",
      blurb:
        "1 of 2 award recipients for presenting CGBNet: A Deep Learning Framework for Compost Classification. Used deep learning to help automate the process of composting.",
    },
    {
      title: "Most Innovative Startup Idea",
      issuer: "HackPrinceton",
      date: "Nov 2023",
      blurb:
        "Awarded Most Innovative Startup Idea against hundreds of competitors. Created EduLecture.ai, a voice-generative AI tool that bridges the accessibility gap for remote education.",
    },
    {
      title: "Best Hardware Hack",
      issuer: "PantherHacks",
      date: "May 2022",
      blurb:
        "Awarded Best Hardware Hack against over 350 competitors. Created Hygenie, a public safety system that uses computer vision and arduino to enforce proper hand-washing procedures.",
    },
    {
      title: "2nd Place Overall",
      issuer: "MEGA Hack",
      date: "Apr 2022",
      blurb:
        "Awarded 2nd place overall in a hackathon with over 180 participants. Created Visionary, an app that helps the visually impaired interact with the world through text OCR, object detection, and NLP.",
    },
    {
      title: "2nd Place Overall",
      issuer: "hackPHS",
      date: "Nov 2021",
      blurb:
        "Won 2nd Place Overall at HackPHS, an MLH hackathon with over 150 participants. Created Rello, an inexpensive motorcycle safety system informed by machine learning and computer vision.",
    },
  ];
  return (
    <div className="awards">
      <SectionHeader
        title="Awards"
      />

      <div className="container">
        <div className="award-row">
          {awards.slice(0, 2).map(({ title, issuer, date, blurb }) => (
            <Award title={title} issuer={issuer} date={date} blurb={blurb} />
          ))}
        </div>

        <div className="award-row">
          {awards.slice(2, 4).map(({ title, issuer, date, blurb }) => (
            <Award title={title} issuer={issuer} date={date} blurb={blurb} />
          ))}
        </div>

        <div className="award-row">
          {awards.slice(4, 6).map(({ title, issuer, date, blurb }) => (
            <Award title={title} issuer={issuer} date={date} blurb={blurb} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
