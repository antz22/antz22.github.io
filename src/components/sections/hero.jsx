import "../../assets/css/hero.css";

function Hero() {
  return (
    <div id="hero">
      <p>Hi! My name is</p>
      <h1>Anthony Zhai.</h1>
      <h2>I build tech to make a difference.</h2>

      <p>
        I’m a high school senior located in New Jersey who is interested in
        using technology to benefit humanity. I love building mobile and web
        apps and conducting machine learning research.
      </p>

      <div className="github-cta">
        <p>Check out my Github!</p>
      </div>
    </div>
  );
}

export default Hero;
