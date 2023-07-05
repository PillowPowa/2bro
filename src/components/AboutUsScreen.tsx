import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";

import mainImg from "../assets/images/about-us/1.png";
import { Heading } from "./ui/Heading";

export const AboutUsScreen: FC = () => {
  return (
    <section className="flex justify-between pt-[64px] relative sm:static">
      <article className="z-10">
        <Paragraph>Facts about buro</Paragraph>
        <Heading className="my-4 sm:my-[40px] text-center sm:text-left">
          About Us
        </Heading>

        <section className="flex flex-col sm:flex-row gap-12">
          <article>
            <section className="flex items-center space-x-8 md:h-[120px] w-full md:w-[360px] mb-8">
              <h1 className="text-primary text-[120px] leading-none">5</h1>

              <span className="h-full py-2">
                <h2 className="text-black text-lg font-medium">years</h2>
                <p className="mt-auto text-gray lowercase">
                  We create unique interiors that take our clients' breath away
                </p>
              </span>
            </section>

            <section className="flex items-center space-x-8 md:h-[120px] w-full md:w-[360px]">
              <h1 className="text-primary text-[120px] leading-none">7</h1>

              <span className="h-full py-2">
                <h2 className="text-black text-lg font-medium">awards</h2>
                <p className="mt-auto text-gray lowercase">
                  We have won at international competitions, and we are
                  recognised not only by our clients
                </p>
              </span>
            </section>
          </article>

          <span className="lowercase text-black sm:text-gray flex flex-col space-y-4 w-full md:w-[360px] sm:py-[30px]">
            <p className="sm:border-0 border-l-[2px] border-primary backdrop-blur-[5px] bg-gray-rgba sm:bg-transparent p-2 sm:p-0">
              We came to interior design because we want to change the world for
              the better with what we know how to do.
            </p>
            <p className="sm:border-0 border-l-[2px] border-primary backdrop-blur-[5px] bg-gray-rgba sm:bg-transparent p-2 sm:p-0">
              Every day we work to make our clients' lives easier, more
              convenient and comfortable.
            </p>
            <p className="sm:border-0 border-l-[2px] border-primary backdrop-blur-[5px] bg-gray-rgba sm:bg-transparent p-2 sm:p-0">
              We are here to solve any of your problems, even if it seems
              impossible to solve it now.
            </p>
          </span>
        </section>
		
        <img
          className="hidden sm:absolute right-0 w-[630px] h-auto -z-10 -translate-y-[120%] lg:-translate-y-[100%]"
          src={mainImg}
          alt="Main Image"
        />
      </article>
    </section>
  );
};
