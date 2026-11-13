---
title: Create an agent account
sidebar_position: 2
---
import PortfolioNotice from '@site/src/components/PortfolioNotice';

# Create an agent account

<PortfolioNotice />

Create an account and assign the agent to a queue. The agent activates the account from an email invitation.

## Prerequisites

- Sign in to the administration console with the **User administrator** role.
- Obtain the agent's name, work email address, and assigned queue.
- Confirm that the assigned queue exists in the intended environment.

## Create the account

1. In the administration console, go to **Identity** > **Users**.
2. Select **Create user**.
3. Enter the agent's name and work email address.
4. In **Role**, select **Agent**.
5. In **Queue assignments**, select the required queue.
6. Select **Create**. An invitation goes to the agent’s work email address, and the account appears as **Pending activation**.

## Verify the account

1. Search the user list for the new agent's work email address.
2. Open the account.
3. Confirm the **Agent** role and queue assignment.
4. Ask the agent to activate the account from the invitation.
5. Ask the agent to confirm they can sign in to Nexus Connect Workspace.
6. Refresh the user list and confirm that the account status is **Active**.

The agent can now [set their availability](../user-guide/manage-availability.md).

## Resend a missing invitation {/* #if-the-invitation-does-not-arrive */}

1. In **Identity** > **Users**, open the account.
2. Confirm the work email address with the agent and correct it if needed.
3. Select **Resend invitation** while the account is **Pending activation**.
4. Ask the agent to confirm they received the invitation.

If the invitation still doesn’t arrive, send the account status and the time you last sent the invitation to your identity support team.
