import type {FC} from "react";
import behance from "../assets/images/behance.svg";
import instagram from "../assets/images/instagram.svg";

export const Header: FC = () => {
  return (
    <header className="max-h-[48px] flex justify-between items-center">
      <h1 className="font-bold uppercase text-[40px]">
        <b className="text-primary">2</b> bro
      </h1>

      <ul className="text-gray cursor-pointer">
        <li className="inline ml-[50px]">about us</li>
        <li className="inline ml-[50px]">projects</li>
        <li className="inline ml-[50px]">feaures</li>
        <li className="inline ml-[50px]">team</li>
        <li className="inline ml-[50px]">contacts</li>
      </ul>

      <section className="flex space-x-[60px]">
        <div className="p-2 bg-primary">
          <img src={behance} alt="Behance" />
        </div>
        <div className="p-2 bg-primary">
          <img src={instagram} alt="Instagram" />
        </div>
      </section>
    </header>
  );
}