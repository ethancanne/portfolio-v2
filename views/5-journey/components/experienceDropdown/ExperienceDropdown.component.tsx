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
            scale: 1.1,
            transform: 'translateY(-5px)',
            boxShadow:
              'rgba(0, 0, 0, 0.04) 0px 3px 5px;rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
            transition: { duration: 0.2, type: 'spring', stiffness: 200 },
          }}
          whileTap={{
            scale: 0.9,
            transform: 'translateY(5px)',
            transition: { duration: 0.2, type: 'spring', stiffness: 200 },
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
      <AnimatePresence mode="wait" initial={false}>
        {selected && (
          <motion.div
            initial={{ y: -20, opacity: 0, height: 0 }}
            animate={{ y: 0, opacity: 1, height: 'auto' }}
            exit={{ y: -20, opacity: 0, height: 0 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
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
