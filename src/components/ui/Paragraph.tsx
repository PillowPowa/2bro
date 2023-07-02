import type { FC, HTMLAttributes } from "react";
import cn from "clsx";

interface ParagraphProps extends HTMLAttributes<HTMLSpanElement> {
	children: string;
}

export const Paragraph: FC<ParagraphProps> = ({ children, className, ...props }) => {
	return (
		<span className={cn("border-l-[2px] border-primary text-xl inline-block", className)} {...props}>
			<p className="ml-[60px] uppercase text-black">{children}</p>
		</span>
	);
};
