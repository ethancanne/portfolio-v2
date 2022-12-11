import { useState } from 'react';
import Section from '../../layout/section/Section.layout';
import styles from './Expertise.module.scss';
import Picker from './components/picker/Picker.component';
import Content from './components/content/Content.component';
import expertItems from '../../cms/data/expertise.json';

type Props = {};

const Expertise = (props: Props) => {
  const [selected, setSelected] = useState(Object.keys(expertItems)[0]);
  return (
    <Section>
      <div className={styles.waveContainer}>
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          My <span className="blue">Expertise</span>
        </h1>
        <p className={styles.subTitle}>
          Languages, technologies and frameworks,
          <br />
          throughout the development stack
        </p>

        <div className={styles.expertiseContainer}>
          <Picker selected={selected} setSelected={setSelected} />
          <Content selected={selected} />
        </div>
      </div>
    </Section>
  );
};

export default Expertise;
