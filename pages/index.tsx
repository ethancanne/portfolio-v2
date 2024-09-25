import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Intro from '../views/home/intro/Intro.view';
import Links from '../views/home/links/Links.view';
type Props = {};

const index = ({}: Props) => {
  return (
    <Page>
      <Intro />
      <Links />
    </Page>
  );
};

export default index;
