import Section from '../../layout/section/Section.layout';
import FeaturedProject from './components/FeaturedProject.component';
import styles from './Expertise.module.scss';
type Props = {};

const FeaturedPortfolio = (props: Props) => {
  return (
    <Section>
      <div>
        FeaturedPortfolio <FeaturedProject />
      </div>
    </Section>
  );
};

export default FeaturedPortfolio;
