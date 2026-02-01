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
    <main className="w-full max-w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16">
        <div className="reveal text-center md:text-left w-full" style={stagger(0, 0.18)}>
          <BrandBar />
        </div>

        <section className="w-full flex flex-col gap-5 sm:gap-6 md:gap-8 text-center md:text-left">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight leading-tight lg:leading-snug reveal"
            style={stagger(1, 0.18)}
          >
            <RainbowText text="Developer-friendly" delay={0} /> career tools for
            a more expressive professional identity.
          </h1>
          <p
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 reveal reveal-color leading-[1.2]"
            style={stagger(2, 0.18)}
          >
            Low HP Studios builds products that blend visual editing, AI
            intelligence, and code-level control for modern creators.
          </p>
        </section>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <article
            className="panel panel--studio reveal text-center md:text-left w-full"
            style={stagger(3, 0.18)}
          >
            <p className="text-text-muted text-xs uppercase tracking-[0.4em]">
              Studio
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary">
              <RainbowText text="Professional core, playful edge." delay={4} />
            </h2>
            <p className="mt-4 text-text-secondary text-sm sm:text-base md:text-lg">
              We design lean, opinionated tools that feel intentional, flexible,
              and distinctly human.
            </p>
          </article>

          <article
            className="panel panel--product reveal text-center md:text-left w-full"
            style={stagger(4, 0.18)}
          >
            <p className="text-text-muted text-xs uppercase tracking-[0.4em]">
              Product
            </p>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center md:justify-between gap-2 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary">
                <RainbowText text="Loadout" delay={8} />
              </h2>
              <span className="text-text-muted text-xs sm:text-sm uppercase tracking-[0.3em]">
                Coming soon
              </span>
            </div>
            <p className="mt-4 text-text-secondary text-sm sm:text-base md:text-lg">
              A Career Operating System that helps you structure, version, and
              sync your professional identity.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:gap-3 text-left">
              {[
                "Structured profiles built for clarity",
                "Versioned resumes for every role",
                "Synced updates across resume, site, and letters",
                "Adaptable identity as your career evolves",
              ].map((item) => (
                <div key={item} className="feature-item">
                  <svg
                    className="feature-arrow"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg text-text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
