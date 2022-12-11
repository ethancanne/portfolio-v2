import { useState } from 'react';
import styles from './ExperienceDropdown.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
type Props = {
  item: {
    title: string;
    position: string;
    timeFrame: string;
    isPresent: boolean;
    points: { content: string }[];
  };
};

const ExperienceDropdown = (props: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.container} onClick={() => setSelected(!selected)}>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown}>
          <p className={styles.title}>
            {props.item.title} - <span>{props.item.position}</span>
          </p>
          <p className={styles.timeframe}>{props.item.timeFrame}</p>
        </div>
        <IoIosArrowDown
          className={
            selected ? styles.arrow + ' ' + styles.active : styles.arrow
          }
        />
      </div>
      <div
        className={
          selected ? styles.points + ' ' + styles.active : styles.points
        }
      >
        <ul>
          {props.item.points.map((point) => (
            <li className={styles.point}>{point.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDropdown;
