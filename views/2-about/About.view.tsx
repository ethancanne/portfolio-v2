import Section from '../../layout/section/Section.layout';
import styles from './About.module.scss';
import aboutMe from '../../cms/data/aboutMe.json';
type Props = {};

const About = (props: Props) => {
  return (
    <Section>
      <div>{aboutMe.content}</div>
    </Section>
  );
};

export default About;
