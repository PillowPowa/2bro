import type {FC, PropsWithChildren, HTMLAttributes} from "react";
import cn from "clsx";
import { Heading } from "./Heading";

interface HeadingWithDescProps extends HTMLAttributes<HTMLDivElement> {
    heading: string;
}

export const HeadingWithDesc: FC<PropsWithChildren<HeadingWithDescProps>> = ({
    heading,
    children,
    className,
    ...props
}) => {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:justify-between items-center sm:gap-4 my-[40px]", className)} {...props}>
      <Heading>{heading}</Heading>

      <span className="max-h-max w-[280px] text-gray lowercase text-center sm:text-left">
        {children}
      </span>
    </div>
  );
};
