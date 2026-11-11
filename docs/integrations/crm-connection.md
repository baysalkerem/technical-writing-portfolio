---
title: Connect a CRM integration
---
# Connect a CRM integration

Connect Nexus Connect to a fictional customer relationship management (CRM) service so agents can view customer context during interactions.

## Prerequisites

- Sign in to Nexus Connect with the **Integration administrator** role.
- Obtain an approved integration account and its authorization details.
- Confirm that your organization permits the requested CRM data access.

## Configure the connection

1. Go to **Integrations > CRM**.
2. Select **Add connection**.
3. Enter a descriptive connection name.
4. Select the supported CRM provider.
5. Select **Authorize** and complete the provider's authorization flow.
6. In **Field mapping**, map the customer identifier to the corresponding CRM record field.
7. Select **Test connection**. The console displays a successful connection result.
8. Select **Save**.

## Verify the integration

1. Open a test customer interaction in the agent workspace.
2. Confirm that the customer panel shows the expected CRM record.
3. Check that the account has access only to approved fields.

## If the test fails

| Symptom | Check |
| --- | --- |
| Authorization rejected | Verify the integration account's permissions and consent |
| Customer record missing | Check identifier mapping and test record availability |
| Connection times out | Confirm the provider endpoint and network access |

:::warning
Never include client secrets, access tokens, or customer data in screenshots or support tickets.
:::
