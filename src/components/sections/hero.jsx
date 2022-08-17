import "../../assets/css/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <p className="greeting">Hi! My name is</p>
        <h1 className="name">Anthony Zhai.</h1>
        <h2 className="hero-sentence">I build tech to make a difference.</h2>

        <p className="desc">
          I’m a high school senior located in New Jersey who is interested in
          using technology to benefit humanity. I love building mobile and web
          apps and conducting machine learning research.
        </p>

        <a href="https://github.com/antz22">
          <div className="github-cta">Check out my Github!</div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
