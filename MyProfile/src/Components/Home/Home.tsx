import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaUser } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1>
          Hi! I Am <span className="highlight-name">Kenneth!</span>
        </h1>
        <p className="home-subtitle">
          <span className="highlight-aspiring">Aspiring</span> Web Developer
        </p>
        <p className="home-description">
          This is my very first portfolio project. I'm currently learning web
          development using React, and I'm excited to build amazing things in
          the future!
        </p>
        <div className="home-buttons">
          <a href="#about" className="btn btn-primary">
            <FaUser /> About Me
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FaEnvelope /> Contact Me
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/kennethimperial"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kennethimperial2005@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/kennethimperial/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/kennethimperial"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
