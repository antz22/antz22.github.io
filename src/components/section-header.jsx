import "../assets/css/section-header.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SectionHeader(props) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div
      className="section-header"
      data-aos={props.aos}
      data-aos-offset={props.offset}
      data-aos-duration={props.duration}
    >
      <h2 className="section-title">
        <span>{props.title}</span>
      </h2>
    </div>
  );
}

export default SectionHeader;
