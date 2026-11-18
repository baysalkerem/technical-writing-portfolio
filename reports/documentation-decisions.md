# Documentation decisions

This log records problems found while developing the portfolio, the changes made, and the evidence used to check them. It covers the infrastructure documentation update reviewed on November 16, 2026.

## Check what each diagnostic proves

During drafting, the AI assistants considered treating a route lookup as evidence of reachability and a successful curl transfer as evidence of service health. Those interpretations could let an operator close a change before verifying the service.

The procedure now checks route selection, DNS resolution, TLS, and the expected HTTP response separately. A loopback test returned curl exit status `0` for both HTTP `204` and `503`, confirming why the expected status needs its own check.

See the [network procedure](../docs/infrastructure-operations/validate-network-connectivity.md) and [AI verification examples](../docs/case-studies/ai-assisted-documentation.md#verification-examples) for the sources and test limits.

## Put verification gates between commands

The VM draft grouped image metadata inspection and an integrity check in one copyable block. The operator needed to inspect the first result before continuing.

The runbook now puts the metadata command, its acceptance criteria, and the next command in that order. It also checks the persistent device definition before boot and the active devices after boot. Independent review added host containment and a shutdown path for a missing serial login.

The [recovery runbook](../docs/infrastructure-operations/recover-failed-vm.md) documents the gates and stop conditions. Command syntax and selected local fixtures were checked. An end-to-end hypervisor restore and human technical review remain pending.

## Make an incomplete result actionable

The DNS draft required a complete UDP response without showing how to identify an incomplete one.

The procedure now names the `tc` truncation flag, shows the response header, and directs an incomplete response to the DNS owner. An unexpected HTTPS peer also triggers a hold and an escalation.

The [QA report](./final-qa-report.md) records the review findings and their resolution. The addressing and command references are linked from the procedure.

## Share facts across writing styles

Separate copies of a procedure can drift as steps or commands change. Cosmetic differences can also distract readers from the task.

Both writing styles now use a shared technical body. Wording varies where the guides call for a meaningful difference. The chat sample defines its desktop and mouse context for the Google `Click` and Microsoft `Select` variants.

The integration review checked both views on all 18 pages, preserved the original heading anchors, and compared command blocks. See the [style review](./style-compliance.md) for the editorial decisions.

## Check changes before publishing

The baseline repository built the website but had no dedicated Markdown or metadata checks, and some broken links produced warnings.

The repository now validates Markdown and YAML metadata and fails the build on broken internal links or heading anchors. Pull request CI runs the same checks before review. A contribution guide and review template make the evidence and remaining questions explicit.

The [contribution guide](../CONTRIBUTING.md) describes the workflow. The [QA report](./final-qa-report.md) records the infrastructure update's validation scope. Public-source checks, local command tests, and human review each have their own status.
