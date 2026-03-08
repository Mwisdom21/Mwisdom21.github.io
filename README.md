# Fat Mac Portfolio

Interactive portfolio inspired by the Macintosh 512K desktop GUI.

## Local development

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

`next.config.ts` is already set for static export (`out/`) and auto-derives `basePath` in GitHub Actions.

- If the repo is `mwisdom21.github.io`, it deploys at root: `https://mwisdom21.github.io/`.
- If the repo is a project repo, it deploys under `/<repo-name>/`.

## Deploy

Push to `main` or `master` and the workflow at `.github/workflows/deploy.yml` will publish to GitHub Pages.