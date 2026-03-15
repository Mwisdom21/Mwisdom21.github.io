# Deployment Workflow

## 1) Open the project

```bash
cd C:\Users\masia\fatmac-portfolio
code .
```

## 2) Install deps (first time or after dependency changes)

```bash
npm install
```

## 3) Run local dev

```bash
npm run dev
```

Open: `http://localhost:3000`

## 4) Make and test your edits

- Update components/styles/content in VS Code.
- Check desktop and mobile layouts.

## 5) Production sanity check

```bash
npm run build
```

## 6) Commit and push

```bash
git add .
git commit -m "Describe your update"
git push origin main
```

## 7) Deployment verify

- GitHub Actions auto-deploys from `main`.
- Check Actions tab for a green run.
- Visit: https://mwisdom21.github.io/
- Hard refresh (`Ctrl+F5`) if browser shows stale content.

## Quick update loop

```bash
npm run dev
# edit files
npm run build
git add .
git commit -m "Update"
git push origin main
```