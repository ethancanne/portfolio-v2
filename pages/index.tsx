import Intro from '../views/1-intro/Intro.view';
import About from '../views/2-about/About.view';
import FeaturedQuote from '../views/3-featuredQuote/FeaturedQuote.view';
import Expertise from '../views/4-expertise/Expertise.view';
import Journey from '../views/5-journey/Journey.view';
import FeaturedPortfolio from '../views/6-featuredPortfolio/FeaturedPortfolio.view';
import OtherPortfolio from '../views/7-otherPortfolio/OtherPortfolio.view';
import Connect from '../views/8-connect/Connect.view';
import Header from '../layout/header/Header.layout';
import Social from '../layout/social/Social.layout';
import Footer from '../layout/footer/Footer.layout';
type Props = {};

const index = ({}: Props) => {
  return (
    <div>
      <Header />
      <Social />
      <Intro />
      <About />
      <FeaturedQuote />
      <Expertise />
      <Journey />
      <FeaturedPortfolio />
      <OtherPortfolio />
      <Connect />
      <Footer />
    </div>
  );
};

export default index;
