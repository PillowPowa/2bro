import { Paragraph } from "./ui/Paragraph";
import { Heading } from "./ui/Heading";

import location from "../assets/images/location.svg";
import mail from "../assets/images/mail.svg";

export const Footer = () => {
  return (
    <footer className="absolute left-0 w-full px-4 md:px-[100px] xl:px-[270px] py-[32px] sm:py-[64px] bg-black flex flex-col justify-center">
      <Paragraph className="text-white">We are in touch</Paragraph>

      <section className="flex flex-col md:flex-row justify-between md:items-center">
        <Heading className="text-white leading-[110%] select-none">
          Contacts
        </Heading>

        <span className="max-h-[120px] w-full sm:w-[280px] lowercase text-left flex flex-row justify-between sm:flex-col gap-2 py-4">
          <div className="flex items-center gap-2 sm:gap-8">
            <img src={location} loading="eager" alt="Loaction" />
            <p className="text-gray text-sm sm:text-base">info@2bro.com</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-8">
            <img src={mail} loading="eager" alt="Mail" />
            <p className="text-gray text-sm sm:text-base">Kyiv / Reitarska 13</p>
          </div>
        </span>
      </section>
    </footer>
  );
};
