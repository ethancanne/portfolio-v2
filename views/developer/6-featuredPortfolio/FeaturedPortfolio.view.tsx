import Section from '../../../layout/section/Section.layout';
import FeaturedProject from './components/FeaturedProject.component';
import styles from './FeaturedPortfolio.module.scss';
import featuredProjects from '../../../cms/data/portfolio/featuredProjects.json';
type Props = {};

const FeaturedPortfolio = (props: Props) => {
  return (
    <Section>
      <div className={styles.container} id="portfolio">
        <div className={styles.title}>
          <h1>
            My <span className="green">Portfolio</span>
          </h1>
          <p>Some of my featured projects</p>
        </div>{' '}
        {featuredProjects.items.map((item, index) => (
          <FeaturedProject item={item} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default FeaturedPortfolio;
