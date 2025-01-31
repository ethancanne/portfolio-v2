import Link from 'next/link';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import OtherVideoItem from './other-video-item/OtherVideos.component';
import styles from './OtherVideos.module.scss';
import { videos } from '../../../cms/data/portfolio/otherVideos.json';
const OtherVideos = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.otherText}>
        Other Videos <hr />
      </h1>
      <div className={styles.container}>
        {videos.map((video: any) => (
          <OtherVideoItem video={video} />
        ))}
      </div>
    </div>
  );
};

export default OtherVideos;
