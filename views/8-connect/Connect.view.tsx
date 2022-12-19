import Section from '../../layout/section/Section.layout';
import styles from './Connect.module.scss';
import { HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { buttonMotion } from '../../styles/motions';
type Props = {};

const Connect = (props: Props) => {
  return (
    <Section>
      <div className={styles.container} id="contact">
        <div className={styles.infoContainer}>
          <h1>
            Let's <span className="orange">Connect</span>
          </h1>
          <p>
            I'm always open to discuss new opportunities, so if you have a
            project you think I'd be a good fit for, feel free to reach out!
          </p>
          <a href="mailto:ethancannelongo@gmail.com">
            <motion.button {...buttonMotion}>Send Email</motion.button>
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{
            duration: 0.5,
            delay: 0,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
          className={styles.imageContainer}
        >
          <HiMail className={styles.icon} />
        </motion.div>
      </div>
    </Section>
  );
};

export default Connect;
