// Update url and organizationName before deploying.
const config = {
  title: 'Kerem Baysal | Technical Writing',
  tagline: 'Documentation that works.',
  favicon: 'img/favicon.svg',
  url: 'https://YOUR_GITHUB_USERNAME.github.io',
  baseUrl: '/technical-writing-portfolio/',
  organizationName: 'YOUR_GITHUB_USERNAME',
  projectName: 'technical-writing-portfolio',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [['classic', {
    docs: {routeBasePath: 'docs', sidebarPath: './sidebars.js', editUrl: undefined},
    blog: false,
    theme: {customCss: './src/css/custom.css'}
  }]],
  themeConfig: {
    navbar: {title: 'KEREM / DOCS', items: [
      {to: '/docs/intro', label: 'Documentation', position: 'left'},
      {to: '/about', label: 'About', position: 'left'},
      {href: 'https://github.com/YOUR_GITHUB_USERNAME', label: 'GitHub', position: 'right'}
    ]},
    footer: {style: 'dark', links: [{title: 'Explore', items: [{label: 'Documentation', to: '/docs/intro'}, {label: 'About', to: '/about'}]}], copyright: `© ${new Date().getFullYear()} Kerem Baysal. Fictional documentation samples.`},
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true}
  }
};
module.exports = config;
