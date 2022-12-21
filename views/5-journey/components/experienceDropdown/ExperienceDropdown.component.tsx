import { useState } from 'react';
import styles from './ExperienceDropdown.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonMotion } from '../../../../styles/motions';
type Props = {
  item: {
    title: string;
    position: string;
    timeFrame: string;
    isPresent: boolean;
    points: { content: string }[];
  };
  color: string;
};

const ExperienceDropdown = (props: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.container} onClick={() => setSelected(!selected)}>
      <div className={styles.dropdownContainer}>
        <motion.div
          whileHover={{
            scale: 1.03,
            transform: 'translateY(-1px)',
          }}
          whileTap={{
            scale: 0.95,
            transform: 'translateY(1px)',
          }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          exit={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 200,
            damping: 10,
          }}
          className={
            props.item.isPresent
              ? styles.dropdown + ' ' + styles[`present-${props.color}`]
              : styles.dropdown
          }
        >
          <p className={styles.title}>
            {props.item.title} - <span>{props.item.position}</span>
          </p>
          <div className={styles.end}>
            <p className={styles.timeframe}>{props.item.timeFrame}</p>
            <IoIosArrowDown
              className={
                selected ? styles.arrow + ' ' + styles.active : styles.arrow
              }
            />
          </div>
        </motion.div>
      </div>
      <AnimatePresence mode="sync" initial={false}>
        {selected && (
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
              height: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              y: -20,
              opacity: 0,
              height: 0,
            }}
            transition={{
              type: 'tween',
              duration: 0.2,
              ease: 'easeInOut',
            }}
            className={styles.points}
          >
            <ul>
              {props.item.points.map((point) => (
                <li className={styles.point}>{point.content}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceDropdown;
