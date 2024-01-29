import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.textSection}>
      <div className="container">
        <div className="row">
          <h1>Welcome to the EasyLayer Developer Docs!</h1>
          <p>
            This documentation contains official technical documentation related to the setup, deployment, update, and
            customization of your EasyLayer apps.
          </p>
          <h2>Open-source & Contribution</h2>
          <p>
            <strong>EasyLayer</strong> is an open-source project (see LICENSE file for more information). The core
            project, as well as the documentation and any related tool, can be found in the EasyLayer{' '}
            <a href="https://github.com/easylayer">GitHub</a> organization.
          </p>
          <p>
            As it goes hand in hand with the open-source ecosystem, EasyLayer is open to contributions. The EasyLayer
            team appreciates every contribution, be it a feature request, bug report, or pull request. The following
            GitHub repositories are open-source and contributions-friendly:
          </p>
          <ul>
            <li>
              <a href="https://github.com/easylayer/base">easylayer/base</a>: main repository of EasyLayer, which
              contains the base solution of our APIs. You can find the core plugins, and the whole code that runs your
              EasyLayer applications. Please read the CONTRIBUTING.md file to have more information about contributions
              to the main repository.
            </li>
            <li>
              <a href="https://github.com/easylayer/docs">easylayer/docs</a>: contains the whole documentation of
              EasyLayer.
            </li>
          </ul>
          <h2>Community</h2>
          <p>
            <strong>EasyLayer</strong> is a community-oriented project with an emphasis on transparency. The EasyLayer
            team has at heart to share their vision and build the future of EasyLayer with the EasyLayer community. This
            is why all insights are very important and will help steer the project in the right direction, any community
            member is most welcome to share ideas and opinions there.
          </p>
          <p>
            Want to join the community? You can join the{' '}
            <a href="https://github.com/EasyLayer/base/discussions">Forum</a> to share your ideas and opinions with
            other community members and members of the EasyLayer team. If you're looking for news and updates about
            EasyLayer, <a href="https://twitter.com/EasyLayerWeb3">Twitter</a> and the{' '}
            <a href="https://easylayer.io/blog">Blog</a> are pretty good places to start!
          </p>
          <h2>Support</h2>
          <p>
            <strong>EasyLayer</strong> is offered as free and open-source for users who wish to self-host the software.
            If you encounter an issue or have a question, please don't hesitate to reach out for help. Instead of using
            a forum, we encourage you to contact our support team directly via email.
          </p>
          <p>
            Feel free to send your inquiries to <a href="mailto:support@easylayer.io">support@easylayer.io</a>. Our
            support team is always ready to assist you.
          </p>
        </div>
      </div>
    </section>
  );
}
