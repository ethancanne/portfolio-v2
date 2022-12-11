import styles from './Content.module.scss';
import expertItems from '../../../../cms/data/expertise.json';
import { useEffect } from 'react';
type Props = {
  selected: { content: any };
};

const Content = (props: Props) => {
  useEffect(() => {
    var el = document.getElementById('content')!;
    el.style.animation = 'none';
    console.log(el.offsetHeight);
    el.style.animation = '';
  }, [props.selected]);
  return (
    <div className={styles.container}>
      <p className={styles.content} id="content">
        {props.selected.content}
      </p>
    </div>
  );
};

export default Content;
