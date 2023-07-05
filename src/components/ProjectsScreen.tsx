import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";
import { HeadingWithDesc } from "./ui/HeadingWithDesc";

import reitarskaImg from "../assets/images/projects/1.png";
import dragomirovaImg from "../assets/images/projects/2.png";
import julyanskaImg from "../assets/images/projects/3.png";

import projectsImg from "../assets/images/projects.svg";

const PROJECTS = [
  {
    name: "Reitarska",
    src: reitarskaImg,
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
    <section id="projects" className="pt-[64px]">
      <Paragraph>Our pride</Paragraph>

      <HeadingWithDesc heading="Our pride">
        We are proud of our projects, so we invite you to take a look at them
      </HeadingWithDesc>

      <article className="flex flex-col gap-[40px] md:gap-[100px]">
        {PROJECTS.map((project, index) => (
          <figure className="flex flex-row md:flex-col gap-2 md:gap-12 h-[220px] sm:h-[360px] items-end md:items-start md:justify-end relative sm:static z-10 p-2 md:p-0">
            <h2 className="text-primary font-medium text-lg">
              {index.toString().padStart(2, "0")}
            </h2>
            <p className="mb-0.5 text-gray md:text-black uppercase">{project.name}</p>
            <img
              className="absolute right-0 w-full md:w-[970px] h-[180px] sm:h-[360px] -z-10 object-cover object-top"
              loading="lazy"
              src={project.src}
              alt="Project Image"
            />
          </figure>
        ))}
      </article>

      <img
        className="absolute right-0 opacity-60 -translate-y-[50%]"
        loading="lazy"
        src={projectsImg}
        alt="Project"
      />
    </section>
  );
};
