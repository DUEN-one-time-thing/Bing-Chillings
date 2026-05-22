"use client";

import { useState } from "react";

const slides = [
  {
    label: "What is FlashBack?",
    body: "FlashBack is a portable photo booth designed to capture and print panoramic photostrips in real time. Using image stitching and instant thermal printing, FlashBack delivers panoramic photostrips directly to users within seconds. Every print serves as a tangible memory students can keep and preserve.",
  },
  {
    label: "Why we made FlashBack.",
    body: "Many student memories today only exist digitally, making campus experiences feel temporary and easy to forget. Flashback was created to give students a tangible way to preserve meaningful moments while helping clubs create interactive experiences that increase engagement, attract attention, and leave lasting impressions.",
  },
];

export function InfoSlider() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = (index: number) => {
    if (phase !== "idle" || index === active) return;
    setDirection(index > active ? "right" : "left");
    setPhase("out");
    setTimeout(() => {
      setActive(index);
      setPhase("in");
      setTimeout(() => setPhase("idle"), 350);
    }, 280);
  };

  return (
    <section className="infoSlider">
      <div className="infoSliderInner">
        <div className={`flashcard flashcard--${phase} flashcard--${direction}`}>
          <h2 className="flashcardLabel">{slides[active].label}</h2>
          <p className="flashcardBody">{slides[active].body}</p>
        </div>
        <div className="flashcardNav">
          {slides.map((slide, i) => (
            <button
              key={i}
              className={`flashcardNavBtn${active === i ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={slide.label}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
