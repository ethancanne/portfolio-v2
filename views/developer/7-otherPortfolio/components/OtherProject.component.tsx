import styles from './OtherProject.module.scss';
import { FiFolder } from 'react-icons/fi';
import { IoMdOpen } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
type Props = {
  project: {
    title: string;
    description: string;
    link: string;
    technologies: { name: string }[];
  };
};

const OtherProject = (props: Props) => {
  return (
    <motion.a
      href={props.project.link}
      className={styles.container}
      whileHover={{
        marginTop: '-2px',
        backgroundColor: '#000000',
        transition: {
          duration: 0.1,
          type: 'spring',
          stiffness: 200,
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
          type: 'spring',
          stiffness: 200,
        },
      }}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      exit={{ y: 60, opacity: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }}
    >
      <div className={styles.topContainer}>
        <FiFolder className={styles.icon} />
        <a
          href={props.project.link}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdOpen />
        </a>
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{props.project.title}</h1>
        <p className={styles.description}>{props.project.description}</p>
        <div className={styles.technologies}>
          {props.project.technologies.map((technology, index) => (
            <div className={styles.technology} key={index}>
              {technology.name}
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default OtherProject;
