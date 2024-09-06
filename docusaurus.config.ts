import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EasyLayer.io',
  tagline: 'Self hosted tools for integration crypto processing into your business',
  favicon: 'img/favicon.ico', //TODO

  // Set the production url of your site here
  url: 'https://docs.easylayer.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EasyLayer', // Usually your GitHub org/user name.
  projectName: 'easylayer', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Indicates directory where the Markdown files for documentation are stored.
          path: 'docs',

          // Defines the base URL where documentation will be available.
          routeBasePath: '/',

          // Points to a file that defines the structure of the documentation side menu.
          sidebarPath: './sidebars.ts',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/easylayer/docs.git',

          // determines which version of documentation is displayed by default.
          lastVersion: 'current',
        },
        theme: {
          // Allows you to set the path to your custom CSS file, allowing you to customize site styles.
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true, // Disables theme switcher
      defaultMode: 'light', // You can set 'light' or 'dark' as default
      respectPrefersColorScheme: false, // Ignore system theme settings
    },
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EasyLayer',
      logo: {
        alt: 'EasyLayer Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro/overview',
          label: 'Introduction', 
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'get-started/intro',
          label: 'Get Started', 
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'contribute/index',
          label: 'Want to contribute?',
          position: 'left',
        },
        {
          href: 'https://github.com/EasyLayer/el/discussions',
          label: 'Discussions',
          position: 'right',
        },
        {
          href: 'https://easylayer.io/products',
          label: 'Request Support Pack',
          position: 'right',
        },
        {
          href: 'https://github.com/easylayer/el',
          label: 'Star',
          position: 'right',
        },
        {
          href: 'https://github.com/easylayer',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/intro/overview',
            },
            {
              label: 'Get Started',
              to: '/get-started/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://github.com/EasyLayer/el/discussions',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/#',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/#',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Request Support Pack',
              href: 'https://easylayer.io/products',
            },
            {
              label: 'Blog',
              href: 'https://easylayer.io/blog/',
            },
            {
              label: 'Website',
              href: 'https://easylayer.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/easylayer',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EasyLayer Team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
