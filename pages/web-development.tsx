import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import About from '../views/developer/2-about/About.view';
import FeaturedQuote from '../views/developer/3-featuredQuote/FeaturedQuote.view';
import Expertise from '../views/developer/4-expertise/Expertise.view';
import Journey from '../views/developer/5-journey/Journey.view';
import FeaturedPortfolio from '../views/developer/6-featuredPortfolio/FeaturedPortfolio.view';
import OtherPortfolio from '../views/developer/7-otherPortfolio/OtherPortfolio.view';
import Connect from '../views/developer/8-connect/Connect.view';
import SmallIntro from '../views/small-intro/SmallIntro.view';
import pages from '../cms/data/pageData.json';

type Props = {};

const index = ({}: Props) => {
  const page = pages.pages.find((page) => page.link === '/web-development');
  return (
    <Page>
      <SmallIntro
        title={page?.title}
        color={page?.color}
        info={page?.description}
        background={page?.image}
      />
      {/* <About /> */}
      <FeaturedQuote />
      <Expertise />
      <Journey />
      <FeaturedPortfolio />
      <OtherPortfolio />
      <Connect />
    </Page>
  );
};

export default index;
