import "../../assets/css/hero.css";

import { motion } from "motion/react";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="content-container">
          <motion.p className="greeting"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>Hi! My name is</motion.p>
          <motion.h1 className="name"
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.5, delay: 0.3}}>Anthony Zhai.</motion.h1>
          <motion.h2 className="hero-sentence"
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.5, delay: 0.4}}>I build tech to make a difference.</motion.h2>

          <motion.p className="desc"
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.5, delay: 0.5}}>
            I'm a student at Princeton University studying Mathematics and Computer Science with a 
            passion for machine learning and full-stack development.
            I love building tools that apply research and engineering to real-world challenges.
          </motion.p>

          <motion.a href="https://github.com/antz22"
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.5, delay: 0.9}}>
            <div className="github-cta">Check out my Github!</div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
