import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { close, ipad_icon, laptop_icon, no_rotate, rotate } from "../../assets";
import { Project } from "../../constants";
import { IpadComponent } from "../IpadComponent";
import { LaptopComponent } from "../LaptopComponent";
import { IpadModel } from "../models/Ipad";
import { LaptopModel } from "../models/Laptop";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectModels } from "./ProjectModels";

interface Props {
  closeModal: () => void;
  project: Project;
}

export const ProjectModal = ({ closeModal, project }: Props) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-blur fixed w-screen min-h-screen z-100 left-0 top-0 inset-0 flex justify-center items-center"
    >
      <div className="relative hide-scrollbar rounded-md xs:w-[85%] w-full lg:h-auto h-[85%] max-w-[1100px] mt-[68px] mx-5 bg-secondary lg:overflow-auto overflow-y-scroll flex lg:flex-row flex-col-reverse">
        <ProjectDetails project={project} />
        <ProjectModels project={project} />
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
