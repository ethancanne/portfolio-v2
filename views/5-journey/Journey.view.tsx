import Section from '../../layout/section/Section.layout';
import ExperienceDropdown from './components/experienceDropdown/ExperienceDropdown.component';
import styles from './Journey.module.scss';
type Props = {};

const Journey = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>
        <h1 className={styles.title}>
          My <span className="green">Journey</span>
        </h1>
        <p className={styles.subTitle}>How I got to where I am now.</p>{' '}
      </div>
    </Section>
  );
};

export default Journey;
