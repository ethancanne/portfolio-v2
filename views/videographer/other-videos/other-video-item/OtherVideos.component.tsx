import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import styles from './OtherVideos.module.scss';

type Props = {
  video: {
    title: string;
    youtubeCode: string;
    location: string;
    date: string;
    youtubeThumbnailCode: string;
    isPlaylist: boolean;
  };
};
const OtherVideoItem = ({ video }: Props) => {
  return (
    <Link
      href={
        video.isPlaylist
          ? 'https://www.youtube.com/playlist?list=' + video.youtubeCode
          : 'https://www.youtube.com/watch?v=' + video.youtubeCode
      }
      className={styles.container}
      key={video.title}
    >
      <div className={styles.imageContainer}>
        <Image
          src={
            !video.isPlaylist
              ? `https://img.youtube.com/vi/${video.youtubeCode}/maxresdefault.jpg`
              : `https://img.youtube.com/vi/${video.youtubeThumbnailCode}/maxresdefault.jpg`
          }
          alt={video.title}
          className={styles.image}
          width={600}
          height={300}
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.videoTitle}>{video.title}</p>
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

export default OtherVideoItem;
