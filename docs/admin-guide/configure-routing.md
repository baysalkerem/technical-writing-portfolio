---
title: Configure queue routing
sidebar_position: 3
---
# Configure queue routing

Configure a queue to distribute incoming interactions to available agents.

## Prerequisites

- Sign in with the **Routing administrator** role.
- Create the target queue and assign at least one agent.
- Identify the channel and routing policy for the queue.

## Configure the policy

1. Go to **Routing > Queues**.
2. Open the target queue.
3. In **Routing policy**, select **Longest idle**.
4. Set **Offer timeout** to the approved value for your organization.
5. Select **Save**. The console displays a confirmation message.

## Validate routing

1. In a test environment, set a queue member's status to **Available**.
2. Start a test interaction through the configured channel.
3. Confirm that the available agent receives the interaction offer.
4. Review the routing event log if the offer does not arrive.

:::caution
Validate changes in a test environment before applying them to production.
:::
