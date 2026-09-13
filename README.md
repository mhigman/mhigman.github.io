# Miles Higman Portfolio

Single-page React and TypeScript portfolio for [mhigman.github.io](https://mhigman.github.io/).

## Local development

```bash
npm start
```

## Production build

```bash
npm run build
```

Content is centralized in `src/portfolio-data.ts`; add a project there and the filterable project grid updates automatically. The UI lives in `src/App.tsx`, reusable SVGs are in `src/icons.tsx`, and responsive styles are in `src/App.css`.

## GitHub Pages

This user-site is configured for `https://mhigman.github.io/`. A no-dependency workflow at `.github/workflows/deploy-pages.yml` builds and deploys each push to `main`. In the repository's **Settings → Pages**, set the source to **GitHub Actions** once; the next push will publish the site. The existing `npm run deploy` command is still available for manual publishing.
 
