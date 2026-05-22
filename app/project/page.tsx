import Link from "next/link";

import { ProjectSwitcher } from "./ProjectSwitcher";

export default function Project() {
  return (
    <main>
      <nav className="siteNav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="FlashBack home">
          FlashBack
        </Link>
        <div className="navLinks">
          <Link href="/#home">Home</Link>
          <a href="#manual">Project</a>
          <Link href="/details#timeline">Timeline</Link>
          <a href="#manual">Manual</a>
        </div>
      </nav>

      <header className="projectHero" id="manual">
        <div className="projectHeroCopy">
          <p className="eyebrow">Project Manual</p>
          <h1>FlashBack, from concept to capture.</h1>
          <p>
            A compact 270-degree photo machine for club tabling, campus events,
            and physical keepsakes. This page separates the build logic,
            operating flow, safety notes, and materials into quick-reference
            sections.
          </p>
        </div>
      </header>

      <ProjectSwitcher />

      <footer className="globalFooter">
        <p>FlashBack by DUEN Spring 2026 Cohort Bing Chilling</p>
      </footer>
    </main>
  );
}
