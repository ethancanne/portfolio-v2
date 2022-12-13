import styles from './OtherProject.module.scss';
import { FiFolder } from 'react-icons/fi';
import { IoMdOpen } from 'react-icons/io';
type Props = {
  project: {
    title: string;
    description: string;
    link: string;
  };
};

const OtherProject = (props: Props) => {
  return (
    <a href={props.project.link} className={styles.container}>
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
      </div>
    </a>
  );
};

export default OtherProject;
