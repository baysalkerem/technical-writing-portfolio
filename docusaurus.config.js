const diagramFont = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const diagramStyles = `
  .node :is(rect, polygon), rect.actor {
    fill: var(--diagram-node);
    stroke: var(--diagram-border);
    stroke-width: 1.5px;
  }
  .node rect, rect.actor { rx: 8px; ry: 8px; }
  .nodeLabel, .edgeLabel { color: var(--diagram-text); }
  .nodeLabel { font-weight: 600; }
  .node.decision polygon, rect.actor {
    fill: var(--diagram-accent-surface);
    stroke: var(--diagram-accent);
  }
  .node.success rect {
    fill: var(--diagram-success-surface);
    stroke: var(--diagram-success);
  }
  .node.hold rect {
    fill: var(--diagram-hold-surface);
    stroke: var(--diagram-hold);
  }
  .edgeLabel, .edgeLabel p, .labelBkg {
    background-color: var(--diagram-surface);
    border-radius: 4px;
  }
  .edgeLabel { font-weight: 650; }
  .flowchart-link, .messageLine0, .messageLine1 {
    stroke: var(--diagram-line);
    stroke-width: 1.7px;
  }
  .marker, [id$="-arrowhead"] path {
    fill: var(--diagram-line);
    stroke: var(--diagram-line);
  }
  .actor-line {
    stroke: var(--diagram-border);
    stroke-dasharray: 4 4;
    stroke-width: 1.2px;
  }
  .messageLine1 { stroke-dasharray: 5 4; }
  .loopLine { stroke: var(--diagram-border); stroke-width: 1.2px; }
  .labelBox { fill: var(--diagram-accent-surface); stroke: var(--diagram-border); }
  text.actor > tspan, .messageText, .labelText, .labelText > tspan,
  .loopText, .loopText > tspan, .sectionTitle, .sectionTitle > tspan {
    fill: var(--diagram-text);
  }
  .loopText { font-weight: 650; }
`;

const config = {
  title: 'Kerem Baysal | Technical writing',
  tagline: 'User and administrator documentation samples',
  favicon: 'img/favicon.svg',
  url: 'https://baysalkerem.github.io',
  baseUrl: '/technical-writing-portfolio/',
  organizationName: 'baysalkerem',
  projectName: 'technical-writing-portfolio',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'warn'}},
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [['classic', {
    docs: {routeBasePath: 'docs', sidebarPath: './sidebars.js', editUrl: undefined},
    blog: false,
    theme: {customCss: './src/css/custom.css'}
  }]],
  themeConfig: {
    mermaid: {
      theme: {light: 'base', dark: 'base'},
      options: {
        fontFamily: diagramFont,
        themeCSS: diagramStyles,
        flowchart: {nodeSpacing: 18, rankSpacing: 28, padding: 9, wrappingWidth: 132, curve: 'monotoneY'},
        sequence: {
          actorFontFamily: diagramFont,
          actorFontWeight: 650,
          messageFontFamily: diagramFont,
          messageFontSize: 14,
          actorMargin: 36,
          diagramMarginX: 8,
          height: 44,
          messageMargin: 28,
          mirrorActors: false,
          width: 100,
          wrap: true,
          wrapPadding: 6,
        },
      },
    },
    navbar: {
      title: 'Nexus Connect',
      items: [
        {type: 'docSidebar', sidebarId: 'docs', label: 'Writing samples', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/baysalkerem/technical-writing-portfolio',
          html: '<span class="profile-icon" aria-hidden="true"></span><span class="profile-label">GitHub</span>',
          className: 'profile-link profile-link--github',
          position: 'right',
          title: 'GitHub repository',
          'aria-label': 'GitHub repository (opens in a new tab)',
        },
        {
          href: 'https://www.linkedin.com/in/mehmet-kerem-baysal/',
          html: '<span class="profile-icon" aria-hidden="true"></span><span class="profile-label">LinkedIn</span>',
          className: 'profile-link profile-link--linkedin',
          position: 'right',
          title: 'LinkedIn profile',
          'aria-label': 'LinkedIn profile (opens in a new tab)',
        },
        {
          href: 'https://www.upwork.com/freelancers/~01b6e792ed6fd22327?mp_source=share',
          html: '<span class="profile-icon" aria-hidden="true"></span><span class="profile-label">Upwork</span>',
          className: 'profile-link profile-link--upwork',
          position: 'right',
          title: 'Upwork profile',
          'aria-label': 'Upwork profile (opens in a new tab)',
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Kerem Baysal. Fictional documentation samples.`,
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: false},
  }
};
module.exports = config;
