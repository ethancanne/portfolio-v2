/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css';
import Header from '../layout/header/Header.layout';
import Social from '../layout/social/Social.layout';
import Footer from '../layout/footer/Footer.layout';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Social />
        <Header />

        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
