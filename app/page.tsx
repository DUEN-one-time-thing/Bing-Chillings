import Link from "next/link";
import { InfoSlider } from "./InfoSlider";

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
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="photoPlaceholder" aria-label="Project photo placeholder">
          <span>Project photo placeholder</span>
        </div>
        <div className="heroOverlay">
          <p className="eyebrow">DUEN Spring 2026 Cohort</p>
          <h1>
            <img src="/flashback_logo.png" alt="FlashBack" className="heroLogo" />
          </h1>
          <p>
            A compact 270-degree photo machine for club tabling, campus events,
            and physical keepsakes.
          </p>
        </div>
      </section>

      <InfoSlider />

      <section id="about" className="section aboutSection reveal">
        <div className="sectionHeader">
          <p className="eyebrow">About Us</p>
          <h2>We are the Spring 2026 DUEN Cohort, Bing Chilling.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            Nowadays, digitized media leads to less tangible memories because important
            experiences are often stored on mobile devices and easily get lost.
          </p>
          <p>
            FlashBack was built to change that, an exciting photo booth that draws
            greater attention to holding onto special memories through physical keepsakes
            at DUEN tabling and formal events.
          </p>
          <a href="https://duendavis.com/" target="_blank" rel="noreferrer">
            Visit DUEN Davis
          </a>
          <div className="ctaRow">
            <Link className="cta" href="/team">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <footer className="globalFooter">
        <p>FlashBack by DUEN Spring 2026 Cohort Bing Chilling</p>
      </footer>
    </main>
  );
}
