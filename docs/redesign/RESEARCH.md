# Low HP Studio redesign: research and proposed direction

**Visual direction superseded:** Ayush rejected the Indie Workshop specimen and requested an Awwwards-inspired redesign. The verified project facts below remain useful. See [HANDOFF.md](HANDOFF.md) for the implemented design and current verification.

Research date: 7 October 2026. Scope: research, content planning, and a visual direction specimen. The production website has not been redesigned or deployed in this pass.

## Recommendation

Position Low HP Studio as an independent studio making games and crafted web experiences. Use a warm editorial **Indie Workshop** identity: generous paper-colored space, ink typography, large genuine project images, and a restrained ember accent. Preserve the existing logo; add a small decorative health-bar motif as a supporting detail.

The first glance should answer three questions: what the studio makes, who builds it, and where to experience its work. Visitors looking for games need a direct play link; collaborators and program reviewers need identifiable authorship and concrete work with honest availability labels.

Proposed headline: **Small studio. A lot of play.**

Supporting line: **Independent games and carefully made websites, built by Ayush Rameja.**

Primary action: **Explore the projects**. Secondary action: **Meet the founder**. A small footer line, “Low HP. Still building.”, carries the joke without obscuring useful information.

## Confirmed content decisions

- User confirms Burnhop, Greytrace, and Templio belong in the studio showcase.
- User confirms the credit “Ayush Rameja, founder and developer.”
- User asks to leave Loadout out.
- User confirms Templio should match its current live offer: custom websites / web project, rather than the older README’s invite-only builder-beta positioning.
- Other personal projects and Templio client/community examples are not automatically separate Low HP products.

## Project evidence and suggested presentation

