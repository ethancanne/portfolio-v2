import Section from '../../layout/section/Section.layout';
import styles from './About.module.scss';
import aboutMe from '../../cms/data/aboutMe.json';
import Image from 'next/image';
type Props = {};

const About = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/images/profile-image.jpeg" width={400} height={400} />
        </div>
        <div className={styles.aboutContainer}>
          <h1>About Me</h1>
          <p>{aboutMe.content}</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
