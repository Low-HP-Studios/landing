# Low HP Studio — redesign handoff

## Review location

- Implementation worktree: `/Users/ayushrameja/codebase/LHP/landing-redesign-review`
- Review branch: `redesign-awwwards`, based on `redesign` at `4e36c6e`
- Original checkout remains on `redesign`; its pre-existing `.vscode/settings.json` deletion is preserved.
- Local static preview: http://localhost:3100
- Initial design handoff performed no commit, push, merge, infrastructure changes, email, or production deployment. The user subsequently authorized a PR, merge, and live validation; the existing GitHub deployment integration is used for that release. DNS, hosting settings, and email configuration remain outside this change.

## Design implemented

The user rejected the earlier Indie Workshop concept and requested inspiration from [Awwwards](https://www.awwwards.com/). Its live homepage was inspected on 7 October 2026: compact navigation, an oversized title, a large featured image, and an image-led project directory.

The implementation uses those layout principles with Low HP’s own identity: large grotesk type, an off-white/charcoal palette, restrained lime accents, an existing brand mark, a decorative low-health indicator, genuine project imagery, compact availability labels, and a dark studio section. There are no award badges or implied Awwwards affiliation.

The page includes an introduction, featured Burnhop project, filterable gallery, studio statement, founder profile, and contact. All project content initially renders in static HTML. Only the small gallery filter uses client state. Motion is limited to hover feedback and smooth anchor scrolling; reduced motion removes both.

## Content and assets

- **Burnhop:** desktop-browser solo practice prototype. Multiplayer explicitly marked unavailable; native version noted as in development. Uses a real public entrance capture.
- **Greytrace:** browser shooting beta/prototype with practice maps. No live matchmaking claim. Uses a real beta-lobby capture.
- **Templio:** live custom-websites project, matching the live site and the user’s explicit confirmation. Does not use the outdated builder-beta README positioning.
- **Loadout:** excluded at the user’s request.
- **Founder:** Ayush Rameja, founder and developer, as confirmed. Portrait is the existing illustration used on his personal portfolio, labeled as an illustration in alt text.
- Project stills are optimized WebP assets under `public/projects/`; the founder image is under `public/studio/`.
- The social preview is a static 1200 × 630 PNG. Existing logo and favicon artwork are retained; metadata now references valid root asset paths.
- `RESEARCH.md`, `direction.html`, and `strategy.json` record the earlier research proposal. The research document marks that visual direction superseded. `composition.json` describes the implemented direction.

## Deployment prerequisites for the infrastructure agent

1. Verify that **ayush@lowhp.studio** receives mail before publication. It is present as the planned `mailto:` contact. No mail was sent during verification.
2. Confirm the canonical hostname. Metadata, sitemap, and robots currently use **https://www.lowhp.studio**, matching the existing public redirect observed during discovery. Update all three together if the canonical domain changes.
3. Publish only **out/** after a successful static build. No application server, API, database, functions, or email backend is needed for this site.

## Exact build / output contract

Tested locally with Node **24.16.0**, pnpm **12.4.1**, and Next.js **15.5.11**. `packageManager` pins the tested pnpm release; the lockfile includes its package-manager resolution. Application dependency versions are unchanged.

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

Next config sets `output: 'export'`, `trailingSlash: true`, and unoptimized static images. Output is **out/**, including `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, `_next/` assets, favicons, and the social image. First builds fetch Geist through `next/font`; fonts are then served locally in the static output.

For local review, `pnpm preview` (or `pnpm start`) runs Python 3’s static file server bound to 127.0.0.1:3100. Python is only a local preview convenience; it is not a production runtime requirement. `pnpm dev` remains the Next.js development server.

`pnpm-workspace.yaml` explicitly disables lifecycle scripts for sharp and unrs-resolver. A fresh isolated dependency installation passed with this policy; prebuilt packages support the tested local build. A target-platform build still belongs to the infrastructure verification.

## Verification

- Fresh isolated `pnpm install --frozen-lockfile` passed, without sharing the original checkout’s node_modules.
- Production static build, TypeScript, and lint passed. The Next lint runner prints a deprecation notice but reports no lint warnings or errors.
- Chromium checks of the served static output: All/Games/Web filters produce 3/2/1 projects; Web contains Templio. Skip link and keyboard interaction checked.
- Responsive geometry checked at **320, 375, 768, 1024, and 1440 px**: no horizontal overflow.
- Desktop and mobile axe scans against WCAG 2 A/AA, WCAG 2.1 AA, and best-practice rules: **zero detected violations**. Automated checks are not a substitute for a complete accessibility audit.
- Reduced-motion mode: smooth scrolling disabled and image transition duration 0s.
- Referenced project images, brand logo, icons, manifest, social preview, robots, and sitemap return HTTP 200 from the static preview.
- No uncaught page errors in local browser checks.
- Public project URLs and the GitHub organization returned HTTP 200. The portfolio initially returned 403 to Python’s default user agent; a subsequent curl redirect check reached HTTP 200. No account, form, email, or game session was submitted during these checks.
- Genuine project screenshots do not establish new gameplay, multiplayer, or touch-support verification.

The collaborative browser disconnected during visual verification and could not be reopened in a bounded attempt. Final screenshots and accessibility/interaction checks used local headless Chromium. Evidence is in `verification/`; latest local notes are in `verification/final-checks.json`.

Inherited build warning: Next.js reports SWC 15.5.7 alongside Next.js 15.5.11. The build succeeds. This dependency warning was present before the redesign; no dependency upgrade is claimed here.

## Changed-file map

- `app/page.tsx`, `app/globals.css`: full visual redesign and studio/founder/contact content.
- `components/BrandBar.tsx`, `Icons.tsx`, `ProjectGallery.tsx`: navigation, reusable icons, accessible project filters.
- `app/layout.tsx`, `robots.ts`, `sitemap.ts`, `public/site.webmanifest`: metadata, font, crawler files, valid icons.
- `next.config.js`: static export and static image behavior.
- `.eslintrc.json`, `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`: working lint/typecheck scripts, local static preview, reproducible package-manager setup.
- `public/projects/`, `public/studio/`, `public/social-preview.png`: real optimized project imagery, existing founder illustration, and static social card.
- `README.md`, `docs/redesign/`: build instructions, research history, current handoff, and verification evidence.
