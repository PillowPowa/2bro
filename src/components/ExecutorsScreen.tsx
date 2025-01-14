import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";
import { HeadingWithDesc } from "./ui/HeadingWithDesc";

import * as imgs from "../assets/images/team";

import { motion } from "framer-motion";
import { whileInViewState } from "../assets/animations";

const SRCS = Object.values(imgs);
const TEAM = [
  {
    avatarURL: SRCS[0],
    name: "Steve",
    rank: "Co-Owner",
  },
  {
    avatarURL: SRCS[1],
    name: "Lina",
    rank: "Art-Director",
  },
  {
    avatarURL: SRCS[2],
    name: "Mary",
    rank: "Senior Designer",
  },
];

export const ExecutorsScreen: FC = () => {
  return (
    <motion.section id="team" {...whileInViewState} className="py-[64px]">
      <Paragraph>Our Executors</Paragraph>

      <HeadingWithDesc heading="Team">
        We have gathered the best specialists
        in the field of design in one place
      </HeadingWithDesc>

      <article className="max-w-full overflow-x-auto flex flex-col md:flex-row gap-8 justify-between">
        {TEAM.map((person) => (
          <figure key={person.name} className="w-full md:w-[300px]">
            <img
              className="w-full h-auto"
              loading="lazy"
              src={person.avatarURL}
              alt="Executor Image"
            />

            <div className="flex justify-between items-center mt-4 sm:mt-8">
              <h2 className="text-black font-medium text-left">
                {person.name}
              </h2>
              <p className="text-gray lowercase text-right">{person.rank}</p>
            </div>
          </figure>
        ))}
      </article>
    </motion.section>
  );
};
