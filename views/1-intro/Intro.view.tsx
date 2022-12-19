import Section from '../../layout/section/Section.layout';
import styles from './Intro.module.scss';
import { motion } from 'framer-motion';
type Props = {};

const Intro = (props: Props) => {
  const textEnter = (delay: any) => ({
    initial: { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.5,
      delay: delay,
      type: 'spring',
      stiffness: 50,
      damping: 10,
    },
  });
  return (
    <Section>
      <div className={styles.container} id="intro">
        <div className={styles.textContainer}>
          <motion.h1 {...textEnter(0)} className={styles.name}>
            Ethan Cannelongo
          </motion.h1>
          <motion.h1 {...textEnter(0.1)} className={styles.subText}>
            a <span className="blue">designer</span>,{' '}
            <span className="green">developer</span> and{' '}
            <span className="orange">teacher</span>
          </motion.h1>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
