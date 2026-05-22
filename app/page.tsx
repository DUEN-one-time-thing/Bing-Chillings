import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="siteNav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="FlashBack home">
          FlashBack
        </a>
        <div className="navLinks">
          <a href="#home">Home</a>
          <Link href="/project">Project</Link>
          <Link href="/details#timeline">Timeline</Link>
          <Link href="/project#manual">Manual</Link>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="photoPlaceholder" aria-label="Project photo placeholder">
          <span>Project photo placeholder</span>
        </div>
        <div className="heroOverlay">
          <p className="eyebrow">DUEN Spring 2026 Cohort</p>
          <h1>FlashBack</h1>
          <p>
            A compact 270-degree photo machine for club tabling, campus events,
            and physical keepsakes. This page separates the build logic,
            operating flow, safety notes, and materials into quick-reference
            sections.
          </p>
          <Link className="cta" href="/team">
            Meet the Team
          </Link>
        </div>
      </section>

      <section id="about" className="section aboutSection reveal">
        <div className="sectionHeader">
          <p className="eyebrow">About Us</p>
          <h2>Bing Chilling builds for face-to-face connection.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            FlashBack was created by the Spring 2026 DUEN cohort nicknamed
            Bing Chilling, a team exploring how engineering can make campus
            interactions feel more present, playful, and memorable.
          </p>
          <p>
            The inspiration is simple: cultivate real social interaction in a
            world where community can drift into social media isolation.
            FlashBack reimagines the modern polaroid-like photo machine as a
            compact event companion that prints physical, tangible keepsakes
            people can hold, trade, and remember.
          </p>
          <a href="https://duendavis.com/" target="_blank" rel="noreferrer">
            Visit DUEN Davis
          </a>
        </div>
      </section>

      <section className="section videoSection reveal" aria-labelledby="video-title">
        <div className="sectionHeader">
          <p className="eyebrow">Documentation</p>
          <h2 id="video-title">Bing Chilling Cohort Documentation Video</h2>
        </div>
        <div className="videoPlayer" aria-label="YouTube video embed placeholder">
          <div className="playButton" aria-hidden="true" />
          <p>YouTube embed placeholder</p>
        </div>
      </section>

      <footer className="globalFooter">
        <p>FlashBack by DUEN Spring 2026 Cohort Bing Chilling</p>
      </footer>
    </main>
  );
}
