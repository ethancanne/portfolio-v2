import styles from './Section.module.scss';

type Props = {
  children: React.ReactNode;
};

const Section = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Section;
