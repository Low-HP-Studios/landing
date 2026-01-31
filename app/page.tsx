import type { CSSProperties } from "react";

import BrandBar from "../components/BrandBar";

const stagger = (index: number, base = 0.12, offset = 0): CSSProperties =>
  ({
    "--delay": `${offset + index * base}s`,
  } as CSSProperties);

const rainbowDelay = (delay: number): CSSProperties =>
  ({
    "--rainbow-delay": `${delay}s`,
  } as CSSProperties);

const RainbowText = ({ text, delay }: { text: string; delay: number }) => (
  <span className="rainbow-stack" style={rainbowDelay(delay)}>
    <span className="rainbow-base">{text}</span>
    <span className="rainbow-glow" aria-hidden="true">
      {text}
    </span>
  </span>
);

export default function Home() {
  return (
    <main className="relative min-h-screen md:h-screen px-6 py-10 md:py-0 flex items-center">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <div className="reveal" style={stagger(0, 0.18)}>
          <BrandBar />
        </div>

        <section className="space-y-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight reveal"
            style={stagger(1, 0.18)}
          >
            <RainbowText text="Developer-friendly" delay={0} /> career tools for
            a more expressive professional identity.
          </h1>
          <p
            className="text-text-secondary text-lg sm:text-xl max-w-2xl reveal reveal-color"
            style={stagger(2, 0.18)}
          >
            Low HP Studios builds products that blend visual editing, AI
            intelligence, and code-level control for modern creators.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="panel reveal" style={stagger(3, 0.18)}>
            <p className="text-text-muted text-xs uppercase tracking-[0.4em]">
              Studio
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-text-primary">
              <RainbowText text="Professional core, playful edge." delay={4} />
            </h2>
            <p className="mt-4 text-text-secondary text-base sm:text-lg">
              We design lean, opinionated tools that feel intentional, flexible,
              and distinctly human.
            </p>
          </article>

          <article className="panel reveal" style={stagger(4, 0.18)}>
            <p className="text-text-muted text-xs uppercase tracking-[0.4em]">
              Product
            </p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
                <RainbowText text="Loadout" delay={8} />
              </h2>
              <span className="text-text-muted text-sm uppercase tracking-[0.3em]">
                Coming soon
              </span>
            </div>
            <p className="mt-4 text-text-secondary text-base sm:text-lg">
              A Career Operating System that helps you structure, version, and
              sync your professional identity.
            </p>
            <ul className="mt-6 space-y-3 text-text-secondary">
              {[
                "Structured profiles built for clarity",
                "Versioned resumes for every role",
                "Synced updates across resume, site, and letters",
                "Adaptable identity as your career evolves",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-base sm:text-lg reveal-color">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}
