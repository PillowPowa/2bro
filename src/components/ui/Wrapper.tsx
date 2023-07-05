import type {FC, PropsWithChildren, HTMLAttributes} from "react";
import cn from "clsx";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({
    className, children, ...props
}) => {
    return (
        <section
            className={cn("px-4 sm:px-[120px] md:px-[100px] xl:px-[140px] 2xl:px-[240px]", className)}
            {...props}
        >
            {children}
        </section>
    );
}