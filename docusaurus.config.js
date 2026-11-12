const config = {
  title: 'Kerem Baysal | Technical Writing',
  tagline: 'User and administrator documentation samples',
  favicon: 'img/favicon.svg',
  url: 'https://baysalkerem.github.io',
  baseUrl: '/technical-writing-portfolio/',
  organizationName: 'baysalkerem',
  projectName: 'technical-writing-portfolio',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [['classic', {
    docs: {routeBasePath: 'docs', sidebarPath: './sidebars.js', editUrl: undefined},
    blog: false,
    theme: {customCss: './src/css/custom.css'}
  }]],
  themeConfig: {
    navbar: {
      title: 'Kerem Baysal',
      items: [
        {type: 'docSidebar', sidebarId: 'docs', label: 'Writing samples', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {href: 'https://github.com/baysalkerem/technical-writing-portfolio', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Kerem Baysal. Fictional documentation samples.`,
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: false},
  }
};
module.exports = config;
