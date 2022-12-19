import Section from '../../layout/section/Section.layout';
import OtherProject from './components/OtherProject.component';
import styles from './OtherPortfolio.module.scss';
import otherProjects from '../../cms/data/portfolio/otherProjects.json';
import { motion } from 'framer-motion';
type Props = {};

const OtherPortfolio = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>
        <h1 className={styles.title}>Some other noteworthy projects</h1>
        <div className={styles.projects}>
          {otherProjects.items.map((project, index) => (
            <OtherProject project={project} key={index} delay={index * 0.03} />
          ))}
        </div>{' '}
      </div>
    </Section>
  );
};

export default OtherPortfolio;
