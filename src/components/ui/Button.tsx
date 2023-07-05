import type { FC, PropsWithChildren, HTMLAttributes } from "react";
import cn from "clsx";

const Arrow: FC<HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="&#209;&#129;&#209;&#130;&#209;&#128;&#209;&#150;&#208;&#187;&#208;&#186;&#208;&#176; &#208;&#177;&#209;&#150;&#208;&#187;&#208;&#176;"
        d="M0.606602 1.3934L11.2132 12L0.606602 22.6066"
        strokeWidth="1.5"
      />
    </svg>
  );
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "group px-8 py-5 uppercase text-lg flex items-center gap-6 transition-all",
        {
          "bg-primary text-white": variant === "primary",
          "bg-black text-white border border-black hover:backdrop-blur[5px] hover:bg-gray-rgba hover:text-black": variant === "secondary",
          "bg-gray text-black border border-gray hover:bg-primary hover:text-white": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
      <Arrow className="h-[18px] w-auto stroke-current group-hover:translate-x-[20%] transition-all" />
    </button>
  );
};
