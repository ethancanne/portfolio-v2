import styles from './Footer.module.scss';
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Ethan Cannelongo</p>
      <p className={styles.text}>Designed & Built by Ethan Cannelongo</p>
    </div>
  );
};

export default Footer;
