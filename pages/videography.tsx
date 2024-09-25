import Page from '../layout/page/Page.layout';
import SmallIntro from '../views/small-intro/SmallIntro.view';
import FeaturedVideos from '../views/videographer/featured-videos/FeaturedVideos.view';
import OtherVideos from '../views/videographer/other-videos/OtherVideos.view';
import pages from '../cms/data/pageData.json';

type Props = {};

const index = ({}: Props) => {
  const page = pages.pages.find((page) => page.link === '/videography');
  return (
    <Page>
      <SmallIntro
        title={page?.title}
        color={page?.color}
        info={page?.description}
        background={page?.image}
      />
      <FeaturedVideos />
      <OtherVideos />
    </Page>
  );
};

export default index;
