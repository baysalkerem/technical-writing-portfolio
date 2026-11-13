---
title: Revising a routing verification procedure
pagination_prev: null
pagination_next: null
---
import PortfolioNotice from '@site/src/components/PortfolioNotice';

# Revising a routing verification procedure

<PortfolioNotice />

In this editorial case study, I revised a procedure for administrators configuring **Longest idle** routing in Nexus Connect.

## Before

The test made one agent available and checked whether that agent received an offer. That confirmed the queue could deliver an interaction. With only one eligible agent, the administrator had no way to verify how the policy chose between agents.

## After

The revised test uses two eligible agents in the same queue. One becomes available earlier so the administrator can predict who should receive the first offer. If the result differs, the procedure directs the administrator to compare eligibility, idle time, and the offer recipient in the routing event log.

## Why I used a flowchart

The flowchart puts the pass condition and the troubleshooting path in view at the point where the administrator checks the result. The numbered steps carry the exact setup, timing, and interface labels.

[View the routing validation flowchart and procedure](../admin-guide/configure-routing.md#validate-routing).
