import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { stacks } from "../../constants";

const About = () => {
  return (
    <div className="min-h-screen w-full">
      <motion.div variants={textVariant(0.2)}>
        <h1 className="font-bold text-[50px]">Sobre mi</h1>
        <p className="font-medium text-white-200 max-w-4xl">
          Soy un Full stack developer con más 4 años de experiencia y con
          amplios conocimientos en tecnologías como React, Angular, Express.js y
          NestJs. Además me destaco por mi gran capacidad de trabajar bajo
          deadlines cortos y a gran velocidad manteniendo la calidad. He tenido
          experiencia cocheando aprendices y junior developers. Entusiasta en la
          programación competitiva.
        </p>
      </motion.div>
      <div className="mt-14 flex flex-wrap gap-10 justify-center">
        {stacks.map((stack, index) => (
          <Tilt className="xs:w-[350px] w-full" key={stack.name}>
            <motion.div
              variants={fadeIn("", "", 0.2 + index / 2, 0.5)}
              className="w-full green-blue-gradient p-[2px] rounded-[10px] shadow-card"
            >
              <div className="bg-secondary rounded-[10px] p-5 min-h-[380px]">
                <h1 className="text-center font-bold text-[20px]">
                  {stack.name}
                </h1>
                <div className="flex flex-wrap gap-5 mt-5 w-full justify-center">
                  {stack.list.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col justify-center items-center p-1 xxs:w-[40%] w-full"
                    >
                      <p>{tech.name}</p>
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
