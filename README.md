# Deep HR Match — Employer Dashboard (Demo)

This is a small Vite + React + TypeScript + Tailwind demo showing an Employer Dashboard page for "Deep HR Match".

Quick start:

```bash
npm install
npm run dev
```

Replace the placeholder logos in `src/assets/ST-engineering-logo.png` and `src/assets/deephrmatch_logo.png` with your actual PNG files (filenames must match).

Vercel deploy:

1. Go to https://vercel.com and sign in with GitHub.
2. Click "New Project" and import the repository `zhengyelau/deep-hr-match-claude-code`.
3. Vercel will auto-detect the project. If needed, set the **Build Command** to `npm run build` and the **Output Directory** to `dist`.
4. (Optional) This repo includes `vercel.json` to help Vercel detect the static build configuration.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

