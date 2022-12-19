import React from 'react';
import styles from './Menu.module.scss';
import { motion } from 'framer-motion';

type Props = {
  setMenuIsOpen: any;
};

const Menu = (props: Props) => {
  const menuItems = [
    {
      name: 'Home',
      link: '#intro',
    },
    {
      name: 'About',
      link: '#about',
    },

    {
      name: 'Expertise',
      link: '#expertise',
    },

    {
      name: 'Journey',
      link: '#journey',
    },
    {
      name: 'Portfolio',
      link: '#portfolio',
    },

    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
      className={styles.container}
    >
      <div className={styles.menuItems}>
        {menuItems.map((item, index) => (
          <motion.a
            whileHover={{
              scale: 1.05,
              x: -10,
            }}
            whileTap={{
              scale: 0.95,
              x: 0,
            }}
            transition={{
              duration: 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: index * 0.03,
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            href={item.link}
            className={styles.menuItem}
            onClick={() => props.setMenuIsOpen(false)}
            key={item.name}
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
