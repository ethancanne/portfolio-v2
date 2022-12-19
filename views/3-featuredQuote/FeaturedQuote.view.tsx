import Section from '../../layout/section/Section.layout';
import styles from './FeaturedQuote.module.scss';
import { motion } from 'framer-motion';
type Props = {};

const FeaturedQuote = (props: Props) => {
  const textEnter = (delay: any, up?: boolean) => ({
    initial: { opacity: 0, x: -100 },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 0.5,
      delay: delay,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  });
  return (
    <Section>
      <div className={styles.container}>
        <motion.p {...textEnter(0, false)}>I like to</motion.p>
        <motion.h1 {...textEnter(0.1, false)}>
          <span className="green">Express</span> my{' '}
          <span className="blue">creativity</span>
        </motion.h1>
        <motion.p {...textEnter(0.11)} className={styles.highlight}>
          from <strong>design</strong> to <strong>implementation</strong>
        </motion.p>
      </div>
    </Section>
  );
};

export default FeaturedQuote;
