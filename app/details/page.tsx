import Link from "next/link";

import { TimelineExplorer } from "./TimelineExplorer";

export default function Details() {
  return (
    <main>
      <nav className="siteNav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="FlashBack home">
          FlashBack
        </Link>
        <div className="navLinks">
          <Link href="/#home">Home</Link>
          <Link href="/project">Project</Link>
          <a href="#timeline">Timeline</a>
          <Link href="/project#manual">Manual</Link>
        </div>
      </nav>

      <header className="detailsHeader">
        <h1>Timeline</h1>
        <p>
          Six weeks of FlashBack milestones, from early research to field-ready
          testing.
        </p>
      </header>

      <TimelineExplorer />

      <footer className="globalFooter">
        <p>FlashBack by DUEN Spring 2026 Cohort Bing Chilling</p>
      </footer>
    </main>
  );
}
