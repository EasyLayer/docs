import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import Products from '@site/src/components/Products';
// import Features from '@site/src/components/Features';

import content from './_index.content';

export default function Index(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={content.page.title} description={content.page.description}>
      <Header />
      <main>
        <Products />
        {/* <Features /> */}
      </main>
    </Layout>
  );
}
