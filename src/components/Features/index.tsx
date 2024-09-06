import clsx from 'clsx';

import styles from './styles.module.css';

const FeaturesList = [
  {
    title: 'Open Source',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Svg: require('../../../static/img/opensource.svg').default,
    link: '/todo',
    description: <>TODO</>,
  },
  {
    title: 'Own Protocol',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Svg: require('../../../static/img/opensource.svg').default,
    link: '/todo',
    description: <>TODO</>,
  },
  {
    title: 'Self Hosted',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Svg: require('../../../static/img/selfhosted.svg').default,
    link: '/todo',
    description: <>TODO</>,
  },
];

function Feature({ Svg, title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.feature}>
      <div className="container">
        <div className="row">
          {FeaturesList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
