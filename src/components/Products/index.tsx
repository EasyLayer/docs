import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

// https://uxwing.com
const ProductsList = [
  {
    title: 'Loader',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Svg: require('../../../static/img/loader.svg').default,
    description: (
      <>
        <Link to="/intro/main-concepts/loader">Loader</Link> allows you to fetch data from the blockchain and store it
        in relational SQL databases, enabling basic data queries. It efficiently handles large volumes of data. Using
        our custom protocol, users can define their own data schema for extracting information from the blockchain.
      </>
    ),
  },
  {
    title: 'Indexer',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Svg: require('../../../static/img/indexer.svg').default,
    description: (
      <>
        <Link to="/intro/main-concepts/indexer">Indexer</Link> allows you to load blockchain data into a key-value store
        and perform basic data queries. It is extremely fast and efficient. Our custom protocol enables users to define
        their own data models for retrieving information from the blockchain.
      </>
    ),
  },
  {
    title: 'Listener',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Svg: require('../../../static/img/listener.svg').default,
    description: (
      <>
        <Link to="/intro/main-concepts/listener">Listener</Link> allows you to subscribe to various blockchain events
        and broadcast them to the client. It requires no disk space since it does not store all the data. Using our
        custom protocol, users can define event models they want to receive from the blockchain.
      </>
    ),
  },
  {
    title: 'Wallet',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Svg: require('../../../static/img/wallet.svg').default,
    description: (
      <>
        <Link to="/intro/main-concepts/wallet">Wallet</Link> is a ready-to-use cryptocurrency wallet with an encrypted
        storage system, allowing you to manage multiple keys and create and send transactions. It provides a REST API
        for easy integration and interaction.
      </>
    ),
  },
];

function Product({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.productSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.products}>
      <div className="container">
        <h2 className="text--center">Our Solutions</h2>
        <div className="row">
          {ProductsList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
