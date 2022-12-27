import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Foreword',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/writeup/intro",
    description: (
      <>
        My foreword to this edition of SANS Holiday Hack Challenge
      </>
    ),
  },
  {
    title: 'Orientation',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/writeup/KringleCon%20Orientation",
    description: (
      <>
        The very first tasks to solve before the game begins
      </>
    ),
  },
  {
    title: 'Recover Tolkien Ring',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/category/recover-tolkien-ring",
    description: (
      <>
        How to investigate Wireshark and Windows Event Logs and writing Suricate rules
      </>
    ),
  },
  {
    title: 'Recover Elfen Ring',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/category/recover-elfen-ring",
    description: (
      <>
        How to Git clone, escape from prison and exploting CI/DI pipeline
      </>
    ),
  },
  {
    title: 'Recover Web Ring',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/category/recover-web-ring",
    description: (
      <>
        How to investigate logs and opening a door
      </>
    ),
  },
  {
    title: 'Recover Cloud Ring',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/category/recover-cloud-ring",
    description: (
      <>
        How to have fun with AWS and hunting for truffles
      </>
    ),
  },
  {
    title: 'Recover the Burning Ring of Fire',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/category/recover-the-burning-ring-of-fire",
    description: (
      <>
        How to buy a hat, explore blockchains and buying NFT
      </>
    ),
  },
  {
    title: 'Finale  ',
    Svg: require('@site/static/img/weather.svg').default,
    link: "docs/writeup/finale",
    description: (
      <>
        The End of the Game
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} class="snowflake" role="img" />
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
