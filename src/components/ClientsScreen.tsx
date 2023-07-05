import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";
import { HeadingWithDesc } from "./ui/HeadingWithDesc";
import * as imgs from "../assets/images/clients";

export const ClientsScreen: FC = () => {
  return (
    <section id="clients" className="pt-[128px]">
      <Paragraph>Why us?</Paragraph>

      <HeadingWithDesc heading="Clients">
        Those who have already trusted us and received a project they are still
        proud of
      </HeadingWithDesc>

      <figure className="flex flex-wrap gap-8">
        {Object.values(imgs).map((imgSrc, index) => (
          <img
            className="w-full sm:flex-card hover-scale-[1.01] transition-all"
            loading="lazy"
            key={index}
            src={imgSrc}
            alt={`Image ${index}`}
          />
        ))}
      </figure>
    </section>
  );
};
