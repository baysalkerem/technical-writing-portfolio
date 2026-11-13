# Technical writing portfolio

This Docusaurus portfolio contains user, administrator, integration, and operations documentation for Nexus Connect, a fictional platform.

## Editorial standard

Use the [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) for the portfolio and repository documentation.

- Use sentence-style capitalization for titles, headings, and navigation. Match the capitalization of Nexus Connect UI labels.
- Address readers as **you**. Start instructions with action verbs and use numbered lists for sequences. Put the location before the action when readers need it to find a control.
- Bold UI labels. Keep the separators in navigation paths outside the bold text. Use code formatting for literal values and commands.
- Use **Nexus Connect Workspace** on first mention and **workspace** in prose after that. Use **Workspace** in diagrams and **offer** for an interaction offered to an agent.
- Give diagrams accessible titles and descriptions. Keep the steps, pass criteria, and recovery actions in the surrounding text.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run start
```

Open http://localhost:3000/technical-writing-portfolio/.

If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run start`.

## Build

```bash
npm run build
npm run serve
```

## Publish with GitHub Pages

View the [published portfolio](https://baysalkerem.github.io/technical-writing-portfolio/).
In the repository, go to **Settings** > **Pages** to verify that the build source is **GitHub Actions**.

The [deployment workflow](.github/workflows/deploy.yml) builds with Node.js 22
and publishes on pushes to `main`. To run it manually, go to **Actions** >
**Deploy Docusaurus to GitHub Pages**, select **Run workflow**, and select `main`.

## Customize before publication

- Review the public display name and add your preferred contact method.
- Replace fictional screenshots with original annotated mockups if desired.
- Add original work samples only after removing proprietary or sensitive material.
