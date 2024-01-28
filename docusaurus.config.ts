import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Easy Layer Documentation',
  tagline: 'Base Solution',
  favicon: 'img/favicon.ico', //TODO

  // Set the production url of your site here
  url: 'https://docs.easylayer.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EasyLayer', // Usually your GitHub org/user name.
  projectName: 'base', // Usually your repo name.

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
          docId: 'dev-docs/getting-started/intro',
          label: 'Docs', 
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'rest-api/base/intro',
          label: 'REST API', 
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'contribute/intro',
          label: 'Want to contribute?',
          position: 'left',
        },
        {
          href: 'https://easylayer.io/products',
          label: 'Request Enterprise Solution',
          position: 'right',
        },
        {
          href: 'https://github.com/easylayer/',
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
              label: 'Docs',
              to: '/dev-docs/getting-started/intro',
            },
            {
              label: 'REST API',
              to: '/rest-api/core/intro',
            },
            {
              label: 'Request Enterprise Solution',
              href: 'https://easylayer.io/products',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://github.com/EasyLayer/base/discussions',
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
