import "../../assets/css/awards.css";
import SectionHeader from "../section-header";

function Award(props) {
  return (
    <div className="award">
      <h3 className="award-title">{props.title}</h3>
      <p className="award-issuer">{props.issuer}</p>
      <p className="award-date">{props.date}</p>

      <p className="award-blurb">{props.blurb}</p>
    </div>
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
      title: "Best Hardware Hack",
      issuer: "PantherHacks",
      date: "May 2022",
      blurb:
        "Awarded Best Hardware Hack against over 350 competitors. Created Hygenie, a smart public safety system that uses computer vision and arduino components to enforce hygienic hand-washing procedures.",
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
        "Won 2nd Place Overall at HackPHS, an MLH hackathon with over 150 participants. Created Rello, an inexpensive motorcycle safety system implemented through a machine learning algorithm and user-friendly web interface.",
    },
    {
      title: "Best High School Visualization",
      issuer: "Vizathon 2021",
      date: "Aug 2021",
      blurb:
        "Awarded best high school award for the Harvard Coronavirus Visualization Team's Vizathon 2021. Mapped global trends in mental health.",
    },
  ];
  return (
    <div id="awards">
      <SectionHeader title="Awards" />

      <div className="container">
        {awards.map(({ title, issuer, date, blurb }, index) => (
          <Award title={title} issuer={issuer} date={date} blurb={blurb} />
        ))}
      </div>
    </div>
  );
}

export default Awards;
