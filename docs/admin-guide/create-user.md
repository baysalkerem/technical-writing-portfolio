---
title: Create an agent account
sidebar_position: 2
---
import PortfolioNotice from '@site/src/components/PortfolioNotice';

# Create an agent account

<PortfolioNotice />

Create an agent account and assign the queue the agent will work in. The administrator provisions the account and sends the invitation. The agent completes activation.

## Prerequisites

- Sign in to the administration console with the **User administrator** role.
- Obtain the agent's name, work email address, and assigned queue.
- Confirm that the assigned queue exists in the intended environment.

## Create the account

1. In the administration console, go to **Identity > Users**.
2. Select **Create user**.
3. Enter the agent's name and work email address.
4. In **Role**, select **Agent**.
5. In **Queue assignments**, select the required queue.
6. Select **Create**. The console sends an invitation to the work email address and lists the account as **Pending activation**.

## Verify the account

1. Search the user list for the new agent's work email address.
2. Open the account and confirm the **Agent** role and expected queue assignment.
3. Ask the agent to open the activation link in the invitation.
4. Ask the agent to confirm they can sign in to Nexus Connect Workspace.
5. Refresh the user list and confirm the account status is **Active**.

The agent can now [set their availability](../user-guide/manage-availability.md).

## If the invitation does not arrive

1. Open the existing account in **Identity > Users**.
2. Confirm the work email address with the agent and correct it if needed.
3. Select **Resend invitation** while the account is **Pending activation**.
4. Ask the agent to confirm receipt. If the invitation still does not arrive, send the account status and time of the last attempt to your identity support team.
