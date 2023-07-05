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
        "backdrop-blur-[25px] xl:backdrop-blur-none bg-gray-rgba sm:bg-transparent w-full p-2", className
      )}
      {...props}
    >
      <div className="max-w-[360px] md:max-w-[500px]">
        <p className="ml-4 sm:ml-[40px] lg:ml-[60px] uppercase text-sm sm:text-base">{children}</p>
      </div>
    </div>
  );
};
