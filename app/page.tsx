"use client";

import Link from "next/link";
import { useState } from "react";

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
          <h1>FlashBack</h1>
          <p className="heroSubtitle">A way to keep memories alive.</p>
        </div>
        <div className="photoPlaceholder" aria-label="Project photo placeholder">
          <span>Project photo placeholder</span>
        </div>
      </section>

      <section id="about" className="section carouselSection bgLight reveal">
        <div className="carousel">
          <div className="carouselTrack">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carouselCard ${index === currentSlide ? "active" : ""}`}
              >
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
              </div>
            ))}
          </div>

          <div className="carouselControls">
            <button
              className="carouselButton prevButton"
              onClick={prevSlide}
              aria-label="Previous slide"
              disabled={currentSlide === 0}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="carouselDots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide}
                />
              ))}
            </div>

            <button
              className="carouselButton nextButton"
              onClick={nextSlide}
              aria-label="Next slide"
              disabled={currentSlide === slides.length - 1}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="section videoSection bgDark reveal" aria-labelledby="video-title">
        <div className="sectionHeader">
          <p className="eyebrow">Documentation</p>
          <h2 id="video-title">Bing Chilling Cohort Documentation Video</h2>
        </div>
        <div className="videoPlayer" aria-label="YouTube video embed placeholder">
          <div className="playButton" aria-hidden="true" />
          <p>YouTube embed placeholder</p>
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
