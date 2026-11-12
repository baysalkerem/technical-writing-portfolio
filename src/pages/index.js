import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const sections = [
  {
    title: 'User Guide',
    samples: [
      {title: 'Set your availability', to: '/docs/user-guide/manage-availability'},
      {title: 'Handle a chat interaction', to: '/docs/user-guide/handle-interaction'},
    ],
  },
  {
    title: 'Administrator Guide',
    samples: [
      {title: 'Create an agent account', to: '/docs/admin-guide/create-user'},
      {title: 'Configure longest-idle routing', to: '/docs/admin-guide/configure-routing'},
    ],
  },
  {
    title: 'Integrations',
    samples: [
      {title: 'Connect a CRM integration', to: '/docs/integrations/crm-connection'},
    ],
  },
  {
    title: 'Operations',
    samples: [
      {title: 'Upgrading a deployment', to: '/docs/operations/upgrade-workflow'},
      {title: 'Troubleshoot common issues', to: '/docs/operations/troubleshooting'},
    ],
  },
];

export default function Home() {
  return (
    <Layout
      title="Technical Writing Portfolio"
      description="User, administrator, integration, and operations documentation samples by Kerem Baysal.">
      <main className={styles.index}>
        <header className={styles.intro}>
          <h1>Technical writing portfolio</h1>
          <p>
            Writing samples for Nexus Connect, a fictional enterprise cloud
            communications platform.
          </p>
        </header>

        {sections.map(({title, samples}) => (
          <section className={styles.section} key={title}>
            <h2>{title}</h2>
            <ul>
              {samples.map(({title, to}) => (
                <li key={to}><Link to={to}>{title}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </Layout>
  );
}
