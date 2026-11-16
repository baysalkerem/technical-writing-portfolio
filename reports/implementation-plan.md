# Portfolio baseline and implementation plan

## Baseline

Audited on November 16, 2026, from Git commit `95750bb47651b5ee8554eb0a96b8f1e04a95da5f`.

| Area | Baseline |
| --- | --- |
| Framework | Docusaurus 3.10.2 from the npm lockfile, React 19, Markdown and MDX, and the Docusaurus Mermaid theme |
| Structure | 14 pages. The homepage and About page sit outside a documentation library with User guide, Administrator guide, Integrations, and Operations groups. |
| Writing styles | The React root provides a site-wide preference. The radio group updates the `style` query parameter, preserves the section anchor, and stores the choice locally. Microsoft is the default. The two editions share topic source through inline variants. |
| Baseline build | `npm ci --prefer-offline --no-audit --no-fund` and `npm run build` passed on Node 24.22.1. All 14 published routes returned HTTP 200 and included the style help control. |
| Baseline tests | The repo had no dedicated test, lint, metadata validation, or pull request CI scripts. The deployment workflow built on Node 22. |
| Role evidence | The official Google Careers listing was available. The baseline had operational and administrator samples, with limited direct networking, recovery, structured metadata, or AI verification evidence. |

[Official Technical Writer, GGI listing](https://www.google.com/about/careers/applications/jobs/results/114745396722311878)

## Implementation

1. Draft the VM recovery and network validation samples in isolated worktrees. Use fictional systems, trusted public references, and clearly labeled example outputs.
2. Add Infrastructure Operations to the existing sidebar and sample cards. Preserve published routes and headings. Reuse the writing-style switch, keep the technical content shared, and define YAML metadata for the new samples.
3. Add a separate case study about the AI-assisted workflow. Record evidence from this project and distinguish automated checks, source verification, and pending human review.
4. Add deterministic checks for Markdown, front matter, site links, and production builds. Run them in pull request CI and document the review workflow.
5. Build the combined site for local testing. Independently review both technical samples, the case study, UI and accessibility, routes, and the publishing boundaries. Resolve Critical and Major findings before final review.
6. Compare the final evidence with the original job requirements. Open a pull request from `feature/google-ggi-portfolio` for review.
