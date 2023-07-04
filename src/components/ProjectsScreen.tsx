import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";

import reitarImg from "../assets/images/projects/1.png";
import dragomirovaImg from "../assets/images/projects/2.png";
import julyanskaImg from "../assets/images/projects/3.png";

import projectsImg from "../assets/images/projects.svg";

const PROJECTS = [
  {
    name: "Reitar",
    src: reitarImg,
  },
  {
    name: "Dragomirova",
    src: dragomirovaImg,
  },
  {
    name: "Julyanska",
    src: julyanskaImg,
  },
] as const;

export const ProjectsScreen: FC = () => {
  return (
    <section className="py-[64px]">
      <Paragraph>Our pride</Paragraph>

      <div className="flex space-x-8 items-center my-[40px]">
        <h2 className="text-[120px] text-black lowercase">Projects</h2>

        <span className="max-h-[120px] w-[300px] text-gray lowercase text-left">
          We are proud of our projects, so we invite you to take a look at them
        </span>
      </div>

      <article className="flex flex-col space-y-[100px]">
        {PROJECTS.map((project, index) => (
          <figure className="flex flex-col space-y-12 h-[360px] justify-end">
            <h2 className="text-primary font-medium text-lg">
              {index.toString().padStart(2, "0")}
            </h2>
            <p className="text-black uppercase">{project.name}</p>
            <img
              className="absolute right-0 w-[970px] h-[360px]"
              src={project.src}
              alt="Project Image"
            />
          </figure>
        ))}
      </article>

      <img
        className="absolute right-0 opacity-60 -translate-y-[40%]"
        src={projectsImg}
        alt="Project"
      />
    </section>
  );
};
