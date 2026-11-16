---
title: Verify AI-assisted infrastructure documentation
description: A case study and repeatable workflow for drafting, verifying, and reviewing infrastructure documentation with AI assistance.
portfolio:
  kind: case-study
  audience: Documentation teams
  environment: portfolio
---
import WritingStyleSwitch from '@site/src/components/WritingStyleSwitch';

# Verify AI-assisted infrastructure documentation

<WritingStyleSwitch />

This case study follows an AI-assisted update to two fictional infrastructure samples. The work covered [recovering a failed virtual machine](../infrastructure-operations/recover-failed-vm.md) and [validating network connectivity after a deployment change](../infrastructure-operations/validate-network-connectivity.md).

## Repeat the workflow

1. **Extract requirements.** Record the audience, task, permissions, environment, and pass criteria. For the network procedure, distinguish DNS, routing, and service checks.
2. **Identify missing information.** List the details the brief leaves open. For a real deployment, confirm the supported versions, approved endpoints, and rollback owner with a subject matter expert.
3. **Draft the topic.** Give the assistant the scenario, public references, and a task outline. Mark invented host names and outputs as examples.
4. **Review terminology and style.** Check headings, command formatting, terminology, and link text. Keep command behavior and outcomes identical in the Google and Microsoft views.
5. **Walk through each path.** Trace success, failure, rollback, and escalation. Check that each branch has a next action and that each required action has a prerequisite where needed.
6. **Verify technical claims.** Check flags, defaults, and interpretations against maintainer documentation. When you can test in isolation, record the command version, setup, and observed result.
7. **Request human review.** Ask an engineer to validate the technical scenario and an editor or operator to walk through the task. Record their decisions in the pull request.
8. **Publish the approved change.** Run the repository checks, resolve review findings, and obtain approval before you merge. After publishing, verify the live pages and their navigation.

### Reuse the drafting prompt

Fill in the task brief and supply approved public references before requesting a draft. Keep a claim log with the proposed wording, the evidence, and the decision for each disputed claim.

```text
Draft an operator procedure from this brief and these public references.
Include prerequisites, ordered steps, expected results, stop conditions,
and an escalation handoff. For each command, state where it runs,
what a passing result proves, and which source supports that claim.
Flag unconfirmed assumptions and label example outputs as illustrative.
```

## Verification examples

The table records assumptions the AI assistants considered while drafting. Each correction narrows what an operator can conclude from a command result.

| Draft assumption | Source check and resulting change |
| --- | --- |
| A next hop from `ip route get` proves the service is reachable. | The command looks up the route the Linux kernel would use and sends no packets. The network procedure separates route selection from the TLS and HTTP checks. [iproute2 manual for route lookups](https://man7.org/linux/man-pages/man8/ip-route.8.html#DESCRIPTION) |
| A curl exit code of `0` confirms that the service is healthy. | By default, curl treats HTTP error responses as completed transfers when the transfer itself succeeds. The network procedure checks the expected HTTP `204` status separately from the command exit code. [curl manual for HTTP failure behavior](https://curl.se/docs/manpage.html#--fail) |
| The `virsh domiflist --inactive` output confirms the running VM is isolated. | The flag lists interfaces configured for the next boot. The runbook uses it in the preboot checks and queries the running VM without the flag after startup. [libvirt manual for `domiflist`](https://www.libvirt.org/manpages/virsh.html#domiflist) |

## Review status

- **Local execution.** In a loopback HTTPS test with curl 8.14.1 and a trusted test certificate, curl returned exit code `0` for both HTTP `204` and `503`. When the URL hostname didn't match the certificate, curl returned exit code `60`. These results apply to the local test service.
- **Source-only verification.** The test environment denied the loopback route lookup with a netlink permission error. The VM command review used the libvirt manual. Both samples label outputs from their fictional environment as illustrative.
- **Documentation checks.** The repository checks cover Markdown, front matter, internal links, and the site build. The pull request records their results.
- **Human review.** Human technical review is pending. A reviewer should walk through the recovery and network validation procedures in an isolated lab before approving either for use in a real environment.
