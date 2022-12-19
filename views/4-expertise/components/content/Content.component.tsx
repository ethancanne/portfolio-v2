import styles from './Content.module.scss';
import expertItems from '../../../../cms/data/expertise.json';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
type Props = {
  selected: { content: string; technologies: { name: string }[] };
};

const Content = (props: Props) => {
  const pVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  const tVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
    },

    exit: {
      opacity: 0,
      x: -5,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{
        duration: 0.5,
        delay: 0,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={props.selected.content}
            initial="hidden"
            exit={{ opacity: 0, y: -10 }}
            animate="visible"
            variants={pVariants}
            className={styles.content}
          >
            {props.selected.content}
          </motion.p>
        </AnimatePresence>
        <ul className={styles.technologies}>
          {props.selected.technologies.map((tech) => (
            <div className={styles.technology}>
              <AnimatePresence initial={false} mode="wait">
                <motion.li
                  key={props.selected.content}
                  initial="hidden"
                  animate="visible"
                  exit={'exit'}
                  variants={tVariants}
                  className={styles.technologyName}
                >
                  {tech.name}
                </motion.li>
              </AnimatePresence>
            </div>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Content;
