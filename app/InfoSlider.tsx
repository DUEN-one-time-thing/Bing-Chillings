"use client";

import { useState } from "react";

const slides = [
  {
    label: "What is FlashBack?",
    body: "FlashBack is a compact panoramic photo capture device designed for campus events, club tabling, and spontaneous gatherings. It sweeps a smooth 270-degree arc around a group and prints a physical keepsake on the spot — something people can hold, trade, and remember long after the event ends.",
  },
  {
    label: "Why we made FlashBack.",
    body: "The inspiration is simple: cultivate real social interaction in a world where community can drift into social media isolation. FlashBack reimagines the polaroid photo machine as a compact event companion — making campus interactions feel more present, playful, and worth holding onto.",
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
