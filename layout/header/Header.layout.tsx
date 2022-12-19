import styles from './Header.module.scss';
type Props = {
  isDark?: boolean;
  setMenuIsOpen: any;
  menuIsOpen: any;
};
import { BsGridFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Header = (props: Props) => {
  return (
    <>
      <a href="#intro" className={styles.logo}>
        <motion.h1
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          E
        </motion.h1>
      </a>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        onClick={() => props.setMenuIsOpen(!props.menuIsOpen)}
        className={styles.menu}
      >
        <BsGridFill />
      </motion.div>
    </>
  );
};

export default Header;
