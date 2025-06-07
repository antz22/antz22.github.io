import SectionHeader from "../section-header";
import Picture from "../../assets/images/picture.png";
import { motion } from "motion/react";
import "../../assets/css/about.css";

function About() {
  return (
    <div className="about">
      <SectionHeader title="About" />
      <motion.div className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <div className="about-text">
          <p>
            Hello! My name is <span>Anthony</span> and I love using technology to solve
            meaningful problems. I started coding in early 2021, beginning with 
            <span> web development</span> using HTML, CSS, <span>Django</span>, and
            Javascript.
          </p>

          <p>
            As I explored further, I dove into <span>app development</span> with
            <span> Flutter</span>, <span>Vue.js</span> and <span>React.js</span>. 
            Along the way, I expanded my interests to AI and ML research and applied 
            my skills in hackathons, resulting in 8+ hackathon wins and a co-authored
            paper on compost classification using deep learning, published in 
            <span> IEEE</span>.
          </p>

          <p>
            More recently, I’ve interned as a <span>software engineer</span> at
            <span> Predigle</span>, where I built machine learning pipelines and deployed
            production tools using <span>Docker</span>, <span>AWS</span>, and <span>GCP</span>.
          </p>

          <p>
            In the future, I hope to continue using technology to <span>innovate </span>
            toward our generation’s most pressing challenges—from sustainability to
            healthcare and <span>beyond</span>.
          </p>
        </div>
        <div className="picture-container">
          <img id="picture" src={Picture} alt="Anthony"></img>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
