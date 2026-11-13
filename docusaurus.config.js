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
