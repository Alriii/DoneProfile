export const NAV_LINKS = [
  { label: "Home", path: "/", hash: "home" },
  { label: "About", path: "/about", hash: "about" },
  { label: "Learning", path: "/learning", hash: "learning" },
  { label: "Journey", path: "/journey", hash: "journey" },
  { label: "Contact", path: "/contact", hash: "contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Alriii",
    handle: "github.com/Alriii",
  },
  {
    label: "Email",
    href: "mailto:kennethimperial2005@gmail.com",
    handle: "kennethimperial2005@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kennethimperial/",
    handle: "linkedin.com/in/kennethimperial",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Alriii19",
    handle: "facebook.com/kennethimperial",
  },
] as const;

export const JOURNEY_STEPS = [
  {
    number: "01",
    title: "HTML & CSS",
    description: "Building the foundation of web development.",
  },
  {
    number: "02",
    title: "JavaScript",
    description: "Learning programming basics and DOM manipulation.",
  },
  {
    number: "03",
    title: "React",
    description: "Exploring components, state, props, and modern UI development.",
  },
  {
    number: "04",
    title: "The Future",
    description: "Building real-world projects and growing everyday.",
  },
] as const;
