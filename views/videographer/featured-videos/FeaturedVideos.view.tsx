import styles from './FeaturedVideos.module.scss';

import { videos } from '../../../cms/data/portfolio/featuredVideos.json';
import FeaturedVideoItem from './featured-video-item/FeaturedVideoItem.component';

const FeaturedVideos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.featuredText}>
        Featured Videos <hr />
      </h1>

      {videos.map((video: any) => (
        <FeaturedVideoItem video={video} />
      ))}
    </div>
  );
};

export default FeaturedVideos;
