import type { FC, HTMLAttributes } from "react";
import cn from "clsx";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: "base" | "lg";
  children: string;
}

export const Heading: FC<HeadingProps> = ({
  size = "lg",
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(
        "text-black lowercase",
        {
          "text-[55px] sm:text-[80px] xl:text-[120px]": size === "lg",
          "text-3xl md:text-6xl xl:text-[80px]": size === "base",
        },
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
