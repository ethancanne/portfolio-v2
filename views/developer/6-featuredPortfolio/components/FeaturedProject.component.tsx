import styles from './FeaturedProject.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }}
      variants={{
        visible: { opacity: 1, y: 40 },
        hidden: { opacity: 0, y: 0 },
      }}
      className={styles.container}
      style={{
        background: `linear-gradient(0deg,rgba(0,0,0,0.95), rgba(0,0,0,0.78)), url(/${props.item.image})`,
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
            {props.item.technologies?.map((tech, index) => (
              <div className={styles.technology} key={index}>
                {tech.name}
              </div>
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

      <a
        href={props.item.publishedLink || props.item.githubLink}
        className={styles.imageContainer}
      >
        <motion.div
          whileHover={{
            scale: 1.04,

            background: `linear-gradient(0deg,rgba(64, 98, 87, 0), rgba(64, 98, 87, 0)), url(/${props.item.image})`,
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          style={{
            background: `linear-gradient(0deg,rgba(64, 98, 87, 0.8), rgb(64, 98, 87, 0.7)), url(/${props.item.image})`,
          }}
          className={styles.image}
        />
      </a>
    </motion.div>
  );
};

export default FeaturedProject;
