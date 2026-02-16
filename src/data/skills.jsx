import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiRedux, SiTypescript } from "react-icons/si";

export const skills = [
  { id: 1, name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { id: 2, name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { id: 3, name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { id: 4, name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { id: 5, name: "React", icon: <FaReact />, color: "#61DAFB" },
  { id: 6, name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { id: 7, name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { id: 8, name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { id: 9, name: "Vite", icon: <SiVite />, color: "#646CFF" },
];
