---
title: Infrastructure Operations
description: Find lab procedures for VM recovery and network validation after a deployment change.
portfolio:
  kind: overview
  audience: Infrastructure and network operators
  environment: simulation
---
import InfrastructureNotice from '@site/src/components/InfrastructureNotice';
import WritingStyleSwitch from '@site/src/components/WritingStyleSwitch';

# Infrastructure Operations

<WritingStyleSwitch />

<InfrastructureNotice />

Use these procedures to rehearse recovery and network validation in the fictional Nexus Connect infrastructure lab. Each procedure defines its own topology, access requirements, and criteria for escalating a failure.

## Choose a procedure

- [Recover a failed virtual machine after an unsuccessful upgrade](./recover-failed-vm.md). Boot an isolated recovery candidate from an approved copy, verify guest and service health, and hand off the decision to restore service.
- [Validate network connectivity after a deployment change](./validate-network-connectivity.md). Trace a known service path through routing, DNS, and HTTPS, then record the evidence the responsible team needs.

For the authoring and verification process, read the [AI-assisted documentation case study](../case-studies/ai-assisted-documentation.md).
