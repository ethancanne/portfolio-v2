import Section from '../../../layout/section/Section.layout';
import styles from './About.module.scss';
import aboutMe from '../../../cms/data/aboutMe.json';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { buttonMotion } from '../../../styles/motions';
type Props = {};

const About = (props: Props) => {
  return (
    <Section>
      <div className={styles.container} id="about">
        <div className={styles.imageContainer}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{
              duration: 0.5,
              delay: 0,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
          >
            <Image
              alt={'Ethan Cannelongo'}
              src={'/' + aboutMe.image}
              width={350}
              height={300}
            />
          </motion.div>
        </div>
        <div className={styles.aboutContainer}>
          <div>
            <h1>About Me</h1>
            <p>{aboutMe.content}</p>
          </div>
          {/* <motion.button {...buttonMotion} className={styles.button}>
            Read More
          </motion.button> */}
        </div>
      </div>
    </Section>
  );
};

export default About;
