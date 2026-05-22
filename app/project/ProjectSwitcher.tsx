"use client";

import Link from "next/link";

import { bom, checklist, guideSteps } from "../project-data";

const pageLinks = [
  ["01", "Overview", "#overview"],
  ["02", "Functionality", "#functionality"],
  ["03", "User Guide", "#user-guide"],
  ["04", "Design & Manufacturing", "#design"],
  ["05", "Software", "#software"],
  ["06", "Challenges", "#challenges"],
  ["07", "Materials", "#materials"],
  ["08", "Maintenance", "#maintenance"],
  ["09", "Documents & Links", "#documents"],
];

const quickFacts = [
  { label: "Capture Arc", value: "270°" },
  { label: "Capture Time", value: "4.48 sec" },
  { label: "Still Images", value: "16 per shot" },
  { label: "Power", value: "12.6V LiPo" },
  { label: "Processor", value: "Raspberry Pi 4" },
  { label: "Total Cost", value: "$339.60" },
];

const functionalityRows = [
  {
    title: "Power System",
    body: "A 12.6V rechargeable LiPo battery delivers power through a physical ON/OFF toggle switch into a 6-way fuse block, then distributes to four adjustable DC-to-DC buck converters calibrated to 5V, 8V, 5V, and 6V for the Raspberry Pi, thermal printer, ring light, and servo respectively.",
  },
  {
    title: "Central Processing",
    body: "A Raspberry Pi 4 (4GB RAM) acts as the central processing unit, interfacing with the Camera Module 2, 24-bit ring light, digital servo, five tactile control buttons, and a 5-inch Touchscreen IPS LCD display. A heat sink is affixed directly to the Pi for thermal management.",
  },
  {
    title: "Panoramic Capture",
    body: "When the green capture button is pressed, the servo rotates the chassis across a 270-degree arc, triggering 16 individual still images — each captured and processed within 0.28 seconds for a total sequence duration of 4.48 seconds. A Python stitching library merges overlapping frames and auto-crops black pixels to produce a clean panoramic output.",
  },
  {
    title: "User Interface",
    body: "The GUI launches on the 5-inch touchscreen at startup, providing live camera preview and step-by-step on-screen instructions. The yellow button cycles ring light brightness, the blue button triggers a preview shot, and the green button initiates the full panoramic capture sequence.",
  },
];

const designSections = [
  {
    title: "Chassis & Exterior",
    body: "Designed in SolidWorks with a compact polaroid-like aesthetic. The exterior houses a camera height extension module, display screen housing, built-in thermal printer compartment, and an internal electronics enclosure on a honeycomb shelf structure for ventilation and wiring access. Front and rear chassis halves are joined by L-shaped internal tabs and screws; top and bottom halves use male/female connections.",
  },
  {
    title: "Rotation & Stability",
    body: "The entire chassis rotates via a high-torque digital servo motor and sits on a base with a lazy-susan ball bearing ring to evenly distribute weight, reduce motor load, and ensure quiet, smooth rotation. Counterweights are fitted into dedicated housing extrusions in the base plate to prevent wobbling or tipping during operation.",
  },
  {
    title: "Height Adjustability",
    body: "A bayonet mount with L-shaped cutouts at one-inch intervals allows the camera extension pole to be slid vertically and locked in place with a physical peg. The pole length is matched to the chassis so it can sink nearly fully inside for stability during transport and compact storage.",
  },
  {
    title: "Voltage Regulation",
    body: "Three adjustable DC-to-DC buck converters are calibrated to the precise voltage requirements of each component. All hardware peripherals connect to the Pi via ribbon cable for the camera module, with direct wiring for buttons, ring light, servo, and display.",
  },
];

const softwareTools = [
  "Python",
  "Collections of Python Libraries",
  "SolidWorks",
  "Autodesk Fusion",
  "Tinkercad",
  "Visual Studio Code",
  "ChatGPT",
  "Claude Code",
];

const challenges = [
  {
    title: "Camera Stitching",
    body: "Inconsistent lighting in the test room — which changed throughout the day — caused unreliable stitching. Resolution required hours of trial and error tuning the number of captures, angles between captures, inter-capture timing, exposure, and lighting settings.",
  },
  {
    title: "Raspberry Pi Short Circuit",
    body: "Just before the first technical review, the electrical team short-circuited the main Pi. A spare unit was swapped in for a makeshift demonstration with minimal setback since no components had been permanently attached to the damaged board.",
  },
  {
    title: "Hardware Lag",
    body: "Final hardware was not printed until the last week, requiring cardboard prototypes for panoramic function testing throughout development. This introduced instability during rotation testing and made wiring management difficult for the majority of the build cycle.",
  },
  {
    title: "Base & Motor Orientation",
    body: "The entire chassis resting on a single motor screw created load and wobble concerns. The solution was a circular track resting on a lazy-susan ball bearing ring to evenly distribute weight, combined with counterweight housing extrusions in the base plate to eliminate rattling during transport.",
  },
  {
    title: "Chassis Design & Assembly",
    body: "A week of rough sketches and vague models was needed before settling on the polaroid-inspired form — evaluated against R2-D2, Wall-E, and vintage camera concepts. Panel connections evolved through male/female connectors, heat inserts, and glue before landing on internal L-shaped tabs with screws for the front/rear join.",
  },
  {
    title: "Height Adjustability",
    body: "Accommodating various table heights and participant heights required a reliable mechanical solution. The bayonet mount with L-shaped cutouts at one-inch intervals was designed so the pole length matches the chassis depth, allowing near-full retraction for stable transport.",
  },
];

