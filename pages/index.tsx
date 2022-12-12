import { use, useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Intro from '../views/1-intro/Intro.view';
import About from '../views/2-about/About.view';
import FeaturedQuote from '../views/3-featuredQuote/FeaturedQuote.view';
import Expertise from '../views/4-expertise/Expertise.view';
import Journey from '../views/5-journey/Journey.view';
import FeaturedPortfolio from '../views/6-featuredPortfolio/FeaturedPortfolio.view';
import OtherPortfolio from '../views/7-otherPortfolio/OtherPortfolio.view';
import Connect from '../views/8-connect/Connect.view';

type Props = {};

const index = ({}: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('make-animate'))
            entry.target.classList.add('animate');

          if (entry.target.classList.contains('light')) {
            const darkElements = document.getElementsByClassName('make-dark');
            Array.from(darkElements).forEach((d) => d.classList.add('dark'));
          }
        } else {
          entry.target.classList.remove('animate');
          if (entry.target.classList.contains('light')) {
            const darkElements = document.getElementsByClassName('make-dark');
            Array.from(darkElements).forEach((d) => d.classList.remove('dark'));
          }
        }
      });
    });

    const observedElements = document.querySelectorAll('.observe');
    observedElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Page>
      <Intro />
      <About />
      <FeaturedQuote />
      <div className="observe light">
        <Expertise />
        <Journey />
      </div>
      <FeaturedPortfolio />
      <OtherPortfolio />
      <Connect />
    </Page>
  );
};

export default index;
