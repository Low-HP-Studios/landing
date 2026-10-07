import Image from "next/image";
import BrandBar from "../components/BrandBar";
import ProjectGallery from "../components/ProjectGallery";
import { ArrowUpRight, ArrowDown } from "../components/Icons";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <BrandBar />
      <main id="main" tabIndex={-1}>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-eyebrow">
            <span className="status-dot" /> Independent games &amp; web
            experiences
          </div>
          <h1 id="hero-title">
            LOW HP<span className="hero-period">.</span>
          </h1>
          <div className="hero-bottom">
            <div className="health-signature">
              <span className="health-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>
                Low health.
                <br /> High spirit.
              </span>
            </div>
            <p>
              A small studio with a thing for
              <br className="desktop-break" /> games, good websites, and{" "}
              <em>what if?</em>
            </p>
            <a
              className="round-link"
              href="#projects"
              aria-label="Explore our projects"
            >
              <ArrowDown />
            </a>
          </div>
        </section>
        <section className="featured shell" aria-labelledby="featured-title">
          <a
            className="featured-visual"
            href="https://burnhop.lowhp.studio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Burnhop, a solo practice browser prototype (opens in a new tab)"
          >
            <div className="image-topline">
              <span>In the spotlight</span>
              <span>01 / 03</span>
            </div>
            <div className="featured-image">
              <Image
                src="/projects/burnhop.webp"
                alt="Burnhop’s illustrated pilot at the entrance to a moonlit desert shooting game"
                width={1280}
                height={800}
                priority
                sizes="(max-width: 700px) 100vw, 90vw"
              />
            </div>
            <span className="image-action">
              <ArrowUpRight />
            </span>
          </a>
          <div className="featured-caption">
            <div>
              <p className="eyebrow">Featured project / Game</p>
              <h2 id="featured-title">Burnhop</h2>
            </div>
            <p>
              Jet boots. Tiny pilots. Questionable decisions.
              <br />A side-view shooting prototype with a lot of personality.
            </p>
            <span className="outline-tag">Solo practice · Browser</span>
          </div>
        </section>
        <ProjectGallery />
        <section
          id="studio"
          className="studio-section"
          aria-labelledby="studio-title"
        >
          <div className="shell studio-layout">
            <div className="studio-label">
              <span className="eyebrow">The studio</span>
              <span className="outline-tag dark-tag">Independently built</span>
            </div>
            <div className="studio-copy">
              <h2 id="studio-title">
                Serious about
                <br />
                making things.
                <br />
                <span>
                  Playful about
                  <br />
                  everything else.
                </span>
              </h2>
              <div className="studio-paragraphs">
                <p>
                  Low HP Studio is where ideas become things you can play,
                  explore, and make your own. A jet-powered game one day. A
                  carefully crafted corner of the web the next.
                </p>
                <p>
                  The common thread? Curiosity, a feel for the details, and the
                  belief that small projects deserve real care.
                </p>
              </div>
              <a
                className="text-link light-link"
                href="https://github.com/Low-HP-Studios"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the studio on GitHub <ArrowUpRight />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div className="studio-aside" aria-hidden="true">
              <span className="big-asterisk">✳</span>
              <p>
                SMALL STUDIO.
                <br />
                KEEP PLAYING.
              </p>
            </div>
          </div>
        </section>
        <section
          id="founder"
          className="founder-section shell"
          aria-labelledby="founder-title"
        >
          <div className="founder-heading">
            <p className="eyebrow">Behind the studio</p>
            <h2 id="founder-title">
              The person
              <br />
              behind
              <br />
              the pixels.
            </h2>
          </div>
          <div className="founder-card">
            <div className="portrait">
              <Image
                src="/studio/ayush.webp"
                alt="Illustrated portrait of Ayush Rameja, from his personal website"
                width={1200}
                height={400}
                sizes="(max-width: 700px) 100vw, 42vw"
              />
            </div>
            <div className="founder-card-bottom">
              <div>
                <h3>Ayush Rameja</h3>
                <p>Founder &amp; developer</p>
              </div>
              <a
                className="round-link"
                href="https://ayush.im"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ayush Rameja’s portfolio (opens in a new tab)"
              >
                <ArrowUpRight />
              </a>
            </div>
            <p className="founder-bio">
              I build the games and websites you see here. Low HP is the home
              for that work: a place to experiment, learn by making, and keep
              following the interesting ideas.
            </p>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section shell"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <p className="eyebrow">Good things start with a conversation.</p>
            <span className="health-bars" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
          <a className="contact-link" href="mailto:ayush@lowhp.studio">
            <h2 id="contact-title">
              Say hello<span aria-hidden="true">↗</span>
            </h2>
            <span className="contact-address">ayush@lowhp.studio</span>
          </a>
          <div className="contact-note">
            <p>
              A project, a playtest, or just a good idea.
              <br />
              There’s room for a conversation.
            </p>
            <a
              className="text-link"
              href="https://ayush.im"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Ayush online <ArrowUpRight />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a
          className="footer-brand"
          href="#main"
          aria-label="Low HP Studio, back to top"
        >
          lowhp<span aria-hidden="true">✳</span>
        </a>
        <p>© {new Date().getFullYear()} Low HP Studio</p>
        <div>
          <a
            href="https://github.com/Low-HP-Studios"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
