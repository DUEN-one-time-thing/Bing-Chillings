"use client";

import { useState } from "react";

import { milestones } from "../project-data";

export function TimelineExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMilestone = milestones[activeIndex];

  return (
    <section id="timeline" className="section timelineSection">
      <div className="timelineRail" aria-label="FlashBack timeline milestones">
        {milestones.map((milestone, index) => (
          <button
            aria-pressed={activeIndex === index}
            className={activeIndex === index ? "active" : ""}
            key={milestone.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {milestone.title}
          </button>
        ))}
      </div>

      <article className="timelineFocus" aria-live="polite">
        <div className="timelineNumber">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        </div>

        <div className="timelineFocusCopy">
          <p className="eyebrow">Milestone {activeIndex + 1}</p>
          <h3>{activeMilestone.title}</h3>
          <p>{activeMilestone.body}</p>
          <div className="timelineActions">
            <button
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex((current) => current - 1)}
              type="button"
            >
              Previous
            </button>
            <button
              disabled={activeIndex === milestones.length - 1}
              onClick={() => setActiveIndex((current) => current + 1)}
              type="button"
            >
              Next
            </button>
          </div>
        </div>

        <div
          className="timelinePhotoGrid"
          aria-label={`${activeMilestone.title} image placeholders`}
        >
          <div />
          <div />
          <div />
        </div>
      </article>

      <div className="timelineList" aria-label="All timeline summaries">
        {milestones.map((milestone, index) => (
          <button
            className={activeIndex === index ? "active" : ""}
            key={milestone.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{milestone.title}</strong>
            <small>{milestone.body}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
