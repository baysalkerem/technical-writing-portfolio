# Google GGI portfolio assessment

## Role and scope

Google Careers displayed the early-career Technical Writer, GGI posting for Seattle and Austin on November 16, 2026. This assessment uses the qualifications and responsibilities in that listing. Role-specific visa sponsorship remains unverified. [Google Careers posting](https://www.google.com/about/careers/applications/jobs/results/114745396722311878)

The baseline is repository commit [`95750bb`](https://github.com/baysalkerem/technical-writing-portfolio/tree/95750bb47651b5ee8554eb0a96b8f1e04a95da5f) and its published portfolio. The assessment rates visible evidence for each criterion. “Direct” means an artifact demonstrates the skill, “partial” means the evidence is adjacent or incomplete, and “unverified” means the available evidence leaves the criterion open. Google determines eligibility.

## Baseline

The site used Docusaurus 3.10.2 and included a landing page, About page, and 12 documentation topics in its library, user, administrator, integration, and operations sections. The React style provider applied a URL override and saved preference to shared content and conditional wording. The baseline `npm ci` and `npm run build` passed, and all 14 existing routes returned HTTP 200. Automated checks beyond the build were absent from the baseline scripts.

The strongest baseline sample was [Upgrade a deployment](../docs/operations/upgrade-workflow.md). Its pre- and post-change checks, hold criteria, and escalation path show operational judgment. The upgrade and recovery commands depend on a separate runbook.

| Criterion | Initial evidence | Remaining gap |
| --- | --- | --- |
| Minimum · Related bachelor’s degree or equivalent practical experience | Partial. [About](../src/pages/about.md) describes studies in translation and applied linguistics and work in technical documentation. | Use the résumé to substantiate the degree and practical experience. Relevance or equivalence remains Google's determination. |
| Minimum · Write for technical audiences | Direct. [Routing configuration](../docs/admin-guide/configure-routing.md) addresses administrators and the [upgrade procedure](../docs/operations/upgrade-workflow.md) addresses platform operators. | Add an artifact designed for an infrastructure or network operator. |
| Preferred · At least one year of technical writing | Unverified. The About page and samples establish the type of work. | Provide employment dates and responsibilities in the résumé. |
| Preferred · Hardware, networking, or physical infrastructure documentation | Partial. About lists SIP, VoIP, and communications hardware. [Routing configuration](../docs/admin-guide/configure-routing.md) covers contact center offer logic. | Show IP, DNS, routing, and service verification. Physical installation evidence is also absent. |
| Preferred · Generative AI and structured prompting | Unverified. The baseline offers no inspectable workflow artifact. | Show prompts, source checks, and review disposition in a documented example. |
| Preferred · Modern authoring tools, markup, and version control | Direct for Docusaurus, Markdown, HTML, and Git. The repository exposes source and a Pages build. | Provide review evidence and automated validation. Experience with Piper and Critique remains unverified. |
| Responsibility · Research and write installation, maintenance, and operational guides | Partial. [Upgrade a deployment](../docs/operations/upgrade-workflow.md) sets up verification and escalation. | Provide an end-to-end infrastructure procedure with commands, expected results, and stop conditions. An installation sample would extend coverage. |
| Responsibility · Use AI with rigorous human fact-checking | Unverified. The baseline supplies no source verification log or human review record for AI-assisted content. | Document checks against public sources and the actual human review status. |
| Responsibility · Structure reusable content and metadata for retrieval | Partial. Pages are modular and use simple front matter, shared components, and headings. | Validate structured metadata and demonstrate consistent retrieval cues. Retrieval effectiveness remains unmeasured. |
| Responsibility · Work with networking and hardware SMEs to validate procedures | Partial. About describes walking through procedures with engineers and product teams. | Provide a sample-specific validation record by a qualified engineer or hardware SME. |
| Responsibility · Improve operational procedures for field users | Partial. [Troubleshoot common issues](../docs/operations/troubleshooting.md) maps symptoms to checks and escalation owners. | Show a network or infrastructure handoff with decision criteria and diagnostic evidence. Ticket-resolution impact remains unmeasured. |

## Initial priorities

1. Add an infrastructure recovery runbook and a network validation procedure. Make the recovery gates, expected results, and escalation paths easy to find.
2. Add validated metadata and pull request checks. Use GitHub to demonstrate small, traceable changes, clear descriptions, reviewer feedback, and presubmit checks. [Google's public code review guidance](https://google.github.io/eng-practices/review/developer/)
3. Document an AI-assisted change from the project, including a correction supported by public technical sources and the human review status.
4. Make the infrastructure samples easy to reach from the homepage and library. Check both editorial variants, links, and existing routes.

## Final assessment

The portfolio now presents direct evidence of writing for infrastructure operators, source-checking AI-assisted drafts, and maintaining structured documentation through repository checks. The two new samples make the application more relevant to GGI than the baseline, where the strongest operational example stopped at application-level verification. Pair the samples with a résumé that establishes experience and education.

The feature-branch build includes 18 pages. Local `npm run check` passed. The lead and independent QA verified the style switch, all 14 original URLs, and existing heading anchors. Independent QA found no remaining Critical or Major issues. The GitHub pull request workflow is configured, with remote execution pending at the time of this assessment. [Final QA report](./final-qa-report.md)

| Criterion | Initial → final | Final evidence and limitations |
| --- | --- | --- |
| Minimum · Related bachelor’s degree or equivalent practical experience | Partial → partial | The résumé needs to establish education and practical experience. [About](../src/pages/about.md) provides context. |
| Minimum · Write for technical audiences | Direct → direct, with broader audience coverage | The [network validation procedure](../docs/infrastructure-operations/validate-network-connectivity.md) and [VM recovery runbook](../docs/infrastructure-operations/recover-failed-vm.md) address infrastructure operators and define their required access. |
| Preferred · At least one year of technical writing | Unverified → unverified | The portfolio demonstrates the work. Employment dates and responsibilities belong in the résumé. |
| Preferred · Hardware, networking, or physical infrastructure documentation | Partial → direct sample evidence for networking | The [network validation procedure](../docs/infrastructure-operations/validate-network-connectivity.md) covers routing, DNS, TLS, and HTTP. Physical installation and production infrastructure work remain gaps in the portfolio evidence. |
| Preferred · Generative AI and structured prompting | Unverified → direct workflow evidence | The [AI case study](../docs/case-studies/ai-assisted-documentation.md#reuse-the-drafting-prompt) provides a reusable prompt and concrete examples of draft corrections. |
| Preferred · Modern authoring tools, markup, and version control | Direct → direct, with stronger review and validation evidence | Markdown and HTML remain in a Git-based Docusaurus site. The [contribution workflow](../CONTRIBUTING.md), [review template](../.github/PULL_REQUEST_TEMPLATE.md), and [CI configuration](../.github/workflows/docs-ci.yml) show a transferable review and presubmit workflow. Piper and Critique experience remains unverified. |
| Responsibility · Research and write installation, maintenance, and operational guides | Partial → direct for operations | The [VM recovery runbook](../docs/infrastructure-operations/recover-failed-vm.md) shows restore gates, isolation checks, verification, rollback, and escalation. Its procedure and outputs describe a simulation. An infrastructure installation sample would extend coverage. |
| Responsibility · Use AI with rigorous human fact-checking | Unverified → partial | The [AI case study](../docs/case-studies/ai-assisted-documentation.md#review-status) distinguishes public-source verification and a local loopback HTTPS test from illustrative output. Human technical review, a live hypervisor restore, and an end-to-end DNS lab remain pending. |
| Responsibility · Structure reusable content and metadata for retrieval | Partial → direct structural evidence | Topic type, audience, and environment are [documented](../CONTRIBUTING.md#add-topic-metadata) and [validated](../scripts/validate-content.mjs). The samples reuse audience cues, notices, and diagnostic guidance. Retrieval effectiveness remains unmeasured. |
| Responsibility · Work with networking and hardware SMEs to validate procedures | Partial → partial | [About](../src/pages/about.md#how-i-write) describes professional collaboration. The new samples provide specific review targets. A networking or hardware SME sign-off remains pending. |
| Responsibility · Improve operational procedures for field users | Partial → direct procedural evidence | The network sample's [handoff steps](../docs/infrastructure-operations/validate-network-connectivity.md#close-or-escalate-the-change) identify when to stop, who to involve, and what evidence to share. Production ticket-resolution outcomes remain unmeasured. |

## Recommended reading order

1. [Validate network connectivity after a deployment change](../docs/infrastructure-operations/validate-network-connectivity.md). Start with the topology and the independent checks for route selection, DNS resolution, and HTTPS.
2. [Recover a failed virtual machine after an unsuccessful upgrade](../docs/infrastructure-operations/recover-failed-vm.md). Review the recovery decision tree, isolation requirements, and handoff before cutover.
3. [Verify AI-assisted infrastructure documentation](../docs/case-studies/ai-assisted-documentation.md). Review the disputed claims, corrections, and verification limits.
4. [Contribute to the portfolio](../CONTRIBUTING.md) and the [CI configuration](../.github/workflows/docs-ci.yml). Review how the repository validates changes and records reviewer decisions.
