---
title: How I revised a routing test
pagination_prev: null
pagination_next: null
---
import PortfolioNotice from '@site/src/components/PortfolioNotice';

# How I revised a routing test

<PortfolioNotice />

In this editorial case study, I revised a procedure for administrators configuring **Longest idle** routing in Nexus Connect.

## What the original test proved {/* #before */}

The administrator made one agent available and checked for an offer. That confirmed delivery. With one eligible agent, the administrator couldn’t verify who would receive the first offer when two agents were available.

## What the revised test proves {/* #after */}

The administrator tests with two eligible agents in the same queue. The agent who becomes available first should receive the first offer. If the result differs, the administrator checks eligibility, idle time, and the offer recipient in the routing event log.

## Why I used a flowchart

The flowchart shows when the test passes and what to check if it fails. The steps specify the setup, timing, and UI labels.

[Routing validation flowchart and procedure](../admin-guide/configure-routing.md#validate-routing)
