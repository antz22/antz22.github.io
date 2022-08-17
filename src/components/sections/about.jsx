import SectionHeader from "../section-header";
import Picture from "../../assets/images/picture.png";
import "../../assets/css/about.css";

function About() {
  return (
    <div className="about" data-aos="fade-up">
      <SectionHeader title="About" />
      <div className="container">
        <div className="about-text">
          <p>
            Hello! My name is <span>Anthony</span> and I love to use new
            technology in impactful ways. I began coding back in the beginning
            of 2021 as I started to learn the basics of{" "}
            <span>web programming</span> with HTML, CSS, <span>Django</span>,
            and Javascript.
          </p>

          <p>
            I enjoyed it so much that I continued application development,
            learning <span>Flutter</span> for{" "}
            <span>mobile app development</span> and <span>Vue.js</span> and{" "}
            <span>React.js</span> for <span>frontend web development</span>.
          </p>

          <p>
            Since then, I have also expanded my interests to <span>AI</span> and{" "}
            <span>ML research</span>, conducting novel research on automating
            sustainable practices that has been published in <span>IEEE</span>.
          </p>

          <p>
            In the future, I hope to use technology to <span>innovate</span>{" "}
            towards our generations most pressing issues of climate change,
            colonizing Mars, and <span>beyond</span>.
          </p>
        </div>
        <div className="picture-container">
          <img id="picture" src={Picture} alt="Anthony"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
