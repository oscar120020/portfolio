import { useState } from "react";
import { rotate, ipad_icon, laptop_icon, no_rotate } from "../assets";
import { Project } from "../constants";
import { IpadComponent } from "./IpadComponent";
import { LaptopComponent } from "./LaptopComponent";

interface Props {
  project: Project;
}

export const ProjectModels = ({project}: Props) => {
  const [rotateModel, setRotateModel] = useState(true);
  const [selectIpad, setSelectIpad] = useState(true);
  return (
    <div className="relative lg:w-[60%] w-full lg:h-[600px] h-[60%]">
      {selectIpad ? (
        <IpadComponent image={project.images.tablet} autoRotate={rotateModel} />
      ) : (
        <LaptopComponent image={project.images.pc} autoRotate={rotateModel} />
      )}
      <img
        src={rotate}
        alt="Rotar icon"
        className="absolute bottom-[55%] right-5 w-[35px] h-[35px] rounded-lg cursor-pointer bg-primary p-2 z-40"
        onClick={() => setRotateModel(false)}
      />
      <img
        src={selectIpad ? ipad_icon : laptop_icon}
        alt="modelo 3d icon"
        className="absolute bottom-[45%] right-5 w-[35px] h-[35px] rounded-lg cursor-pointer bg-primary p-[2px] z-40"
        onClick={() => setSelectIpad(!selectIpad)}
      />
      {!rotateModel && (
        <img
          src={no_rotate}
          alt="Rotar icon"
          className="absolute bottom-[55%] right-5 w-[35px] h-[35px] rounded-md cursor-pointer bg-transparent z-50"
          onClick={() => setRotateModel(true)}
        />
      )}
    </div>
  );
};
