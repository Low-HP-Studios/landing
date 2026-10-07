# Low HP Studio

A static studio website showcasing Burnhop, Greytrace, and Templio, built with Next.js, React, TypeScript, and Tailwind CSS.

## Local development

Use pnpm 12.4.1 (pinned in `package.json`). The review build was verified with Node 24.16.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verify and export

```sh
pnpm lint
pnpm typecheck
pnpm build
```

The static site is generated in **out/**. This directory is the complete deployment artifact; no Next.js server or backend is required. Geist is downloaded at build time and served as a local font in the output.

## Preview the actual static output

```sh
pnpm preview
```

Open http://localhost:3100. The preview command uses Python 3 and binds to localhost only. `pnpm start` is an alias for this static preview, not `next start`.

## Review and handoff

See [the redesign handoff](docs/redesign/HANDOFF.md) for content sources, screenshots, verification, and changed files. Before publication, the infrastructure owner must verify the planned contact address `ayush@lowhp.studio` and confirm the canonical hostname, currently `www.lowhp.studio`.

Project data lives in `components/ProjectGallery.tsx`. The site presents current public availability, not every capability implemented in a project repository. Keep the browser/native Burnhop distinction, Greytrace prototype status, and Templio’s custom-websites positioning accurate when updating it.
