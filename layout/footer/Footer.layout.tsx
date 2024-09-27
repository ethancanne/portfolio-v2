import styles from './Footer.module.scss';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Ethan Cannelongo</p>
      <p className={styles.text}>Designed & Built by Ethan Cannelongo</p>
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
          href="https://youtube.com/@ethancannelongo78"
          className={styles.socialLink}
        >
          <AiFillYoutube />
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
    </div>
  );
};

export default Footer;
