import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";
import { HeadingWithDesc } from "./ui/HeadingWithDesc";

import cn from "clsx";

import mainImg from "../assets/images/benefits/1.png";
import detailsImg from "../assets/images/details.svg";

export const BenefitsScreen: FC = () => {
  return (
    <section id="benefits" className="relative pt-[128px]">
      <Paragraph>Why us?</Paragraph>
      <HeadingWithDesc heading="Benefits">
        We are more than just a bureau, which can be understood by looking at
        our advantages in work
      </HeadingWithDesc>

      <img
        className="left-0 w-full md:w-[670px] h-[460px] object-cover object-top"
        loading="lazy"
        src={mainImg}
        alt="Benefits Image"
      />

      <article className={cn(
        "absolute p-[32px] lg:p-[96px] w-full md:w-[570px] lg:w-[780px] h-fit md:h-[240px] lg:h-[360px]",
        "right-0 backdrop-blur-[25px] bg-gray-rgba z-10 -translate-y-[80%]",
        "flex justify-between text-black lowercase flex-wrap gap-6"
      )}>
        <section className="flex flex-col justify-between text-black">
          <div className="p-4 bg-black w-fit">
            <img src={detailsImg} loading="lazy" alt="Details" />
          </div>
          <h2 className="my-2 text-sm sm:text-base">Guarantee for projects</h2>
          <span className="md:max-w-[240px] text-xs sm:text-sm">
            We were the first to introduce guarantees that will help you to be
            100% sure of the result
          </span>
        </section>

        <section className="flex flex-col justify-between sm:ml-auto lg:ml-0 text-black">
          <div className="p-4 bg-black w-fit">
            <img src={detailsImg} loading="lazy" alt="Details" />
          </div>
          <h2 className="my-2 text-sm sm:text-base">Verification of contractors</h2>
          <span className="md:max-w-[240px] text-xs sm:text-sm">
            We were the first to introduce guarantees that will help you to be
            100% sure of the result
          </span>
        </section>
      </article>
    </section>
  );
};
