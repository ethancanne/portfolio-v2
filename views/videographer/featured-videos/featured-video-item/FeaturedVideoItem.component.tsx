import Link from 'next/link';
import styles from './FeaturedVideoItem.module.scss';
import { FaLocationDot } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';

type Props = {
  video: {
    title: string;
    description: string;
    location: string;
    date: string;
    youtubeCode: string;
    isPlaylist: boolean;
    youtubeThumbnailCode: string;
  };
};
const FeaturedVideoItem = ({ video }: Props) => {
  return (
    <Link
      href={
        video.isPlaylist
          ? 'https://www.youtube.com/playlist?list=' + video.youtubeCode
          : 'https://www.youtube.com/watch?v=' + video.youtubeCode
      }
      className={styles.container}
      key={video.title}
      style={{
        backgroundImage: !video.isPlaylist
          ? `url(https://img.youtube.com/vi/${video.youtubeCode}/maxresdefault.jpg)`
          : `url(https://img.youtube.com/vi/${video.youtubeThumbnailCode}/maxresdefault.jpg)`,
      }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.videoTitle}>{video.title}</h1>
        <p className={styles.videoDescription}>{video.description}</p>
      </div>
      <div className={styles.subInfoContainer}>
        <div className={styles.subInfo}>
          <FaLocationDot className={styles.icon} />
          <p>{video.location}</p>
        </div>
        <div className={styles.subInfo}>
          <FaClock className={styles.icon} />
          <p>{video.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedVideoItem;
