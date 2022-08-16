import SectionHeader from "../section-header";
import Picture from "../../assets/images/picture.png";
import "../../assets/css/about.css";

function About() {
  return (
    <div id="about">
      <SectionHeader title="About" />
      <div className="container">
        <p>
          Hello! My name is <span>Anthony</span> and I love to use new
          technology in impactful ways. I began coding back in the beginning of
          2021 as I started to learn the basics of <span>web programming</span>{" "}
          with HTML, CSS, <span>Django</span>, and Javascript.
        </p>

        <p>
          I enjoyed it so much that I continued application development,
          learning <span>Flutter</span> for <span>mobile app development</span>{" "}
          and <span>Vue.js</span> and <span>React.js</span> for{" "}
          <span>frontend web development</span>.
        </p>

        <p>
          Since then, I have also expanded my interests to AI and ML research,
          conducting novel research that has been published in IEEE.
        </p>

        <div className="picture-container">
          <img id="picture" src={Picture} alt="Anthony"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
