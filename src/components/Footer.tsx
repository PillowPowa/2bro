import { Paragraph } from "./ui/Paragraph";

import location from "../assets/images/location.svg";
import mail from "../assets/images/mail.svg";

export const Footer = () => {
  return (
    <footer className="absolute left-0 w-full px-[270px] py-[64px] bg-black flex flex-col justify-center">
      <Paragraph className="text-white">We are in touch</Paragraph>

      <section className="flex justify-between items-center">
        <h2 className="text-[120px] text-white lowercase leading-[110%] select-none">Contacts</h2>

        <span className="max-h-[120px] w-[280px] lowercase text-left flex flex-col gap-8 py-4">
          <div className="flex items-center space-x-8">
            <img src={location} alt="Loaction" />
            <p className="text-gray">info@2bro.com</p>
          </div>

          <div className="flex items-center space-x-8">
            <img src={mail} alt="Mail" />
            <p className="text-gray">Kyiv / Reitarska 13</p>
          </div>
        </span>
      </section>
    </footer>
  );
};
