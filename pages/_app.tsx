/* eslint-disable @next/next/no-head-element */
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/globals.scss';
import Script from 'next/script';

type Props = {
  Component: any;
  pageProps: any;
};
const PortfolioApp = (props: Props) => {
  useEffect(() => {
    if ((window as any).netlifyIdentity) {
      (window as any).netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          (window as any).netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta
          property="og:description"
          content="Ethan Cannelongo is a full-stack engineer specializing in building and designing exceptional digital experiences"
        />
      </Head>

      <props.Component {...props.pageProps} />
    </>
  );
};

export default PortfolioApp;
