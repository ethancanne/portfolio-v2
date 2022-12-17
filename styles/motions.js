export const buttonMotion = {
  whileHover: {
    scale: 1.05,
    backgroundColor: 'rgba(255, 255, 255)',
    color: 'rgba(0, 0, 0)',
    transition: { scale: { duration: 0.2, type: 'spring', stiffness: 200 } },
  },
  whileTap: {
    scale: 0.99,
    backgroundColor: 'rgba(255, 255, 255)',
    color: 'rgba(0, 0, 0)',
    transition: { duration: 0.2, type: 'spring', stiffness: 200 },
  },
};
