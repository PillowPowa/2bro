import type {FC, PropsWithChildren, HTMLAttributes} from 'react';
import cn from 'clsx';
import arrow from '../../assets/images/arrow.svg';

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
    <button className={cn("px-8 py-5 uppercase text-lg", {
      "bg-primary text-white": variant === "primary",
      "bg-black text-white": variant === "secondary",
      "bg-gray text-black": variant === "outline",
    }, className)} {...props}>
      {children}
      <img className="inline-block ml-6 my-auto" src={arrow} alt="Arrow" />
    </button>
  );
};