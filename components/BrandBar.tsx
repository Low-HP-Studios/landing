import Image from "next/image";
import { ArrowUpRight } from "./Icons";
export default function BrandBar() {
  return (
    <header className="site-header shell">
      <a className="brand" href="#main" aria-label="Low HP Studio home">
        <Image src="/brand/logo.svg" alt="" width={32} height={32} />
        <span>
          lowhp<span className="brand-studio">.studio</span>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">
          Projects <span className="nav-count">03</span>
        </a>
        <a href="#studio">Studio</a>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight />
        </a>
      </nav>
    </header>
  );
}
