import styles from './FeaturedProject.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';
import Image from 'next/image';
type Props = {
  item: {
    title: string;
    description: string;
    image: string;
    githubLink?: string;
    publishedLink?: string;
    technologies?: { name: string }[];
  };
};

const FeaturedProject = (props: Props) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(0deg,rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(/${props.item.image})`,
      }}
    >
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.featuredText}>Featured Project</p>
          <h1 className={styles.titleText}>{props.item.title}</h1>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{props.item.description}</p>
          <div className={styles.technologies}>
            {props.item.technologies?.map((tech) => (
              <div className={styles.technology}>{tech.name}</div>
            ))}
          </div>
          <div className={styles.links}>
            {props.item.githubLink && (
              <a href={props.item.githubLink}>
                <AiFillGithub />
              </a>
            )}
            {props.item.publishedLink && (
              <a href={props.item.publishedLink}>
                <IoMdOpen />
              </a>
            )}
          </div>
        </div>
      </div>

      <a href={props.item.publishedLink} className={styles.imageContainer}>
        <div
          style={{
            background: `linear-gradient(0deg,rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(/${props.item.image})`,
          }}
          className={styles.image}
        />
      </a>
    </div>
  );
};

export default FeaturedProject;
