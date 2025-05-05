import {
  angular,
  chat_bg,
  chat_pc,
  chat_tablet,
  express,
  figma,
  git,
  github2,
  icc_bg,
  icc_pc,
  icc_tablet,
  intellisys,
  workmate,
  linkedin,
  mongodb,
  nestjs,
  nextjs,
  photoshop,
  postgres,
  reactjs,
  react_query,
  redux,
  music_bg,
  music_pc,
  music_tablet,
  tailwind,
  trello,
  typeorm,
  typescript,
  visual_studio,
  aws,
  pwa,
  python,
  github,
  gitlab,
} from "../assets";

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
    icon: github2,
    name: "GitHub",
  },
  {
    url: "https://www.linkedin.com/in/oscar-mart%C3%ADnez-65a413212/",
    icon: linkedin,
    name: "LinkedIn",
  },
];

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
      {
        name: "PWA",
        icon: pwa,
      },
      {
        name: "React Native",
        icon: reactjs,
      },
    ],
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
      {
        name: "Python",
        icon: python,
      },
    ],
  },
  {
    name: "Tools",
    list: [
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "Phothoshop",
        icon: photoshop,
      },
      {
        name: "VS Code",
        icon: visual_studio,
      },
      {
        name: "Trello",
        icon: trello,
      },
      {
        name: "AWS",
        icon: aws,
      },
      {
        name: "Github",
        icon: github,
      },
      {
        name: "Gitlab",
        icon: gitlab,
      },
    ],
  },
];

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
      "Refactorizar aplicaciones para mejorar su escalabilidad y performance.",
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
  {
    title: "Senior Fullstack Developer",
    company_name: "Workmate",
    icon: workmate,
    iconBg: "#383E56",
    date: "Julio 2023 - Actualidad",
    points: [
      "Desarrollo de sistema de acreditación con miles de trabajadores con alta concurrencia.",
      "Reduje tiempos de carga de minutos a segundos.",
      "Refactorizar sistema ya hecho en un 60% para adaptarlo a requerimientos del cliente.",
      "Analisis y solución de problemas de arquitectura y lógica.",
      "Manejo de Lambda en AWS.",
      "Obtener reportes de base de datos con queries complejas.",
    ],
  },
];

export interface Project {
  name: string;
  images: {tablet: string, pc: string, bg: string};
  description: string;
  stack: string[];
  github_links: string[];
  demo_link: string;
  nota: string;
}

export const projects: Project[] = [
  {
    name: "Intellisys Coding Challenge",
    images: {
      tablet: icc_tablet,
      pc: icc_pc,
      bg: icc_bg,
    },
    description: `Página que contiene la información de un concurso de programación competitiva extraida mediante web scrapping, 
    el cual tiene una landing page con la información necesaria para participar, los resultados 
    de cada evento, lista de todos los participantes, calendario para ver y guardar cada evento, 
    y un area de administración.`,
    stack: ["NextJS", "NestJS", "PostgresQL", "TypeORM", "React Query", "Material UI", "Typescript"],
    github_links: [],
    demo_link: "https://icc.intellisys.com.do/",
    nota: "El link a github no está disponible porque es un repositorio privado."
  },
  {
    name: "Reproductor de audio",
    images: {
      tablet: music_tablet,
      pc: music_pc,
      bg: music_bg,
    },
    description: "Aplicación móvil para reproducir audio",
    stack: ["React Native", "Typescript"],
    github_links: [],
    demo_link: "https://play.google.com/store/apps/details?id=com.om12002.musicplayer&hl=es_DO&gl=US",
    nota: "Solo está disponible para Android"
  },
  {
    name: "Chat convencional",
    images: {
      tablet: chat_tablet,
      pc: chat_pc,
      bg: chat_bg
    },
    description: "Chat convencional con características como de mandar y recibir solicitudes, crear grupos y busqueda de mensajes",
    stack: ["Angular 12", "Websocket", "ExpressJS", "Cloudinary", "MongoDB"],
    github_links: ["https://github.com/oscar120020/Angular-chat", "https://github.com/oscar120020/chat-server"],
    demo_link: "https://angular-chat-xi.vercel.app/",
    nota: `La primara vez que ingreses a la url de la demo va a tardar un poco en responder, 
    ya que estoy usando render como hosting gratuito y éste suspende la app si no se está usando. 
    Después del primer reenderizado todo funciona como corresponde.`
  },
];
