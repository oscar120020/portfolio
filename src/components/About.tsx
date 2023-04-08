import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { stacks } from "../constants";

const About = () => {
  return (
    <div className="min-h-screen w-full">
      <motion.div variants={textVariant(0.2)}>
        <h1 className="font-bold text-[50px]">Sobre mi</h1>
        <p className="font-medium text-white-200 max-w-4xl">
          Soy Desarrollador de Software, más enfocado al desarrollo web con
          conocimientos tanto en Frontend como en Backend, pero más
          especializado en Frontend. Tengo la capacidad de encontrar soluciones
          a los problemas. Soy una persona muy curiosa, por lo que siempre estoy
          aprendiendo las tecnologías que hay en el mercado y también las que me
          llaman la atención.
        </p>
      </motion.div>
      <div className="mt-14 flex flex-wrap gap-10 justify-center">
        {
          stacks.map((stack, index) => (
            <Tilt className="xs:w-[350px] w-full" key={stack.name}>
              <motion.div
                variants={fadeIn("", "", 0.2 + (index / 2), 0.5)}
                className="w-full green-blue-gradient p-[2px] rounded-[10px] shadow-card"
              >
                <div className="bg-secondary rounded-[10px] p-5 min-h-[380px]">
                  <h1 className="text-center font-bold text-[20px]">{stack.name}</h1>
                  <div className="flex flex-wrap gap-5 mt-5 w-full justify-center">
                    {
                      stack.list.map(tech => (
                        <div className="flex flex-col justify-center items-center p-1 xxs:w-[40%] w-full">
                          <p>{tech.name}</p>
                          <img src={tech.icon} alt={tech.name} className="w-[40px] h-[40px]" />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))
        }
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
