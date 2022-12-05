/* eslint-disable @next/next/no-head-element */
import Head from 'next/head';
import '../styles/globals.css';

type Props = {
  Component: any;
  pageProps: any;
};
const PortfolioApp = (props: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta property="og:description" content="" />
      </Head>

      <props.Component {...props.pageProps} />
    </>
  );
};

export default PortfolioApp;
