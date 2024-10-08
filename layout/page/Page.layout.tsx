import styles from './Page.module.scss';
import Header from '../../layout/header/Header.layout';
import Social from '../../layout/social/Social.layout';
import Footer from '../../layout/footer/Footer.layout';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from '../menu/Menu.layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const Page = (props: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  const router = useRouter();
  useEffect(() => {
    //grab page id
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [router.pathname]);
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Ethan Cannelongo</title>
      </Head>
      <Header setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
      <AnimatePresence initial={false} mode="wait">
        {menuIsOpen && <Menu setMenuIsOpen={setMenuIsOpen} />}
      </AnimatePresence>
      <Social />
      {props.children}
      <Footer />{' '}
    </div>
  );
};

export default Page;
