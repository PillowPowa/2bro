import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";
import { Heading } from "./ui/Heading";
import mainImg from "../assets/images/about-us/1.png";

import { motion } from "framer-motion";
import { whileInViewState } from "../assets/animations";

export const AboutUsScreen: FC = () => {
  return (
    <motion.section
      id="about-us"
      {...whileInViewState}
      className="flex justify-between pt-[64px] relative sm:static w-full"
    >
      <article className="z-10">
        <Paragraph>Facts about bureau</Paragraph>
        <Heading className="my-4 sm:my-[40px] text-center sm:text-left">
          About Us
        </Heading>

        <section className="flex flex-col 2xl:flex-row gap-8">
          <article>
            <section className="flex items-center space-x-8 md:h-[80px] w-full md:w-[360px] mb-8">
              <h1 className="text-primary text-[100px] leading-none">5</h1>

              <span className="h-full">
                <h2 className="text-black text-lg font-medium">years</h2>
                <p className="mt-auto text-gray lowercase text-sm sm:text-base">
                  We create unique interiors that take our clients' breath away
                </p>
              </span>
            </section>

            <section className="flex items-center space-x-8 md:h-[80px] w-full md:w-[360px]">
              <h1 className="text-primary text-[100px] leading-none">7</h1>

              <span className="h-full">
                <h2 className="text-black text-lg font-medium">awards</h2>
                <p className="mt-auto text-gray lowercase text-sm sm:text-base">
                  We have won at international competitions
                </p>
              </span>
            </section>
          </article>

          <span className="lowercase text-black md:text-gray flex flex-col gap-4 w-full md:w-[360px] max-w-full">
            <p className="md:border-0 border-l-[2px] border-primary backdrop-blur-[5px] bg-gray-rgba md:bg-transparent p-2 md:p-0">
              We came to interior design because we want to change the world for
              the better with what we know how to do.
            </p>
            <p className="md:border-0 border-l-[2px] border-primary backdrop-blur-[5px] bg-gray-rgba md:bg-transparent p-2 md:p-0">
              Every day wemdork to make our clients' lives easier, more
              convenient and comfortable.
            </p>
            <p className="md:border-0 border-l-[2px] border-primary backdrop-blur-[5px] bg-gray-rgba md:bg-transparent p-2 md:p-0">
              We are here to solve any of your problems, even if it seems
              impossible to solve it now.
            </p>
          </span>
        </section>

        <img
          className="hidden md:block absolute right-0 w-[460px] h-auto -z-10 -translate-y-[100%] 2xl:-translate-y-[90%]"
          loading="lazy"
          src={mainImg}
          alt="Main Image"
        />
      </article>
    </motion.section>
  );
};
