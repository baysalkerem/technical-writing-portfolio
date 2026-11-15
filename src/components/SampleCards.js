import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SampleCards.module.css';

const samples = [
  {
    title: 'User guide',
    audience: 'Contact center agents',
    task: 'Set availability and handle chats',
    to: '/docs/user-guide/overview',
  },
  {
    title: 'Administrator guide',
    audience: 'System administrators',
    task: 'Manage users and configure routing',
    to: '/docs/admin-guide/overview',
  },
  {
    title: 'Connect a CRM integration',
    audience: 'Integration administrators',
    task: 'Set up and verify a CRM connection',
    to: '/docs/integrations/crm-connection',
  },
  {
    title: 'Upgrade a deployment',
    audience: 'Platform operators',
    task: 'Verify interaction delivery before and after an upgrade',
    to: '/docs/operations/upgrade-workflow',
  },
  {
    title: 'Troubleshoot common issues',
    audience: 'Platform operators',
    task: 'Diagnose issues and escalate to the responsible team',
    to: '/docs/operations/troubleshooting',
  },
];

export default function SampleCards() {
  return (
    <ul className={styles.cards} aria-label="Writing samples">
      {samples.map(({title, audience, task, to}) => (
        <li key={to} className={styles.item}>
          <Link className={styles.card} to={to}>
            <span className={styles.audience}>{audience}</span>
            <span className={styles.title}>{title}</span>
            <span className={styles.task}>{task}</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
