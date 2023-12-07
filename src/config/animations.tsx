export const transition = { type: "spring", stiffness: 200 };

// Animations
const start = { opacity: 0.0001, y: -33 };
const animation = { opacity: 1, y: 0 };
const hide = {
  opacity: 0,
  y: 10,
  transition: {
    duration: 1,
    ease: "linear",
  },
};

export const variants = {
  initial: start,
  animate: {
    ...animation,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: hide,
};
