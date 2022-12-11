import styles from './Picker.module.scss';
import { MdComputer } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { MdDesignServices } from 'react-icons/md';
import expertItems from '../../../../cms/data/expertise.json';

type Props = {
  selected: string;
  setSelected: (selected: string) => void;
};

const Picker = (props: Props) => {
  const icons = {
    frontend: <MdComputer />,
    backend: <MdCode />,
    'ui-design': <MdDesignServices />,
  };
  return (
    <div className={styles.container}>
      {Object.keys(expertItems).map((item) => (
        <div className={styles.picker}>
          <div
            className={
              props.selected === item
                ? styles.pickerItem + ' ' + styles.active
                : styles.pickerItem
            }
            onClick={() => props.setSelected(item)}
          >
            {(icons as any)[item]}
            <h2 className={styles.pickerTitle}>
              {item.toUpperCase().replaceAll('-', ' ')}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Picker;
