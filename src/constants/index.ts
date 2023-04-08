import { angular, express, figma, git, github, intellisys, linkedin, material_ui, mongodb, nestjs, nextjs, photoshop, postgres, reactjs, react_query, redux, tailwind, trello, typeorm, typescript, visual_studio } from "../assets";

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

export interface Experiance {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export const experiences: Experiance[] = [
  {
    title: "Apprentice Developer",
    company_name: "Intellisys D. Corp",
    icon: intellisys,
    iconBg: "#383E56",
    date: "Marzo 2020 - Abril 2021",
    points: [
      "Dar soporte y entrenamiento sobre las aplicaciones creadas para el Covid-19 en la República Dominicana.",
      "Desarrollo de la landing page de la empresa.",
      "Colaborar con developers y product managers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Intellisys D. Corp",
    icon: intellisys,
    iconBg: "#383E56",
    date: "Abril 2021 - Junio 2022",
    points: [
      "Desarrollar la aplicación para generar tu certificado digital en la República dominicana.",
      "Desarrollar aplicación de formularios relacionadas al Covid-19.",
      "Colaborar con diferentes Teams para solucionar errores de seguridad y bugs.",
      "Participar en code review y dar coaching a otros developers.",
      "Refactorizar aplicaciones para mejorar su escalabilidad y performance."
    ],
  },
  {
    title: "Mid Level Developer",
    company_name: "Intellisys D. Corp",
    icon: intellisys,
    iconBg: "#383E56",
    date: "Junio 2022 - Marzo 2023",
    points: [
      "Desarrollar diferentes aplicaciones con código de calidad, tales como landing pages, aplicaciones administrativas.",
      "Trabajar con datos muy importantes como historias clínicas.",
      "Participar en prueba de concepto con un equipo de Google.",
      "Participar en code review y dar coaching a otros developers.",
      "Refactorizar aplicaciones completas en deadline cortos.",
    ],
  },
];