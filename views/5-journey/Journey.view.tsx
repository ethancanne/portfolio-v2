import Section from '../../layout/section/Section.layout';
import ExperienceDropdown from './components/experienceDropdown/ExperienceDropdown.component';
import studied from '../../cms/data/journey/studied.json';

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
        <div className={styles.experienceContainer}>
          <div className={styles.experience}>
            <h1>
              Where I've <span className="orange">studied</span>
            </h1>
            {studied.items.map((item) => (
              <ExperienceDropdown item={item} key={item.title} />
            ))}
          </div>
          <div className={styles.experience}>
            <h1>
              Where I've <span className="blue">worked</span>
            </h1>
            {studied.items.map((item) => (
              <ExperienceDropdown item={item} key={item.title} />
            ))}
          </div>
          <div className={styles.experience}>
            <h1>
              Where I've <span className="green">served</span>
            </h1>
            {studied.items.map((item) => (
              <ExperienceDropdown item={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Journey;
