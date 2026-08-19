import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import "./Learning.css";

const skills = [
  { name: "HTML", label: "Learning", icon: <FaHtml5 />, color: "html" },
  { name: "CSS", label: "Learning", icon: <FaCss3Alt />, color: "css" },
  { name: "JavaScript", label: "Learning", icon: <FaJs />, color: "js" },
  { name: "React", label: "Learning", icon: <FaReact />, color: "react" },
  { name: "Git & GitHub", label: "Learning", icon: <FaGitAlt />, color: "git" },
  { name: "Figma", label: "Learning", icon: <FaFigma />, color: "figma" },
];

function SkillCard({
  name,
  label,
  icon,
  color,
}: {
  name: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className={`skill-card skill-card--${color}`}>
      <div className="skill-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{label}</p>
    </div>
  );
}

function Learning() {
  return (
    <section className="learning" id="learning">
      <h2 className="section-title section-title--center">What I'm Learning</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            label={skill.label}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Learning;
