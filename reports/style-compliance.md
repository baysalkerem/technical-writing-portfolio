# Information architecture and style review

Reviewed November 16, 2026. The review covered the existing documentation and the four added topics in the Google GGI feature branch. The baseline was commit `95750bb47651b5ee8554eb0a96b8f1e04a95da5f`.

## Information architecture

- The homepage links directly to the two infrastructure samples. The documentation library groups them under Infrastructure Operations, with an overview for choosing a procedure.
- The Operations overview connects deployment operators to the infrastructure samples. The infrastructure overview and both sample links in the AI case study support navigation between the authored samples and the verification rationale.
- The existing documentation paths and anchors stay in place. The edited procedures keep their original headings, numbered step counts, and link destinations.
- The new topics use YAML metadata for the audience, topic type, and environment. The navigation and titles use sentence case, with Infrastructure Operations as the requested section name.

## Editorial decisions

| Area | Decision and evidence |
| --- | --- |
| Procedure structure | The existing guides retain their task-based headings and numbered actions. The new samples establish scope and permissions before commands, explain what a result proves, and associate failed checks with a next action and owner. |
| Google view | The chat procedure uses `Click` for controls in its stated desktop browser and mouse scenario. Other procedures use input-neutral verbs when the device is unspecified. Useful variants put the UI location or prerequisite condition first. |
| Microsoft view | The chat procedure uses `Select`. Run-in labels in the availability procedure end with periods in both views. The Microsoft guide's em-dash spacing rule also rules out the old spaced construction. |
| Equivalent behavior | The selector and active guide label use the existing shared components. The infrastructure samples render the same commands, outputs, pass criteria, safety checks, and escalation paths in both views from one Markdown source. |
| Link text | The CRM troubleshooting link now describes its destination. The infrastructure overview, case study, and command references use links that identify their task or source. |
| Accessibility | The existing writing-style switch retains its native radio group and named help button. Both new Mermaid diagrams have accessible titles and descriptions, with a text equivalent adjacent to the diagram. The pass and escalation paths can be followed in prose. |

## Procedure review findings

| Finding | Disposition |
| --- | --- |
| The VM draft put metadata inspection and the consistency check in one copyable block, with the go/no-go criteria after the block. | The integrated runbook separates the commands and puts the metadata criteria between them. |
| The DNS draft required a complete UDP response without explaining how to recognize truncation. | The integrated procedure names the `tc` flag, shows the flags line, and routes an incomplete response into troubleshooting. |
| A few commands exceed 80 characters, including the curl format argument. | Minor. Retain the command syntax and check that the code block works on a narrow viewport. Use the final QA report for the browser results. |

The reviewed information architecture and editorial changes had no unresolved Critical or Major findings. Technical execution and browser interaction are tracked in the independent QA review.

## Checks performed

- Compared the five edited procedures with the baseline. Heading text, link targets, step counts, and fenced blocks matched. Each page retained one writing-style selector.
- Ran `git diff --check`, Markdown lint on 23 files, and YAML front matter validation on 17 pages. All passed.
- Checked source for one writing-style selector on each of the 18 portfolio pages, accessible Mermaid metadata on both infrastructure samples, and shared content in those samples.
- Read both integrated samples, their overview, and the case study in source. Checked the navigation entries and sample card routes against the topic paths.

## Style references

- Google developer documentation style guide on [procedures](https://developers.google.com/style/procedures), [headings](https://developers.google.com/style/headings), and [UI interactions](https://developers.google.com/style/ui-elements).
- Google developer documentation style guide on the [use of click](https://developers.google.com/style/word-list#click), [accessibility](https://developers.google.com/style/accessibility), [cross-references](https://developers.google.com/style/cross-references), and [code samples](https://developers.google.com/style/code-samples).
- Microsoft Writing Style Guide on [procedures](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions), [UI interactions](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/describing-interactions-with-ui), and [em dashes](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/).
