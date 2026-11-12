# Technical Writing Portfolio (Docusaurus)

A Docusaurus portfolio focused on user, administrator, integration, and operations documentation. Nexus Connect is fictional; all samples are illustrative.

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

The portfolio publishes to https://baysalkerem.github.io/technical-writing-portfolio/.
In the repository's **Settings > Pages**, the build source is **GitHub Actions**.

The [deployment workflow](.github/workflows/deploy.yml) builds with Node.js 22
and publishes on pushes to `main`. To run it manually, open **Actions > Deploy
Docusaurus to GitHub Pages**, select **Run workflow**, and choose `main`.

## Customize before publication

- Review the public display name and add your preferred contact method.
- Replace fictional screenshots with original annotated mockups if desired.
- Add original work samples only after removing proprietary or sensitive material.
