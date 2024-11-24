import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            Hey&nbsp;,
            <span style={{ fontSize: "25px" }} className="customcol">
              {" "}
              I'm SATHISH
            </span>
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Got big ideas? I’ve got the skills to match.
            <br /> Let’s make it happen—just hire me!
            <br/>
            <br /> Your project’s success story starts with me!
          </p>
        </div>
        <br/>
        <br/>
        <br/>
        <Link  to="Contact">
      <button className="btn btn-primary">
        Don’t overthink. Let’s get to work!
      </button>
    </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
