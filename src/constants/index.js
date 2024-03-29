import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mern stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Master of Computer Applications",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023-2025 | Pursuing",
    points: [
      "Kongu Engineering College",
    ],
  },
  {
    title: "Bachelor of Commerce(Computer Applications)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2020-2023 | Completed",
    points: [
      "A.V.P College of arts and science",
    ],
  },
];


const projects = [
  {
    name: "FitExplorer",
    description:
      "Fitness Exercise Explorer and Tracker, A dynamic fitness platform integrating exercise exploration and progress tracking for optimized workout routines.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon Clone",
    description:
      "Replicating the e-commerce giant's features for a familiar shopping experience",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rock Paper Scissors",
    description:
      "Rock Paper Scissors Challenge: Engaging AI vs. player game testing strategic thinking in the classic battle of Rock, Paper, Scissors.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/pavila-siva/Rock-Paper-Scissor.git",
  },
];

export { services, technologies, experiences, projects };
