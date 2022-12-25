import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Introduction',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/objectives/intro",
    description: (
      <>
        My introduction to this edition of SANS Holiday Hack Challenge
      </>
    ),
  },
  {
    title: 'Orientation',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/objectives/KringleCon%20Orientation",
    description: (
      <>
        The very first tasks to solve before the game begins
      </>
    ),
  },
  {
    title: 'Recover Tolkien Ring',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/category/recover-tolkien-ring",
    description: (
      <>
        First Ring Layer: focus on Wireshark and Windows logs.
      </>
    ),
  },
  {
    title: 'Recover Elfen Ring',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/category/recover-elfen-ring",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Recover Web Ring',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/category/recover-web-ring",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Recover Cloud Ring',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/category/recover-cloud-ring",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Recover the Burning Ring of Fire',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/category/recover-the-burning-ring-of-fire",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Finale  ',
    Svg: require('@site/static/img/ring.svg').default,
    link: "docs/objectives/finale",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
