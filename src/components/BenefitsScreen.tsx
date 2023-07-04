import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";
import { HeadingWithDesc } from "./ui/HeadingWithDesc";

import mainImg from "../assets/images/benefits/1.png";
import detailsImg from "../assets/images/details.svg";

export const BenefitsScreen: FC = () => {
  return (
    <section className="relative pt-[128px] pb-[64px]">
      <Paragraph>Why us?</Paragraph>
      <HeadingWithDesc heading="Benefits">
        We are more than just a bureau, which can be understood by looking at
        our advantages in work
      </HeadingWithDesc>

      <img
        className="left-0 w-[670px] h-[460px]"
        src={mainImg}
        alt="Benefits Image"
      />

      <article className="absolute p-[96px] w-[780px] h-[360px] right-0 backdrop-blur-[25px] bg-gray-rgba z-10 -translate-y-[90%] flex justify-between text-black lowercase">
        <section className="flex flex-col justify-between">
          <div className="p-4 bg-black w-fit">
            <img src={detailsImg} alt="Details" />
          </div>
          <h2>Guarantee for projects</h2>
          <span className="max-w-[240px] text-sm">
            We were the first to introduce guarantees that will help you to be
            100% sure of the result
          </span>
        </section>

        <section className="flex flex-col justify-between">
          <div className="p-4 bg-black w-fit">
            <img src={detailsImg} alt="Details" />
          </div>
          <h2>Verification of contractors</h2>
          <span className="max-w-[240px] text-sm">
            We were the first to introduce guarantees that will help you to be
            100% sure of the result
          </span>
        </section>
      </article>
    </section>
  );
};
