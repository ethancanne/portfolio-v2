import Section from '../../layout/section/Section.layout';
import ExperienceDropdown from './components/experienceDropdown/ExperienceDropdown.component';
import styles from './Journey.module.scss';
type Props = {};

const Journey = (props: Props) => {
  return (
    <Section>
      <div>
        Journey <ExperienceDropdown />
      </div>
    </Section>
  );
};

export default Journey;
