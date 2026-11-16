import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SampleCards.module.css';

const infrastructureSamples = [
  {
    title: 'Recover a failed virtual machine',
    audience: 'Infrastructure operators',
    task: 'Recover from a failed upgrade and validate an isolated candidate',
    to: '/docs/infrastructure-operations/recover-failed-vm',
  },
  {
    title: 'Validate network connectivity',
    audience: 'Network operators',
    task: 'Verify routing, DNS, and HTTPS after a deployment change',
    to: '/docs/infrastructure-operations/validate-network-connectivity',
  },
];

const integrationAndOperationsSamples = [
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

const librarySamples = [
  {
    title: 'Infrastructure Operations',
    audience: 'Infrastructure and network operators',
    task: 'Recover a virtual machine and validate network connectivity',
    to: '/docs/infrastructure-operations/overview',
  },
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
    title: 'Integrations',
    audience: 'Integration administrators',
    task: 'Connect a CRM and verify the data agents see',
    to: '/docs/integrations/overview',
  },
  {
    title: 'Operations',
    audience: 'Platform operators',
    task: 'Validate upgrades and troubleshoot common issues',
    to: '/docs/operations/overview',
  },
];

export const homepageSamples = [
  ...infrastructureSamples,
  {
    title: 'Set your availability',
    audience: 'Contact center agents',
    task: 'Get ready for incoming interactions or pause new offers',
    to: '/docs/user-guide/manage-availability',
  },
  {
    title: 'Handle a chat interaction',
    audience: 'Contact center agents',
    task: 'Reply to a customer and record the outcome',
    to: '/docs/user-guide/handle-interaction',
  },
  {
    title: 'Create an agent account',
    audience: 'System administrators',
    task: 'Assign an agent to a queue and verify account activation',
    to: '/docs/admin-guide/create-user',
  },
  {
    title: 'Configure longest-idle routing',
    audience: 'System administrators',
    task: 'Set the routing policy and verify who receives the first offer',
    to: '/docs/admin-guide/configure-routing',
  },
  ...integrationAndOperationsSamples,
];

export default function SampleCards({samples = librarySamples}) {
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
