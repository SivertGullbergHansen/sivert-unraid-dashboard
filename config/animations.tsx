export const transition = { type: "spring", stiffness: 200 };

export const variants = {
  initial: { opacity: 0.0001, y: -33 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};
