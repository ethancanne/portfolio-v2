import styles from './Header.module.scss';
type Props = {};
import { BsGridFill } from 'react-icons/bs';

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>E</h1>
      </div>
      <div className={styles.menu}>
        <BsGridFill />
      </div>
    </div>
  );
};

export default Header;
