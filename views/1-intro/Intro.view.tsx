import Section from '../../layout/section/Section.layout';
import styles from './Intro.module.scss';
type Props = {};

const Intro = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.name}>Ethan Cannelongo</h1>
          <h1 className={styles.subText}>
            a <span className="blue">designer</span>,{' '}
            <span className="green">developer</span> and{' '}
            <span className="orange">teacher</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
