# Technical Writing Portfolio (Docusaurus)

A Docusaurus portfolio focused on user, administrator, integration, and operations documentation. Nexus Connect is fictional; all samples are illustrative.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run start
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run serve
```

## Publish with GitHub Pages

1. Create a public GitHub repository named `technical-writing-portfolio` and push this folder's contents.
2. In `docusaurus.config.js`, replace `YOUR_GITHUB_USERNAME` with your GitHub username.
3. Set `url` to `https://YOUR_GITHUB_USERNAME.github.io` and `baseUrl` to `/technical-writing-portfolio/`.
4. Run `npm install` and `npm run build` to verify the site.
5. Deploy with `GIT_USER=YOUR_GITHUB_USERNAME npm run deploy` (Git Bash/macOS/Linux). On Windows PowerShell: `$env:GIT_USER="YOUR_GITHUB_USERNAME"; npm run deploy`.
6. In GitHub repository settings, configure Pages to publish from the `gh-pages` branch, root folder, if needed.

Alternatively, connect the repository to Netlify or Vercel and use `npm run build` with output directory `build`. For these root-domain deployments, keep `baseUrl: '/'` and set `url` to the final site origin.

## Customize before publication

- Replace placeholder GitHub links and deployment settings.
- Review the public display name and add your preferred contact method.
- Replace fictional screenshots with original annotated mockups if desired.
- Add original work samples only after removing proprietary or sensitive material.
