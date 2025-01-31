import styles from './Contact.module.scss';
import aboutMe from '../../../cms/data/aboutMe.json';
import Image from 'next/image';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link';

type Props = {
  pageBackground: any;
  pageInfo: any;
};

const Contact = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            alt={'Ethan Cannelongo'}
            src={aboutMe.videographyImage}
            width={400}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.infoContainer}>
          <div
            className={styles.textContainer}
            style={{
              backgroundImage: `url(${props.pageBackground})`,
            }}
          >
            <h1 className={styles.title}>Capturing Moments, Creating Impact</h1>
            <p className={styles.info}>{props.pageInfo}</p>
            <div className={styles.tags}>
              <p className={styles.tag}>Weddings</p>
              <p className={styles.tag}>Events</p>
              <p className={styles.tag}>Music Videos</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Link
              className={styles.contactButton}
              href={'mailto:me@ethancannelongo.com'}
            >
              <p>Contact</p>
              <HiMail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
