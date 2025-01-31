import styles from './Picker.module.scss';
import { MdComputer } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { MdDesignServices } from 'react-icons/md';
import expertItems from '../../../../../cms/data/expertise.json';
import { motion } from 'framer-motion';
import { buttonMotion } from '../../../../../styles/motions';

type Props = {
  selected: { title: string };
  setSelected: (selected: {
    title: string;
    content: string;
    technologies: { name: string }[];
  }) => void;
};

const Picker = (props: Props) => {
  const icons = {
    Frontend: <MdComputer className={styles.icon} />,
    Backend: <MdCode className={styles.icon} />,
    'UI Design': <MdDesignServices className={styles.icon} />,
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }}
      className={styles.container}
    >
      {Object.values(expertItems.items).map((item, index) => (
        <div className={styles.picker} key={index}>
          <motion.div
            className={
              props.selected.title === item.title
                ? styles.pickerItem + ' ' + styles.active
                : styles.pickerItem
            }
            onClick={() => props.setSelected(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {(icons as any)[item.title]}
            <h2 className={styles.pickerTitle}>{item.title}</h2>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Picker;
