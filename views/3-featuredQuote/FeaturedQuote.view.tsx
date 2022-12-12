import Section from '../../layout/section/Section.layout';
import styles from './FeaturedQuote.module.scss';
type Props = {};

const FeaturedQuote = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>
        <div className="observe make-animate">
          <p>I like to</p>
          <h1>
            <span className="green">Express</span> my{' '}
            <span className="blue">creativity</span>
          </h1>
          <p className={styles.highlight}>from design to implementation</p>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedQuote;
