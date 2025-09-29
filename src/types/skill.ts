import type  {Skill}  from "../data/skills.ts";
import{
  SiRuby,
  SiRubyonrails,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";


export const LANGS: Skill[] = [
  { name: "Ruby", Icon: SiRuby, color: "#CC342D", href: "https://www.ruby-lang.org/" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", href: "https://www.typescriptlang.org/" },
  { name: "python", Icon: SiPython, color: "#3776AB", href: "https://www.python.org/" },
];

export const FW: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB", href: "https://react.dev/" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000", href: "https://nextjs.org/" },
  { name: "Ruby on Rails", Icon: SiRubyonrails, color: "#CC0000", href: "https://rubyonrails.org/" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", href: "https://tailwindcss.com/" },
];

export const INFRA: Skill[] = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", href: "https://www.postgresql.org/" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", href: "https://www.docker.com/" },
];

export const TOOLS: Skill[] = [
  { name: "Git", Icon: SiGit, color: "#F05032", href: "https://git-scm.com/"},
  { name: "GitHub", Icon: SiGithub, color: "#181717", href: "https://github.com/" },
];