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
        </div>
      </nav>

      <header className="detailsHeader">
        <p className="eyebrow">Meet the Team</p>
        <h1>Bing Chilling Cohort</h1>
        <p>Meet the people behind FlashBack</p>
      </header>

      <section className="section videoSection" aria-labelledby="team-video-title">
        <div className="sectionHeader">
          <p className="eyebrow">Documentation</p>
          <h2 id="team-video-title">Bing Chilling Cohort Documentation Video</h2>
        </div>
        <div className="videoPlayer">
          <iframe
            src="https://www.youtube.com/embed/NprNPgzAIpI"
            title="Bing Chilling Cohort Documentation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section teamSection">
        <TeamDepartments />
      </section>

      <footer className="globalFooter">
        <p>FlashBack by DUEN Spring 2026 Cohort Bing Chilling</p>
      </footer>
    </main>
  );
}
