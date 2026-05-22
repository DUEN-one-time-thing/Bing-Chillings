import Link from "next/link";

import { TeamDepartments } from "../team-components";

export default function Team() {
  return (
    <main>
      <nav className="siteNav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="FlashBack home">
          FlashBack
        </Link>
        <div className="navLinks">
          <Link href="/#home">Home</Link>
          <Link href="/project">Project</Link>
          <Link href="/details#timeline">Timeline</Link>
          <Link href="/project#manual">Manual</Link>
        </div>
      </nav>

      <header className="detailsHeader">
        <p className="eyebrow">About Us</p>
        <h1>Bing Chilling Cohort</h1>
        <p>
          Meet the departments behind FlashBack, organized dynamically so team
          profiles can be expanded as names and photos are finalized.
        </p>
      </header>

      <section className="section teamSection">
        <TeamDepartments />
      </section>

      <footer className="globalFooter">
        <p>FlashBack by DUEN Spring 2026 Cohort Bing Chilling</p>
      </footer>
    </main>
  );
}
