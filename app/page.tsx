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
          <h2>Bing Chilling</h2>
        </div>
        <div className="aboutCopy">
          <p>
            FlashBack was created by the Spring 2026 DUEN cohort called Bing Chilling. A team of 21 UC Davis students exploring how engineering can make campus interactions feel more present, playful, and memorable.
          </p>
          <p>
            DUEN (Davis Undergraduate Engineering Network) is a student engineering organization at UC Davis that brings together students from diverse disciplines to collaborate on hands-on projects and real-world challenges. Through FlashBack, our team combined creativity, design, and engineering.
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
