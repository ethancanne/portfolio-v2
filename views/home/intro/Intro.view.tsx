import React from 'react';
import styles from './Intro.module.scss';
import { motion } from 'framer-motion';
import aboutMe from '../../../cms/data/aboutMe.json';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.name}>Ethan Cannelongo</h1>
          <p className={styles.info}>{aboutMe.content}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div>
          <Image
            alt={'Ethan Cannelongo'}
            src={'/' + aboutMe.image}
            width={350}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
