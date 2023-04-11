import React from "react";
import { github } from "../assets";
import { Project } from "../constants";

interface Props {
  project: Project;
}

export const ProjectDetails = ({ project }: Props) => {
  return (
    <div className="lg:w-[40%] w-full lg:h-[600px] h-[40%] p-6 flex flex-col lg:overflow-auto overflow-y-scroll">
      <h2 className="text-[30px] font-bold">{project.name}</h2>
      <p className="text-white-200 font-medium mt-2">{project.description}</p>
      <h3 className="text-[18px] mt-3">Stack:</h3>
      <p className="text-tertiary">{project.stack.join(' - ')}</p>
      {!!project.github_links.length && (
        <div className="flex w-full gap-2">
          {project.github_links.map((link) => (
            <button
              key={link}
              onClick={() => window.open(link, "_blank")}
              className="flex-1 flex justify-center items-center gap-1 px-5 py-2 rounded-md mt-2 bg-primary"
            >
              <img src={github} alt="github" className="w-[25px] h-[25px]" />
              GitHub
            </button>
          ))}
        </div>
      )}
      {!!project.demo_link && (
        <button
          onClick={() => window.open(project.demo_link, "_blank")}
          className="px-5 py-2 rounded-md mt-2 bg-tertiary text-black"
        >
          Demo
        </button>
      )}
      <h3 className="text-[18px] font-bold mt-2">Nota:</h3>
      <p className="text-white-200 text-[14px]">{project.nota}</p>
    </div>
  );
};
