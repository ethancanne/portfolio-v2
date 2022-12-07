import Section from '../../layout/section/Section.layout';
import styles from './FeaturedQuote.module.scss';
type Props = {};

const FeaturedQuote = (props: Props) => {
  return (
    <Section>
      <div className={styles.container}>FeaturedQuote</div>
    </Section>
  );
};

export default FeaturedQuote;