const emergencySteps = [
  "Locate the Emergency Shutoff button (red button).",
  "Press the Emergency Shutoff button.",
  "The motor will be signaled to stop at the next checkpoint.",
  "Screen overlays will close and the main screen will reappear.",
  "The screen can be used again to retry the capture.",
];

const doNotList = [
  "Try to manually rotate the chassis.",
  "Touch any wiring inside the chassis at any time.",
  "Move during capture.",
  "Tangle the charging wire around the chassis — only charge when the machine is not in use.",
];

export function ProjectSwitcher() {
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

        {/* Demo Video */}
        <section className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">Project Demo</p>
            <h2>FlashBack in action.</h2>
          </div>
          <div className="videoPlayer">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="FlashBack Project Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* 01 Overview */}
        <section id="overview" className="projectBlock splitBlock">
          <div>
            <p className="eyebrow">01 — Overview</p>
            <h2>About FlashBack</h2>
          </div>
          <div>
            <p>
              Campus engagement often suffers from a modern disconnect as students increasingly rely on social media rather than face-to-face interaction. FlashBack bridges this gap — a panoramic photo capture machine that prints physical keepsakes to foster lasting, tangible memories at club events, campus fairs, and social gatherings.
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

        {/* 02 Functionality */}
        <section id="functionality" className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">02 — Functionality</p>
            <h2>How It Works</h2>
          </div>
          <div className="featureRows">
            {functionalityRows.map((row) => (
              <article key={row.title}>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 03 User Guide */}
        <section id="user-guide" className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">03 — User Guide</p>
            <h2>Operating Instructions</h2>
          </div>
          <ol className="flowPath">
            {guideSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <div className="safetyBlock" style={{ marginTop: "48px" }}>
            <div>
              <p className="eyebrow">Emergency Shutoff</p>
              <h3>Stop the machine safely at any point.</h3>
            </div>
            <div className="safetyPanel">
              <h3>Shutoff Procedure</h3>
              <ol style={{ margin: "12px 0 20px", paddingLeft: "20px", color: "var(--text-muted)", lineHeight: "1.75" }}>
                {emergencySteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <h3 style={{ marginBottom: "10px" }}>Do Not</h3>
              <ul>
                {doNotList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 04 Design & Manufacturing */}
        <section id="design" className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">04 — Design & Manufacturing</p>
            <h2>Design and Manufacturing</h2>
          </div>
          <div className="featureRows">
            {designSections.map((section) => (
              <article key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 05 Software */}
        <section id="software" className="projectBlock splitBlock">
          <div>
            <p className="eyebrow">05 — Software</p>
            <h2>Tools used to build FlashBack.</h2>
          </div>
          <div className="systemCallout">
            <h3>Stack & Tools</h3>
            <ul style={{ margin: "14px 0 0", paddingLeft: "20px", color: "var(--text-muted)", lineHeight: "1.9" }}>
              {softwareTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 06 Challenges */}
        <section id="challenges" className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">06 — Challenges & Resolutions</p>
            <h2>Problems encountered and how we solved them.</h2>
          </div>
          <div className="featureRows">
            {challenges.map((c) => (
              <article key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 07 Materials */}
        <section id="materials" className="projectBlock">
          <div className="materialsHeader">
            <div>
              <p className="eyebrow">07 — Materials & Cost</p>
              <h2>Budgeted hardware and raw materials.</h2>
            </div>
            <p className="budget">
              <strong>Total Project Budget:</strong> $339.60
            </p>
          </div>
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Qty</th>
                  <th>Unit Cost</th>
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
        </section>

        {/* 08 Maintenance */}
        <section id="maintenance" className="projectBlock maintenanceBlock">
          <div>
            <p className="eyebrow">08 — Maintenance</p>
            <h2>Keeping FlashBack event-ready.</h2>
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

        {/* 09 Documents & Links */}
        <section id="documents" className="projectBlock">
          <div className="sectionHeader compactHeader">
            <p className="eyebrow">09 — Documents & Links</p>
            <h2>Project Resources</h2>
          </div>
          <div className="featureRows">
            <article>
              <h3>Final Presentation</h3>
              <a href="https://docs.google.com/presentation/d/1yb4LGq_SaN8C-NNutf_OEeGjzeH1KUGRpoRw4zWPGhM/edit?usp=sharing" target="_blank" rel="noreferrer">View on Google Slides</a>
            </article>
            <article>
              <h3>Technical Presentation</h3>
              <a href="https://docs.google.com/presentation/d/1SMjxsxLkxzKanTXn3t5aisz5I_r8QwLicsi57YlOyc0/edit?usp=sharing" target="_blank" rel="noreferrer">View on Google Slides</a>
            </article>
            <article>
              <h3>Project Overview</h3>
              <a href="https://docs.google.com/document/d/1qGuwpt997jWAiXrsiN6NeHaPYjR0HXhMGG3PhsuIK94/edit?usp=sharing" target="_blank" rel="noreferrer">View on Google Docs</a>
            </article>
            <article>
              <h3>Manual</h3>
              <a href="https://docs.google.com/document/d/1JGdB-A7jSWkOMh-KM4mb-xCYyCLiiix6YzsVBlv4HnY/edit?usp=sharing" target="_blank" rel="noreferrer">View on Google Docs</a>
            </article>
          </div>
        </section>

      </div>
    </section>
  );
}
