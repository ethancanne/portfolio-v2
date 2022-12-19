import styles from './Social.module.scss';
type Props = {
  isDark?: boolean;
};
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Social = (props: Props) => {
  return (
    <div className={styles.container + ' make-dark'}>
      <div className={styles.socialContainer}>
        <motion.a
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
          href="https://github.com/ethancanne"
          className={styles.socialLink}
        >
          <AiFillGithub />
        </motion.a>
        <motion.a
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
          href="https://www.linkedin.com/in/ethan-cannelongo"
          className={styles.socialLink}
        >
          <AiFillLinkedin />
        </motion.a>
        <motion.a
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
          href="https://www.facebook.com/ethan.cannelongo/"
          className={styles.socialLink}
        >
          <BsFacebook />
        </motion.a>
        <motion.a
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
          href="https://www.instagram.com/ethancanne/"
          className={styles.socialLink}
        >
          <AiFillInstagram />
        </motion.a>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Social;
