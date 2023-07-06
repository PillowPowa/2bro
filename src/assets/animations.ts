import type { AnimationProps } from "framer-motion";

type FramerAnimation = AnimationProps;

export const opacityInitialAnimation: FramerAnimation = {
  initial: "initial",
  animate: "animate",
  variants: {
    initial: {
      opacity: 0,
    },
    animate: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.2,
      },
    }),
  },
};

export const widthInViewVariants: FramerAnimation["variants"] = {
  hidden: {
    x: -40,
  },
  visible: {
    x: 0,
    transition: {
      x: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
        delay: 0.15,
      },
    },
  },
};

export const whileInViewState = {
    viewport: { amount: 0.2 },
    whileInView: "visible",
    initial: "hidden",
} as const;
