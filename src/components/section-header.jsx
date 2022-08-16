import "../assets/css/section-header.css";

function SectionHeader(props) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        <span>{props.title}</span>
      </h2>
    </div>
  );
}

export default SectionHeader;
