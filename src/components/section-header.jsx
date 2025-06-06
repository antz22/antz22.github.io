import "../assets/css/section-header.css";

import { motion } from "motion/react";

function SectionHeader(props) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="section-title">
        <span>{props.title}</span>
      </h2>
    </motion.div>
  );
}

export default SectionHeader;
