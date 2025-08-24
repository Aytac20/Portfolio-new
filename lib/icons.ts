import {
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiExpress,
  SiNextdotjs,
  SiPostman,
  SiReactbootstrap,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
type IconItem = {
  name: string;
  icon: IconType;
};

export const icons: IconItem[] = [
  { name: "Github", icon: FaGitAlt },
  {
    name: "JavaScript",
    icon: FaJsSquare,
  },
  { name: "TypeScript", icon: SiTypescript },

  { name: "CSS", icon: IoLogoCss3 },

  { name: "HTML", icon: FaHtml5 },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Redux", icon: SiRedux },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "Supabase", icon: RiSupabaseFill },
  { name: "MongoDB", icon: BiLogoMongodb },
  { name: "Express", icon: SiExpress },
  { name: "Postman", icon: SiPostman },
  { name: "React Query", icon: SiReactquery },
  { name: "NodeJS", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "React Router", icon: SiReactrouter },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Bootstrap", icon: SiReactbootstrap },
];
