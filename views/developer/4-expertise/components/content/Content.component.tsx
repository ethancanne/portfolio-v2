import styles from './Content.module.scss';
import expertItems from '../../../../../cms/data/expertise.json';
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
      height: '0',
    },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        duration: 0,
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  const tVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      height: '0',
    },
    visible: {
      opacity: 1,
      height: 'auto',
      x: 0,
    },

    exit: {
      opacity: 0,
      x: -5,
      height: '0',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, x: 50 }}
      transition={{
        duration: 0.5,
        delay: 0,
        type: 'tween',
      }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={props.selected.content}
            initial="hidden"
            exit={{ opacity: 0, y: -10, height: '0' }}
            animate="visible"
            variants={pVariants}
            className={styles.content}
          >
            {props.selected.content}
          </motion.p>
        </AnimatePresence>
        <motion.ul
          key={props.selected.content}
          initial="hidden"
          animate="visible"
          exit={'exit'}
          variants={tVariants}
          className={styles.technologies}
        >
          {props.selected.technologies.map((tech, index) => (
            <div className={styles.technology} key={index}>
              <AnimatePresence initial={false} mode="wait">
                <li className={styles.technologyName}>{tech.name}</li>
              </AnimatePresence>
            </div>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Content;
