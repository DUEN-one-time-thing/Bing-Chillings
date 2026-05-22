"use client";

import Link from "next/link";
import { InfoSlider } from "./InfoSlider";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "What is FlashBack?",
      content:
        "FlashBack is a portable photo booth designed to capture and print panoramic photostrips in real time. Using image stitching and instant thermal printing, FlashBack delivers panoramic photostrips directly to users within seconds. Every print serves as a tangible memory students can keep and preserve.",
    },
    {
      title: "Why We Made Flashback",
      content:
        "Many student memories today only exist digitally, making campus experiences feel temporary and easy to forget. Flashback was created to give students a tangible way to preserve meaningful moments while helping clubs create interactive experiences that increase engagement, attract attention, and leave lasting impressions.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

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
            FlashBack was built to change that — an exciting photo booth that draws
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

      <section className="section aboutUsSection bgDark reveal" aria-labelledby="about-us-title">
        <div className="aboutUsContent">
          <div className="sectionHeader">
            <p className="eyebrow">About Us:</p>
            <h2 id="about-us-title">FlashBack was created by the Spring 2026 DUEN cohort nicknamed Bing Chilling.</h2>
          </div>
          <p className="aboutUsText">
            FlashBack was created by the Spring 2026 DUEN cohort nicknamed Bing Chilling, a team exploring how engineering can make campus interactions feel more present, playful, and memorable.
          </p>
          <Link className="heroButton" href="/team">
            Meet the Team
          </Link>
        </div>
      </section>

      <footer className="globalFooter">
        <p>FlashBack by DUEN Spring 2026 Cohort Bing Chilling</p>
      </footer>
    </main>
  );
}
