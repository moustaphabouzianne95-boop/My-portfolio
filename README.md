# Moustapha Bouzianne — Software Engineer Portfolio

A single-page portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Local development

```bash
pnpm install
pnpm dev
```

The project uses pnpm 11.25.0. The Webdev Preview runs the app on port 3000.

## Preview the static export

Run `pnpm build` first, then `pnpm start` to serve the generated `out/` directory on port 3000. Python 3 must be available as `python` on PATH.

## Customize the content

Edit `src/data/portfolio.ts` to update the profile, skills, email, social profiles, education, and project case studies. The LangChain website is an independent concept, not affiliated with LangChain, and its illustrated flows do not connect to a live AI model. Use real HTTPS URLs for profile and project destinations.

The visual direction, accessible interactions, and reusable page components live under `src/components/`, `src/app/`, and `src/app/globals.css`.

## Public URL and search metadata

When a real HTTPS production origin exists, set `NEXT_PUBLIC_SITE_URL` to that exact origin (for example, as a deployment environment variable). The canonical URL, Open Graph URL, `robots.txt` sitemap reference, and `sitemap.xml` entry intentionally remain absent until a real public origin is configured; the project does not guess a domain. The root page's title and description, Open Graph title/description, Twitter card title/description, favicon, and crawl rules are available without that setting.

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```
