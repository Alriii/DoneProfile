import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import "./Contact.css";

const contactLinks = [
  {
    platform: "Email",
    href: "mailto:kennethimperial2005@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    platform: "GitHub",
    href: "https://github.com/Alriii",
    icon: <FaGithub />,
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/kennethimperial/",
    icon: <FaLinkedin />,
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/kennethimperial",
    icon: <FaFacebook />,
  },
];

function Contact() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="contact" id="contact">
      <h2 className="section-title section-title--center">Let's Connect</h2>
      <p className="contact-intro">
        I'm always open to connecting with fellow developers, mentors, and
        anyone interested in web development. Feel free to reach out!
      </p>
      <a
        href="mailto:kennethimperial2005@gmail.com"
        className="contact-cta"
      >
        <FaEnvelope /> Send Me a Message
      </a>
      <div className="contact-cards">
        {contactLinks.map((link) => (
          <a
            key={link.platform}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="contact-card"
          >
            <div className="contact-card-icon">{link.icon}</div>
            <div className="contact-card-info">
              <span className="contact-card-platform">{link.platform}</span>
            </div>
          </a>
        ))}
      </div>
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        type="button"
      >
        <FaArrowUp />
      </button>
    </section>
  );
}

export default Contact;
