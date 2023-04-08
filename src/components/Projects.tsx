import { motion } from "framer-motion";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectModal } from "./ProjectModal";

const Projects = () => {
  return (
    <div className="w-full min-h-screen">
      <motion.div variants={textVariant(0.2)}>
        <h1 className="font-bold text-[50px] text-center">Proyectos</h1>
      </motion.div>
      <div
        className="mt-14 flex flex-wrap gap-10 justify-center"
      >
        {
          projects.map((project, index) => (
            <motion.div
              variants={fadeIn("up", "spring", 0.2 + (index/2), 0.5)}
              className="green-blue-gradient xs:w-[350px] w-full p-[2px] rounded-md"
            >
              <div
                className="h-[350px] bg-secondary flex flex-col p-3 rounded-md"
              >
                <div className="h-[80%] rounded-md overflow-hidden">
                  <img src={project.images.bg} alt={project.name} className="object-center w-full h-full" />
                </div>
                <h2 className="text-[18px] mt-2 ">{project.name}</h2>
                <button
                  className="project-button w-full mt-3 p-2 border-[#fff] border-[2px]"
                >
                  Ver más
                </button>
              </div>
            </motion.div>
          ))
        }
      </div>
      <ProjectModal />
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
