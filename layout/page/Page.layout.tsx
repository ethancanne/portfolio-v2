import styles from './Page.module.scss';
import Header from '../../layout/header/Header.layout';
import Social from '../../layout/social/Social.layout';
import Footer from '../../layout/footer/Footer.layout';
type Props = {
  children: React.ReactNode;
};

const Page = (props: Props) => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <Social />
      {props.children}
      <Footer />{' '}
    </div>
  );
};

export default Page;
