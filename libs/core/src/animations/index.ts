import { MotionProps } from 'framer-motion';

export const animationGhostLoader: MotionProps = {
  style: {
    backgroundColor: '#f2f2f2',
  },
  animate: {
    opacity: [1, 0.5, 1],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'loop',
  },
};
