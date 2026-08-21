import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SkillCard } from "@/components/features/learning/SkillCard";

const skills = [
  {
    name: "HTML",
    label: "Learning",
    icon: <FaHtml5 />,
    iconClassName: "text-[#e34f26]",
    barClassName: "bg-[#e34f26]",
  },
  {
    name: "CSS",
    label: "Learning",
    icon: <FaCss3Alt />,
    iconClassName: "text-[#1572b6]",
    barClassName: "bg-[#1572b6]",
  },
  {
    name: "JavaScript",
    label: "Learning",
    icon: <FaJs />,
    iconClassName: "text-[#f7df1e]",
    barClassName: "bg-[#f7df1e]",
  },
  {
    name: "React",
    label: "Learning",
    icon: <FaReact />,
    iconClassName: "text-[#61dafb]",
    barClassName: "bg-[#61dafb]",
  },
  {
    name: "Git & GitHub",
    label: "Learning",
    icon: <FaGitAlt />,
    iconClassName: "text-[#f05032]",
    barClassName: "bg-[#f05032]",
  },
  {
    name: "Figma",
    label: "Learning",
    icon: <FaFigma />,
    iconClassName: "text-[#a259ff]",
    barClassName: "bg-[#a259ff]",
  },
];

export function LearningSection() {
  return (
    <section
      id="learning"
      className="scroll-mt-20 bg-bg px-12 py-[100px] max-md:px-6 max-md:py-[70px]"
    >
      <SectionTitle align="center">What I'm Learning</SectionTitle>
      <div className="mx-auto grid max-w-[1200px] grid-cols-6 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            label={skill.label}
            icon={skill.icon}
            iconClassName={skill.iconClassName}
            barClassName={skill.barClassName}
          />
        ))}
      </div>
    </section>
  );
}
