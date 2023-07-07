import { Paragraph } from "./ui/Paragraph";
import { Heading } from "./ui/Heading";
import { Wrapper } from "./ui/Wrapper";

import location from "../assets/images/location.svg";
import mail from "../assets/images/mail.svg";

export const Footer = () => {
  return (
    <Wrapper
      id="contacts"
      className="absolute left-0 w-full py-4 md:py-[64px] bg-black flex flex-col justify-center"
    >
      <Paragraph className="text-white">We are in touch</Paragraph>

      <section className="flex flex-col md:flex-row justify-between md:items-center">
        <Heading className="hidden sm:block text-white leading-[110%] select-none">
          Contacts
        </Heading>

        <span className="max-h-[120px] w-full sm:w-[280px] lowercase text-left flex flex-row justify-between sm:flex-col gap-2 py-4">
          <div className="flex items-center gap-2 sm:gap-8">
            <img
              className="w-4 sm:w-6"
              src={location}
              loading="eager"
              alt="Loaction"
            />
            <a
              href="https://www.google.com/maps/place/Reitarska+St,+13,+Kyiv,+02000/@50.4512801,30.5096903,17z"
              target="_blank"
              className="text-gray text-xs sm:text-base transition-all hover:underline"
            >
              Kyiv / Reitarska 13
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-8">
            <img className="w-4 sm:w-6" src={mail} loading="eager" alt="Mail" />
            <a
              href="mailto:info@2bro.com"
              className="text-gray text-xs sm:text-base transition-all hover:underline"
            >
              info@2bro.com
            </a>
          </div>
        </span>
      </section>
    </Wrapper>
  );
};
