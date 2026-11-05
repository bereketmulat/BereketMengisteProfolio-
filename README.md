# Bereket Mengiste | Portfolio

Underwater-themed portfolio built with Next.js (Pages Router).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub. Vercel rebuilds automatically.

## Structure

- `pages/index.js` – the whole page (content + canvas animation)
- `pages/_app.js` – loads global CSS
- `pages/_document.js` – Google Fonts + favicon
- `styles/globals.css` – all styling
- `public/` – static files

## Visitor counter setup (one time)

The counter needs a small database. It uses Upstash Redis, which is free on Vercel.

1. Vercel dashboard > your project > **Storage** (or **Marketplace**) > add **Upstash Redis** > create it and connect it to this project.
2. This adds the environment variables `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically.
3. Redeploy. The "visitors" badge then appears bottom-right.

Until it is set up, the badge stays hidden. Locally, copy those two values into `.env.local` to test.
