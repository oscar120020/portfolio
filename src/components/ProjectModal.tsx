import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import * as THREE from "three";
import { close, ipad_icon, laptop_icon, no_rotate, rotate } from "../assets";
import { Project } from "../constants";
import { IpadComponent } from "./IpadComponent";
import { LaptopComponent } from "./LaptopComponent";
import { IpadModel } from "./models/Ipad";
import { LaptopModel } from "./models/Laptop";

interface Props {
  closeModal: () => void;
  project: Project;
}

export const ProjectModal = ({ closeModal, project }: Props) => {
  const [rotateModel, setRotateModel] = useState(true);
  const [selectIpad, setSelectIpad] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-blur fixed w-screen min-h-screen z-100 left-0 top-0 inset-0 flex justify-center items-center"
    >
      <div className="relative hide-scrollbar rounded-md xs:w-[85%] w-full lg:h-auto h-[85%] max-w-[1100px] mt-[68px] mx-5 bg-secondary lg:overflow-auto overflow-y-scroll flex lg:flex-row flex-col-reverse">
        <div className="lg:w-[40%] w-full lg:h-[600px] h-[40%] p-6 flex flex-col hide-scrollbar lg:overflow-auto overflow-y-scroll">
          <h2 className="text-[30px] font-bold">{project.name}</h2>
          <p className="text-white-200 font-medium mt-2">
            {project.description}
          </p>
          <h3 className="text-[18px] mt-3">Stack:</h3>
          <p className="text-tertiary">{project.stack.join(" - ")}</p>
          {!!project.github_links.length && (
            <>
              {project.github_links.map((link) => (
                <button
                  key={link}
                  onClick={() => window.open(link, "_blank")}
                  className="px-5 py-2 rounded-md mt-2 bg-primary"
                >
                  GitHub
                </button>
              ))}
            </>
          )}
          {!!project.demo_link && (
            <button
              onClick={() => window.open(project.demo_link, "_blank")}
              className="px-5 py-2 rounded-md mt-2 bg-tertiary text-black"
            >
              Demo
            </button>
          )}
        </div>
        <div className="relative lg:w-[60%] w-full lg:h-[600px] h-[60%]">
          {
            selectIpad ? (
              <IpadComponent
                image={project.images.tablet}
                autoRotate={rotateModel}
              />
            ) : (
              <LaptopComponent
                image={project.images.pc}
                autoRotate={rotateModel}
              />
            )
          }
          <img
            src={rotate}
            alt="Rotar icon"
            className="absolute bottom-[50%] left-5 w-[35px] h-[35px] rounded-lg cursor-pointer bg-white p-2"
            onClick={() => setRotateModel(false)}
          />
          <img
            src={selectIpad ? ipad_icon : laptop_icon}
            alt="modelo 3d icon"
            className="absolute bottom-[40%] left-5 w-[35px] h-[35px] rounded-lg cursor-pointer bg-white p-[2px]"
            onClick={() => setSelectIpad(!selectIpad)}
          />
          {!rotateModel && (
            <img
              src={no_rotate}
              alt="Rotar icon"
              className="absolute bottom-[50%] left-5 w-[35px] h-[35px] rounded-md cursor-pointer bg-transparent z-5"
              onClick={() => setRotateModel(true)}
            />
          )}
          {/* <button
            className="absolute bottom-5 right-14 bg-red-400 p-2"
            onClick={() => setRotateModel(!rotateModel)}
          >
            rotar
          </button> */}
        </div>
        <img
          src={close}
          alt="close icon"
          className="w-[20px] h-[20px] object-contain cursor-pointer absolute top-5 right-5"
          onClick={closeModal}
        />
      </div>
    </motion.div>
  );
};
