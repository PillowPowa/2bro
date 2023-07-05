import type { FC, HTMLAttributes } from "react";
import cn from "clsx";

import behance from "../assets/images/behance.svg";
import instagram from "../assets/images/instagram.svg";

export const HeaderList: FC<HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  return (
    <ul className={cn("text-gray cursor-pointer", className)} {...props}>
      <li className="inline ml-[50px]">about us</li>
      <li className="inline ml-[50px]">projects</li>
      <li className="inline ml-[50px]">feaures</li>
      <li className="inline ml-[50px]">team</li>
      <li className="inline ml-[50px]">contacts</li>
    </ul>
  );
};

export const Header: FC = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center flex-1 z-50 backdrop-blur-[25px]">
      <h1 className="font-bold text-black uppercase text-[40px]">
        <b className="text-primary">2</b> bro
      </h1>

      <HeaderList className="hidden lg:block"/>

      <section className="flex space-x-4 sm:space-x-[60px]">
        <div className="p-2 bg-primary">
          <img src={behance} loading="eager" alt="Behance" />
        </div>
        <div className="p-2 bg-primary">
          <img src={instagram} loading="eager" alt="Instagram" />
        </div>
      </section>
    </header>
  );
};
