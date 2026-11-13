---
title: Troubleshoot common issues
pagination_next: null
---
import PortfolioNotice from '@site/src/components/PortfolioNotice';

# Troubleshoot common issues

<PortfolioNotice />

Start with the checks you can perform. Escalate issues that require another team’s access.

| Symptom | First check | Next action |
| --- | --- | --- |
| Agent can’t sign in | Ask whether the agent activated the account. Record the error message. | Ask a user administrator to [verify the account and role](../admin-guide/create-user.md#verify-the-account). If the account is active, send the error and time to identity support for a sign-in log check. |
| Agent receives no offers | Check that the agent is **Available** and that the queue shows **Ready**. | Ask a routing administrator to [check the event log](../admin-guide/configure-routing.md#troubleshoot-the-routing-test). Include the queue, channel, expected offer time and time zone, and interaction ID if available. |
| Customer relationship management (CRM) data is missing | Check whether the issue affects one record or all interactions. | Ask the integration administrator to [check connectivity, mapping, and field access](../integrations/crm-connection.md#if-the-test-fails). Include the test interaction ID if available. Share only sanitized diagnostics. |
| Interactions disconnect | Record when the disconnect happened, the channel, and whether it affected other users. | Ask the platform administrator to compare session events and service alerts from the same time window. |

## Collect diagnostic details

1. Record the time of the issue, including the time zone.
2. Record the affected role, queue, and channel, as applicable.
3. Capture the error message and any available interaction ID or correlation identifier. If no matching event appears in the log, record that finding with the queue, channel, and time you checked.
4. Remove customer data, credentials, client secrets, and access tokens from logs, screenshots, and support tickets before sharing them.
5. Send the diagnostics to the responsible team through the approved support channel.

After an approved change, repeat the affected check in a test environment and record whether the symptom persists.
