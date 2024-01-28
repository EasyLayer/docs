import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Content from '@site/src/components/HomePage';
import Heading from '@theme/Heading';

import content from './_index.content';

import styles from './index.module.css';

function HeroHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/dev-docs/getting-started/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Index(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={content.page.title} description={content.page.description}>
      <HeroHeader />
      <main>
        <Content />
      </main>
    </Layout>
  );
}
