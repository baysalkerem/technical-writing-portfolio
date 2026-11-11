---
title: Upgrading a deployment
---
# Upgrading a deployment

Use this example workflow to coordinate a planned Nexus Connect deployment upgrade. This page demonstrates operational documentation structure rather than a real upgrade procedure.

## Prerequisites

- Obtain an approved change window and upgrade plan.
- Confirm that the target release supports the current deployment topology.
- Verify recent backups and the documented recovery process.
- Notify stakeholders of the planned service impact.

## Upgrade workflow

1. **Assessing readiness:** Review system health, active alerts, capacity, and version compatibility.
2. **Protecting the deployment:** Verify backup completion and recovery access.
3. **Preparing the environment:** Confirm the approved software package and change window.
4. **Upgrading components:** Follow the product-specific dependency order in the approved runbook.
5. **Validating services:** Confirm service health, user sign-in, routing, and integrations.
6. **Closing the change:** Record results, issues, and the final version in the change record.

## Decision point

If a critical validation fails, stop the change and follow the approved recovery plan. Do not continue upgrading dependent components.

:::danger
This sample intentionally omits executable upgrade commands, version-specific sequencing, and rollback steps. Never use it as a production runbook.
:::

## Related topic

[Troubleshoot common issues](./troubleshooting.md).
