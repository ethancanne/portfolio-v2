import Section from '../../layout/section/Section.layout';
import styles from './About.module.scss';
import aboutMe from '../../cms/data/aboutMe.json';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { buttonMotion } from '../../styles/motions';
type Props = {};

const About = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            alt={'Ethan Cannelongo'}
            src={'/' + aboutMe.image}
            width={350}
            height={300}
          />
        </div>
        <div className={styles.aboutContainer}>
          <div>
            <h1>About Me</h1>
            <p>{aboutMe.content}</p>
          </div>
          <motion.button {...buttonMotion} className={styles.button}>
            Read More
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

export default About;
