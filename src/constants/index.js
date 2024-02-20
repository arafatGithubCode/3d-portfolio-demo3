import { v4 as uuidv4 } from "uuid";

import {
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
  bootstrap,
  nodejs,
  mongodb,
  steadfast,
  mern,
  figma,
  framerMotion,
  carrent,
  jobit,
  threejs,
  mobile,
  express,
  firebase,
  github,
  vsCode,
  postman,
  photoshop,
  insomenia,
  word,
  excel,
  favicon,
} from "../assets";

const bio = {
  name: "Arafat",
  roles: [
    "Frontend Web Developer",
    "MERN Stack Developer",
    "UI Designer",
    "Programmer",
  ],
  description:
    "I develop web applications, user interfaces and 3D visuals. I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/arafatGithubCode",
  resume:
    "https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/arafat-hossain-033a18282/",
  twitter: "",
  insta: "",
  facebook: "https://www.facebook.com/profile.php?id=100067866734531",
  profileImg: favicon,
};

const navLinks = [
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
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    title: "Frontend",
    frontend: [
      {
        name: "React Js",
        icon: reactjs,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Framer Motion",
        icon: framerMotion,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
      {
        name: "EJS",
        icon: "https://miro.medium.com/v2/resize:fit:1278/1*i-YOI4nMBnyPfjSulLxDLA.png",
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
    ],
  },
  {
    title: "Backend",
    backend: [
      {
        name: "Node Js",
        icon: nodejs,
      },
      {
        name: "Express Js",
        icon: express,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
    ],
  },
  {
    title: "Others",
    others: [
      {
        name: "Git",
        icon: github,
      },
      {
        name: "GitHub",
        icon: github,
      },
      {
        name: "Netlify",
        icon: "https://w7.pngwing.com/pngs/600/484/png-transparent-netlify-static-web-page-gulp-js-github-github-blue-angle-logo-thumbnail.png",
      },
      {
        name: "VS Code",
        icon: vsCode,
      },
      {
        name: "Postman",
        icon: postman,
      },
      {
        name: "Insomnia",
        icon: insomenia,
      },
      {
        name: "Adobe Photoshop",
        icon: photoshop,
      },
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "Word",
        icon: word,
      },
      {
        name: "Excel",
        icon: excel,
      },
    ],
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Steadfast Courier Limited",
    icon: steadfast,
    iconBg: "#383E56",
    date: "May 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "MERN",
    icon: mern,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, Express.js, MongoDB, and other related technologies.",
      `Implementing form authentication and validation using libraries like Express.js's "express-validator" or "JOI" along with frontend frameworks like Formik to ensure secure data submission and streamline user interactions.`,
      "Fetching data from servers using tools like fetch and axios.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Creating reusable components and implementing them to design realistic, user-friendly UIs with React and its helpful packages.",
    ],
  },
  {
    title: "Fronted Development",
    company_name: "React",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Developing and maintaining responsive web applications using React.js, Tailwind CSS, Framer Motion, HTML, CSS, and other related technologies.",
      "Managed the development of several projects, including various aspects of application design and functionality, such as a blog app, real estate app, expense tracker, and e-commerce app.",
    ],
  },
];

const projects = [
  {
    id: uuidv4(),
    name: "MERN",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    category: "mern",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    id: uuidv4(),
    name: "React",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    category: "react",
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    id: uuidv4(),
    name: "Raw CSS & JS",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    category: "rew css & js",
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, bio, navLinks };
