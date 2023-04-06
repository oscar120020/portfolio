import { angular, express, figma, git, github, linkedin, material_ui, mongodb, nestjs, nextjs, photoshop, postgres, reactjs, react_query, redux, tailwind, trello, typeorm, typescript, visual_studio } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "experience",
    title: "Experiencia",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const socialMedia = [
  {
    url: "https://github.com/oscar120020",
    icon: github,
    name: "GitHub"
  },
  {
    url: "https://www.linkedin.com/in/oscar-mart%C3%ADnez-65a413212/",
    icon: linkedin,
    name: "LinkedIn"
  },
]

export const stacks = [
  {
    name: "FrontEnd Stack",
    list: [
      {
        name: "React Js",
        icon: reactjs,
      },
      {
        name: "Next Js",
        icon: nextjs,
      },
      {
        name: "Angular",
        icon: angular,
      },
      {
        name: "React Query",
        icon: react_query,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ]
  },
  {
    name: "BackEnd Stack",
    list: [
      {
        name: "Express Js",
        icon: express,
      },
      {
        name: "Nest Js",
        icon: nestjs,
      },
      {
        name: "Mongo DB",
        icon: mongodb,
      },
      {
        name: "PostgresQL",
        icon: postgres,
      },
      {
        name: "Type ORM",
        icon: typeorm,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
    ]
  },
  {
    name: "Tools",
    list: [
      {
        name: 'Figma',
        icon: figma
      },
      {
        name: 'git',
        icon: git
      },
      {
        name: 'Phothoshop',
        icon: photoshop
      },
      {
        name: 'VS Code',
        icon: visual_studio
      },
      {
        name: 'Trello',
        icon: trello
      },
    ]
  }
]