| Project | Grounded description | Public label and link | Important distinction |
| --- | --- | --- | --- |
| Burnhop | Side-view shooting practice with jet-powered movement and customizable pilots. | Browser prototype · Solo practice. [Visit Burnhop](https://burnhop.lowhp.studio). | Browser README dated 4 October says multiplayer is temporarily disabled. Native Rust/Bevy work is a separate version in development, not an additional released product. |
| Greytrace | A browser tactical-shooting prototype focused on movement, gun handling, and practice maps. | Browser beta / prototype. [Visit Greytrace](https://greytrace.lowhp.studio). | No live matchmaking, account system, or backend progression should be advertised. Desktop packaging was retired. |
| Templio | Collaboratively built custom websites for portfolios, studios, communities, and other ideas. | Web project · Live. [Explore Templio](https://www.templio.app/). | Live site and user confirmation take precedence over its outdated builder-beta README. Do not invent a self-service editor, paid plans, or AI features. |

Burnhop and Greytrace should carry a desktop-browser / keyboard-and-mouse note beside the action. A responsive studio page does not mean the games support touch play. Until complete gameplay checks are performed, use “Visit” or “Explore” in research artifacts rather than claiming fresh end-to-end playability verification.

Ownership evidence: Greytrace and Templio are in the [Low HP GitHub organization](https://github.com/Low-HP-Studios). Burnhop is in the founder’s GitHub account with a lowhp.studio subdomain and is explicitly confirmed by the user as studio work.

## References and what to learn from them

- [Panic](https://panic.com/): its homepage plainly distinguishes apps, games, and hardware. Apply that clarity to Low HP’s games and web projects. This supports a coherent studio umbrella without forcing all projects into one product category.
- [Supergiant Games](https://www.supergiantgames.com/): named games, concise descriptions, project artwork, platform information, and direct navigation make the work easy to inspect. Apply its evidence-first project presentation; a news feed is unnecessary for Low HP’s first version.
- [Sokpop](https://sokpop.co/): a concise collective identity is a useful reminder that a studio can have personality without a long corporate introduction. Its homepage supplied only limited text in this research, so no detailed visual claims are made.

These are structural references, not layouts or artwork to copy.

## Three possible visual territories

1. **Indie Workshop — recommended.** Editorial typography, warm neutral ground, asymmetrical project features, quiet technical captions. Fits both the games and Templio; gives the founder a visible role. Real project imagery supplies most of the color.
2. **After Hours Arcade.** Dark canvas, oversized game title treatment, cinematic stills and compact navigation. Strongest if Low HP later becomes primarily a game studio; Templio would be visually secondary.
3. **Studio Field Notes.** A typographic project index with dates, sketches, and development notes. Strong for building in public, but needs a maintained writing habit and understates the existing visual assets.

The recommended direction uses warm ivory, near-black, muted gray, and an ember accent. Use a bold readable sans for headlines, normal sentence-case body text, and a monospace face only for small labels. Keep the existing multicolor logo intact. This is a proposal, not a new approved brand standard.

## Recommended one-page structure

1. **Introduction:** studio name, proposed headline, clear games/web descriptor, project anchor.
2. **Selected projects:** lead with Burnhop, then Greytrace and Templio. Each gets a genuine image, one-sentence explanation, category, availability, and useful link. Three projects do not need filters or a carousel.
3. **Inside the studio:** a short account of experimentation, game feel, and care for the web, grounded in the demonstrated projects.
4. **Founder:** Ayush’s name, confirmed role, brief factual bio, and verified portfolio/GitHub links. Portrait optional; no invented founding date, location, team size, or credentials.
5. **Contact:** intended address ayush@lowhp.studio. Infrastructure must verify delivery before publication. Keep this prerequisite in the handoff, not as awkward customer-facing copy. No backend form.
6. **Footer:** project links, source organization, copyright, and the small “Still building” personality detail.

For startup-program credibility, the useful evidence is identifiable ownership, actual project destinations, accurate project status, and a working contact address. Eligibility is not assessed here. Avoid unsupported traction, incorporation, revenue, funding, partnership, or customer claims. The public GitHub organization bio still describes career tools and AI; a separate approved profile cleanup would make it consistent with the redesigned site.

## Assets and verification performed

- Landing repo inspected read-only on branch `redesign` at `4e36c6e`. Existing deletion of `.vscode/settings.json` preserved.
- Research artifacts live in a separate detached worktree, `../landing-redesign-review`, based on the same commit.
- Read relevant local project READMEs and agent instructions; queried GitHub repository metadata and Templio’s current landing copy.
- Burnhop, Greytrace, and Templio public URLs returned HTTP 200 on this date.
- Burnhop entrance and Templio homepage inspected in the collaborative browser and captured as genuine screenshots.
- Greytrace has a captured live page; its exact captured state is recorded in the accompanying asset note. No fresh full gameplay, multiplayer, mobile game-support, or release-installation verification is claimed.
- Templio’s current examples are visible, but a production showcase screenshot should be captured with the carousel settled on a deliberately chosen example. A real interface screenshot is preferable to an invented product mockup.
- Existing native Burnhop screenshots are available locally under `burnhop-native/docs/screenshots/`. Label them native development footage if used.

## Implementation and infrastructure handoff proposal

Retain Next.js, TypeScript, and Tailwind. Build a single static page and store project data in one typed content list. Configure `output: 'export'`; after implementation, `pnpm build` should produce **out/** for the infrastructure agent. This is a planned output contract, not the present repository’s configuration or a completed export check. See [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports).

Use static/local screenshots and a static social preview. Use ordinary image files or a static-compatible image setup. Consolidate favicon metadata to the existing root asset paths. Include title, description, canonical URL, Open Graph/Twitter image, robots, and sitemap. The final canonical hostname must be aligned with the infrastructure agent’s decision.

Implementation checks: lint, typecheck, static build, serve and inspect out/, desktop and 375px mobile review, keyboard focus, reduced motion, contrast, image loading, and outbound links. Keep the initial page usable without animation and avoid loading a game runtime inside the landing page.

A focused one-page implementation is a reasonable 60–90-minute target once this direction is chosen and the assets are ready. A trailer, playable hero, custom CMS, press kit, blog, or case-study subpages should be later scope.

No DNS, hosting, email settings, production deployments, pushes, merges, or emails were performed.
