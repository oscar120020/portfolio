import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectModal } from "./ProjectModal";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const viewProject = (index: number) => {
    setProjectIndex(index)
    handleOpenModal()
  }

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
              key={`${project.name}-${index}`}
              variants={fadeIn("up", "spring", 0.2 + (index/2), 0.5)}
              className="shadow-card2 xs:w-[350px] w-full p-[2px] rounded-md"
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
                  onClick={() => viewProject(index)}
                >
                  Ver más
                </button>
              </div>
            </motion.div>
          ))
        }
      </div>
      {
        openModal && <ProjectModal closeModal={handleCloseModal} project={projects[projectIndex]} />
      }
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
