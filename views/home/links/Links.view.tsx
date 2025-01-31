import React from 'react';
import styles from './Links.module.scss';
import { FaCode } from 'react-icons/fa6';
import { FaVideo } from 'react-icons/fa';
import Link from 'next/link';
import pages from '../../../cms/data/pageData.json';
const Links = () => {
  const videographyPage = pages.pages.find(
    (page) => page.link === '/videography'
  )!;
  const webDevelopmentPage = pages.pages.find(
    (page) => page.link === '/web-development'
  )!;
  const links = [
    {
      title: webDevelopmentPage.title,
      icon: <FaCode />,
      color: webDevelopmentPage.color,
      gradientColor1: '#72a5e5',
      gradientColor2: '#7fc3ae',
      image: webDevelopmentPage.image,
      description: webDevelopmentPage.shortDescription,
      href: '/web-development',
    },
    {
      title: videographyPage.title,
      icon: <FaVideo />,
      color: videographyPage.color,
      gradientColor1: '#584FD0',
      gradientColor2: '#8E7150',
      image: videographyPage.image,
      description: videographyPage.shortDescription,
      href: '/videography',
    },
  ];
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className={styles.linkContainer}
          style={{
            backgroundImage: `url('${link.image}')`,
          }}
        >
          <div
            className={styles.iconContainer}
            style={{
              background: `linear-gradient( -45deg, ${link.gradientColor1}, ${link.gradientColor2})`,
            }}
          >
            <div className={styles.icon}>{link.icon}</div>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title} style={{ color: link.color }}>
              {link.title}
            </h1>
            <p className={styles.description}>{link.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Links;
