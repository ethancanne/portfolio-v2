export const buttonMotion = {
  hover: {
    scale: 1.1,
    backgroundColor: 'rgba(255, 255, 255)',
    color: 'rgba(0, 0, 0)',
    transition: { scale: { duration: 0.2, type: 'spring', stiffness: 200 } },
  },
  tap: {
    scale: 0.98,
    backgroundColor: 'rgba(255, 255, 255)',
    color: 'rgba(0, 0, 0)',
    transition: { duration: 0.2, type: 'spring', stiffness: 200 },
  },
};
