import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-glow"></div>
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm Kenneth, an aspiring web developer with a passion for creating
            clean, modern, and user-friendly websites.
          </p>
          <p>
            I enjoy learning how things work and turning ideas into real,
            functional projects. Right now, I'm focused on strengthening my
            skills in front-end development and exploring new technologies.
          </p>
          <p>
            My goal is to become a skilled developer and build projects that
            make an impact.
          </p>
        </div>
        <div className="about-image">
          <img src="/About.png" alt="Desktop setup with galaxy wallpaper" />
        </div>
      </div>
    </section>
  );
}

export default About;
