"use client";

import Link from "next/link";
import { useState } from "react";

import { bom, checklist, guideSteps } from "../project-data";
import { TeamDepartments } from "../team-components";

const featureRows = [
  {
    title: "Camera and Rotation",
    body: "A Raspberry Pi Camera Module 2 pairs with a high-torque digital servo to create smooth panoramic motion around a group.",
  },
  {
    title: "Lighting and Preview",
    body: "A 24-bit ring light cycles through Max, Dimmed, and Off settings while a 5-inch IPS display previews the shot.",
  },
  {
    title: "Physical Keepsake",
    body: "The built-in thermal printer turns each captured moment into a tangible memory that participants can take with them.",
  },
];

const pageLinks = [
  ["01", "Overview", "#overview"],
  ["02", "Functionality", "#functionality"],
  ["03", "User Flow", "#user-flow"],
  ["04", "Safety", "#safety"],
  ["05", "Materials", "#materials"],
  ["06", "Maintenance", "#maintenance"],
];

const quickFacts = [
  { label: "Capture Arc", value: "270 degrees" },
  { label: "Power", value: "12.6V LiPo" },
  { label: "Budget", value: "$232.72" },
];

function ProjectManual() {
  return (
    <section className="projectLayout section">
      <aside className="pageIndex" aria-label="Project page sections">
        <p>On this page</p>
        {pageLinks.map(([number, label, href]) => (
          <a href={href} key={href}>
            <span>{number}</span>
            {label}
          </a>
        ))}
      </aside>

      <div className="projectContent">
        <section id="overview" className="projectBlock splitBlock">
          <div>
            <p className="eyebrow">01 - Overview</p>
            <h2>Built to pull people into the same moment.</h2>
          </div>
          <div>
            <p>
              FlashBack is a 270-degree panoramic and high-quality still image
              machine designed for campus events, club fairs, and shared
              keepsake moments. Instead of making interactions disappear into a
              phone feed, it gives students a printed artifact they can hold,
              trade, and remember.
            </p>
            <div className="quickFacts compact" aria-label="Project highlights">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="functionality" className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">02 - Functionality</p>
            <h2>Core systems, grouped by purpose.</h2>
          </div>

          <div className="featureRows">
            {featureRows.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>

          <div className="systemCallout">
            <h3>Technical Stack</h3>
            <p>
              Powered by a 12.6V rechargeable LiPo battery, running on a
              Raspberry Pi 4, and supported by a Raspberry Pi Camera Module 2,
              24-bit ring light, high-torque digital servo, and built-in thermal
              printer.
            </p>
          </div>
        </section>

        <section id="user-flow" className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">03 - User Flow</p>
            <h2>Seven steps from power-on to print.</h2>
          </div>

          <ol className="flowPath">
            {guideSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="safety" className="projectBlock safetyBlock">
          <div>
            <p className="eyebrow">04 - Safety</p>
            <h2>Emergency control stays visible and simple.</h2>
          </div>
          <div className="safetyPanel">
            <h3>Emergency Shutoff</h3>
            <p>
              Press the Red button to cut power instantly to the motors. On
              restart, the camera resets and returns to the ready state.
            </p>
            <ul>
              <li>Do not manually force rotation.</li>
              <li>Do not pull the plug during runtime.</li>
            </ul>
          </div>
        </section>

        <section id="materials" className="projectBlock">
          <div className="materialsHeader">
            <div>
              <p className="eyebrow">05 - Materials</p>
              <h2>Budgeted hardware and raw materials.</h2>
            </div>
            <p className="budget">
              <strong>Total Project Budget:</strong> $232.72
            </p>
          </div>

          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Qty</th>
                  <th>Cost</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {bom.map(([component, qty, cost, total]) => (
                  <tr key={component}>
                    <td>{component}</td>
                    <td>{qty}</td>
                    <td>{cost}</td>
                    <td>{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rawMaterials">
            <h3>Raw Materials Checklist</h3>
            <ul>
              <li>Raspberry Pi Camera Module 2</li>
              <li>20W Adjustable DC to DC Buck Converters (x3)</li>
              <li>Ribbon cables</li>
              <li>Tactile buttons (x5)</li>
              <li>Nuts and bolts</li>
            </ul>
          </div>
        </section>

        <section id="maintenance" className="projectBlock maintenanceBlock">
          <div>
            <p className="eyebrow">06 - Maintenance</p>
            <h2>Event-ready checks before each deployment.</h2>
            <Link className="smallTextLink" href="/details#timeline">
              Timeline
            </Link>
          </div>
          <ul className="maintenanceCards">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

function TeamPanel() {
  return (
    <section className="section projectTeamPanel">
      <div className="sectionHeader">
        <p className="eyebrow">Team</p>
        <h2>The people behind FlashBack.</h2>
      </div>
      <TeamDepartments />
    </section>
  );
}

export function ProjectSwitcher() {
  const [activeView, setActiveView] = useState<"project" | "team">("project");

  return (
    <>
      <div className="viewSwitch" aria-label="Project content view">
        <button
          className={activeView === "project" ? "active" : ""}
          onClick={() => setActiveView("project")}
          type="button"
        >
          See Project
        </button>
        <button
          className={activeView === "team" ? "active" : ""}
          onClick={() => setActiveView("team")}
          type="button"
        >
          View Team
        </button>
      </div>

      {activeView === "project" ? <ProjectManual /> : <TeamPanel />}
    </>
  );
}
