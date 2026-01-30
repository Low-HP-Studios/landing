export default function Home() {
  return (
    <main className="relative min-h-screen md:h-screen flex items-center justify-center px-6 py-12 md:py-0">
      <div className="w-full max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <section className="space-y-6 anim-rise" style={{ animationDelay: "0.05s" }}>
          <div className="space-y-3">
            <h1
              className="font-logo text-6xl sm:text-7xl md:text-8xl leading-none tracking-tight text-text-primary anim-rise"
              style={{ animationDelay: "0.1s" }}
            >
              Lowhp
            </h1>
            <p
              className="text-text-secondary text-lg sm:text-xl anim-fade"
              style={{ animationDelay: "0.2s" }}
            >
              Low HP Studios builds developer-friendly career tools that blend
              visual editing, AI intelligence, and code-level control.
            </p>
          </div>
          <div
            className="pt-6 border-t border-surface-border anim-fade"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-text-muted text-sm uppercase tracking-[0.3em]">
              Studio
            </p>
            <p className="text-text-primary text-lg font-medium">
              Professional core, playful edge.
            </p>
          </div>
        </section>

        <section className="space-y-8 anim-rise" style={{ animationDelay: "0.15s" }}>
          <div className="space-y-3">
            <p className="text-text-muted text-sm uppercase tracking-[0.3em]">
              Product
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-text-primary anim-fade">
              Loadout
            </h2>
            <p className="text-text-secondary text-lg sm:text-xl anim-fade">
              A Career Operating System that helps you structure, version, and
              sync your professional identity.
            </p>
          </div>

          <ul className="space-y-3 text-text-secondary">
            {[
              "Structured profiles built for clarity",
              "Versioned resumes for every role",
              "Synced updates across resume, site, and letters",
              "Adaptable identity as your career evolves",
            ].map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3 anim-fade"
                style={{ animationDelay: `${0.25 + index * 0.08}s` }}
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent anim-pulse" />
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div
            className="pt-6 border-t border-surface-border anim-fade"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-text-primary text-lg">
              Building in the open. More soon.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
