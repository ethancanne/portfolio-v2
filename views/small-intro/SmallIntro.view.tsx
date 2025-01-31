import Section from '../../layout/section/Section.layout';
import styles from './SmallIntro.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
type Props = {
  title: any;
  color: any;
  info: any;
  background: any;
  showInfo?: boolean;
};

const SmallIntro = (props: Props) => {
  return (
    <Section>
      <div className={styles.container} id="intro">
        <div className={styles.textContainer}>
          <Link href={'/'} className={styles.name}>
            Ethan Cannelongo
          </Link>
          <h1 className={styles.subText} style={{ color: props.color }}>
            {props.title}
          </h1>
        </div>
        {props.showInfo && (
          <div
            className={styles.infoContainer}
            style={{ backgroundImage: `url(${props.background})` }}
          >
            <p className={styles.info}>{props.info}</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default SmallIntro;
