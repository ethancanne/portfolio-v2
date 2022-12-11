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
          <Image
            alt={'Ethan Cannelongo'}
            src="/img/profile-image.jpeg"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.aboutContainer}>
          <div>
            <h1>About Me</h1>
            <p>{aboutMe.content}</p>
          </div>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </Section>
  );
};

export default About;
