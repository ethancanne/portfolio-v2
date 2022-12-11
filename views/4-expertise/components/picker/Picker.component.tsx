import styles from './Picker.module.scss';
import { MdComputer } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { MdDesignServices } from 'react-icons/md';
import expertItems from '../../../../cms/data/expertise.json';

type Props = {
  selected: { title: string };
  setSelected: (selected: {
    title: string;
    content: string;
    technologies: { name: string }[];
  }) => void;
};

const Picker = (props: Props) => {
  const icons = {
    Frontend: <MdComputer />,
    Backend: <MdCode />,
    'UI Design': <MdDesignServices />,
  };
  return (
    <div className={styles.container}>
      {Object.values(expertItems.items).map((item) => (
        <div className={styles.picker}>
          <div
            className={
              props.selected.title === item.title
                ? styles.pickerItem + ' ' + styles.active
                : styles.pickerItem
            }
            onClick={() => props.setSelected(item)}
          >
            {(icons as any)[item.title]}
            <h2 className={styles.pickerTitle}>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Picker;
