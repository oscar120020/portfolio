import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experiance, experiences } from "../constants";

const ExperienceCard = ({ experience }: {experience: Experiance}) => {
  return (
    <VerticalTimelineElement
      // className="vertical-timeline-element--work"
      contentStyle={{ background: "#1d2323", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={experience.icon}
            alt={experience.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-white-200 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc space-y-2 ml-5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="w-full min-h-screen">
      <motion.div variants={textVariant(0.05)} className="flex justify-center">
        <h1 className="font-bold text-[50px] text-center">Experiencia laboral</h1>
      </motion.div>
      <div className="mt-14 flex flex-col">
        <VerticalTimeline>
          {
            experiences.map(experience => (
              <ExperienceCard key={experience.title} experience={experience} />
            ))
          }
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
