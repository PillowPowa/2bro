import type {FC, PropsWithChildren, HTMLAttributes} from "react";
import cn from "clsx";

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
    <div className={cn("flex justify-between items-center my-[40px]", className)} {...props}>
      <h2 className="text-[120px] text-black lowercase">{heading}</h2>

      <span className="max-h-[120px] w-[300px] text-gray lowercase text-left">
        {children}
      </span>
    </div>
  );
};
