import styles from './Header.module.scss';
type Props = {
  isDark?: boolean;
};
import { BsGridFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Header = (props: Props) => {
  return (
    <>
      <div className={styles.logo}>
        <h1>E</h1>
      </div>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.2,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className={styles.menu}
      >
        <BsGridFill />
      </motion.div>
    </>
  );
};

export default Header;
