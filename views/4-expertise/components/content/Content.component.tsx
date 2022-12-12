import styles from './Content.module.scss';
import expertItems from '../../../../cms/data/expertise.json';
import { useEffect } from 'react';
type Props = {
  selected: { content: string; technologies: { name: string }[] };
};

const Content = (props: Props) => {
  useEffect(() => {
    var reflows = document.getElementsByClassName('reflow');
    Array.from(reflows).forEach((element: any) => {
      element.style.animation = 'none';
      console.log(element.offsetHeight);
      element.style.animation = '';
    });
  }, [props.selected]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.content + ' reflow'}>{props.selected.content}</p>
        <ul className={styles.technologies}>
          {props.selected.technologies.map((tech) => (
            <div className={styles.technology}>
              <li className={styles.technologyName + ' reflow'}>{tech.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
