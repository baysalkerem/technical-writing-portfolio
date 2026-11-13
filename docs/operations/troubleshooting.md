---
title: Troubleshoot common issues
pagination_next: null
---
import PortfolioNotice from '@site/src/components/PortfolioNotice';

# Troubleshoot common issues

<PortfolioNotice />

Use this guide to narrow down an issue before escalating to a platform administrator. Start with the checks available to your role and hand off checks that require another team's access.

| Symptom | First check | Next action |
| --- | --- | --- |
| Agent cannot sign in | Ask the agent whether they completed activation and record the error message. | Ask a user administrator to [verify the account and role](../admin-guide/create-user.md#verify-the-account). If the account is active, send the error and time to the identity support team for a sign-in log check. |
| Agent receives no offers | Check that the agent is **Available** and the queue shows **Ready**. | Ask a routing administrator to [review the routing event](../admin-guide/configure-routing.md#validate-routing). Include the queue, channel, expected offer time with time zone, and interaction ID if available. |
| CRM data does not appear | Check whether the problem affects one record or every interaction. | Ask the integration administrator to [check connectivity, mapping, and field access](../integrations/crm-connection.md#if-the-test-fails). Include the test interaction ID if available and share only sanitized diagnostic details. |
| Interactions disconnect | Record when the disconnect occurred, the affected channel, and whether other users were affected. | Ask the platform administrator to compare session events with service alerts for the same time window. |

## Collect diagnostic details

1. Record the time of the issue, including the time zone.
2. Record the affected user role, queue, and interaction channel where applicable.
3. Capture the error message and any available interaction ID or correlation identifier. If no matching event appears in the log, record that finding with the queue, channel, and time you checked.
4. Remove customer data, credentials, client secrets, and access tokens from logs, screenshots, and support tickets before sharing them.
5. Send the package to the responsible team through your approved support channel.

After an approved change, repeat the affected check in a test environment and record whether the symptom persists.
