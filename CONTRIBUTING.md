# Contribute to the portfolio

## Start a change

1. Create a feature branch from `main`.
2. Add or update Markdown in `docs/`. Use the existing topic types and navigation where they fit.
3. Run `npm ci`, then `npm run check`. To preview the build, run `npm run serve`.
4. Open a pull request. Describe what changed, why it changed, and how you checked it. Include any limitations and questions that need review. This follows Google's [public change description guidance](https://google.github.io/eng-practices/review/developer/cl-descriptions.html).
5. Ask a reviewer to check the rendered pages and technical evidence. Wait for maintainer approval before merging or deploying. Merging to `main` triggers GitHub Pages.

## Add topic metadata

Begin each published Markdown page with YAML front matter that contains a title. Add a description and a `portfolio` block to each Infrastructure Operations topic and case study.

```yaml
---
title: Validate network connectivity
description: Check the routes, DNS responses, and service access in a fictional deployment.
portfolio:
  kind: procedure
  audience: Infrastructure operators
  environment: simulation
---
```

Choose the `kind` that matches the topic.

- `overview` introduces a collection and links to its tasks.
- `runbook` documents what to do during an operational event.
- `procedure` explains how to complete and verify a task.
- `case-study` explains a documentation decision or workflow.

Use `simulation` for fictional infrastructure samples and `portfolio` for case studies about this repository. Keep the audience specific to the intended reader. Use a number for `sidebar_position` when you need it.

## Review checklist

- Confirm that the topic states its purpose and audience. For procedures, check permissions, inputs, expected results, failure paths, and escalation criteria.
- Verify commands and technical assumptions against primary sources. Label simulated output and record which commands you ran. Check external references in a browser.
- Keep facts, command syntax, step order, and safety conditions shared between style views. Add wording variants where the guides differ.
- Check that heading links survive edits. Use descriptive link text, accessible diagram titles and descriptions, and text alternatives for essential diagram information.
- Preview both style views. Test navigation, keyboard access, and a narrow viewport where the change affects the UI.
- Check for confidential names, data, credentials, and screenshots. Keep fictional values and public references in samples.
- Record the disposition of AI suggestions and unresolved technical questions. Credit human review only after it occurs.

Reviewers should leave actionable comments tied to correctness or maintainability. See Google's [public review standard](https://google.github.io/eng-practices/review/reviewer/standard.html).
