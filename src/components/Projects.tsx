import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <div className="w-full min-h-screen">
      <motion.div variants={textVariant(0.2)}>
        <h1 className="font-bold text-[50px] text-center">Projectos</h1>
        <p className="font-medium text-white-200 max-w-4xl">
          Soy Desarrollador de Software, más enfocado al desarrollo web con
          conocimientos tanto en Frontend como en Backend, pero más
          especializado en Frontend. Tengo la capacidad de encontrar soluciones
          a los problemas. Soy una persona muy curiosa, por lo que siempre estoy
          aprendiendo las tecnologías que hay en el mercado y también las que me
          llaman la atención.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
