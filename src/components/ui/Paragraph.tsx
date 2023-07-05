import type { FC, HTMLAttributes } from "react";
import cn from "clsx";

interface ParagraphProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "border-l-[2px] border-primary text-base sm:text-lg md:text-xl inline-block text-black",
        "backdrop-blur-[25px] bg-gray-rgba sm:bg-transparent w-full", className
      )}
      {...props}
    >
      <div className="max-w-[360px] sm:max-w-[500px]">
        <p className="ml-[60px] uppercase">{children}</p>
      </div>
    </div>
  );
};
