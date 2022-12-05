import Section from '../../layout/section/Section.layout';
import OtherProject from './components/OtherProject.component';
import styles from './OtherPortfolio.module.scss';
type Props = {};

const OtherPortfolio = (props: Props) => {
  return (
    <Section>
      <div>
        OtherPortfolio <OtherProject />
      </div>
    </Section>
  );
};

export default OtherPortfolio;
