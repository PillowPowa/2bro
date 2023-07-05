import type { FC, HTMLAttributes } from "react";
import cn from "clsx";

import behance from "../assets/images/behance.svg";
import instagram from "../assets/images/instagram.svg";
import { slugify, unslugify } from "../util/Util";
import { useScrollToElement } from "../hooks/useScroll";

interface HeaderListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: string;
}

const HeaderListItem: FC<HeaderListItemProps> = ({
  children,
  className,
  ...props
}) => {
  const {hash} = useScrollToElement();
  const isActive = unslugify(hash.slice(1)) === children;
  
  return (
    <li className={cn(
      "inline ml-[50px] cursor-pointer transition-all hover:text-black lowercase", {
        "text-black": isActive,
      }
    )} {...props}>
      <a href={`#${slugify(children)}`}>{children}</a>
    </li>
  )
}

const HeaderList: FC<HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  return (
    <ul className={cn("text-gray", className)} {...props}>
      <HeaderListItem>About Us</HeaderListItem>
      <HeaderListItem>Projects</HeaderListItem>
      <HeaderListItem>Benefits</HeaderListItem>
      <HeaderListItem>Team</HeaderListItem>
      <HeaderListItem>Contacts</HeaderListItem>
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
