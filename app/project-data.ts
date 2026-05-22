export const milestones = [
  {
    title: "Weeks 1-2",
    body: "The team aligned on the campus social gap, researched compact photo booth precedents, and defined FlashBack as a physical keepsake machine for club tabling and spontaneous gathering moments.",
  },
  {
    title: "Week 3",
    body: "Initial mechanical and electrical designs took shape through enclosure sketches, rotation studies, wiring maps, and schematic planning for the camera, lighting, controls, and print path.",
  },
  {
    title: "Week 4",
    body: "Core components were procured while early prototypes tested fit, power behavior, button inputs, camera capture flow, and the first versions of the Raspberry Pi software stack.",
  },
  {
    title: "Week 5",
    body: "Physical fabrication moved into 3D printed PLA assembly, structural integration, servo mounting, bayonet extension checks, ring light placement, and internal wiring organization.",
  },
  {
    title: "Week 6",
    body: "The final system was calibrated for smooth 270-degree capture, touchscreen preview, print timing, power safety, field deployment, debugging, and repeated user testing.",
  },
];

export const bom = [
  ["Raspberry Pi 4 (4GB RAM)", "1", "FREE", "FREE"],
  ["Twidec/Spade Crimp Connectors", "1", "$5.45", "$5.45"],
  ["6 Way Fuse Block Box", "1", "$10.37", "$10.37"],
  ["5 In. Touchscreen IPS", "1", "$38.95", "$38.95"],
  ["Thermal Printer", "1", "$51.22", "$51.22"],
  ["Thermal Paper Rolls", "1", "$13.10", "$13.10"],
  ["24 Bits Ring Light", "1", "$9.82", "$9.82"],
  ["Lipo-Ion Battery 12V", "1", "$8.96", "$8.96"],
  ["High Torque Servo", "1", "$16.38", "$16.38"],
  ["Ball Bearings", "1", "$8.03", "$8.03"],
  ["Heat Sink", "1", "$7.64", "$7.64"],
  ["Filament (PLA)", "1", "$48.06", "$48.06"],
  ["3D Printing Glue", "1", "$14.74", "$14.74"],
];

export const guideSteps = [
  "Flip the side ON/OFF toggle switch to ON.",
  "Gather participants around the camera, supporting an arc up to 270 degrees.",
  "Manually adjust the bayonet camera extension mount height and lock with the peg.",
  "Cycle through the ring light settings using the control button: Max, Dimmed, or Off.",
  "Use the Green button to preview the shot on the 5-inch touchscreen IPS display.",
  "Press the Blue capture button to initiate the smooth 270-degree servo rotation.",
  "Retrieve your freshly printed memory from the thermal printer slot.",
];

export const checklist = [
  "Charge the 12.6V rechargeable LiPo battery before events.",
  "Replace thermal paper rolls when the feed window looks low.",
  "Check wiring and connectors for heat damage or looseness.",
  "Wipe down the PLA exterior and touchscreen between uses.",
];

export const departments = [
  {
    title: "Electronics & Computer Science Team",
    description:
      "The electronics team wires the entirety of the Raspberry Pi and all of the electrical components, while the computer science team codes every integrated component—including the high-torque servo motor, the ring light, the touchscreen interface, and the custom user interface (UI).",
    members: [
      { name: "John", image: "" },
      { name: "Armaan", image: "" },
      { name: "Aneel", image: "" },
      { name: "Divjot", image: "" },
      { name: "Andrew", image: "" },
      { name: "Shub", image: "" },
    ],
  },
  {
    title: "CAD & Hardware Team",
    description:
      "The CAD and hardware team meticulously designs every structural component of the machine, handles the slicing and 3D printing workflows, and physically assembles the final chassis parts.",
    members: [
      { name: "Mandee", image: "" },
      { name: "Cerene", image: "" },
      { name: "Theresa", image: "" },
      { name: "Viv", image: "" },
      { name: "Rylan", image: "" },
      { name: "Logan", image: "" },
      { name: "Lindsey", image: "" },
      { name: "Andre", image: "" },
      { name: "Shaun", image: "" },
    ],
  },
  {
    title: "Documentation Team",
    description:
      "The documentation team coordinates external outreach, social media, and fundraising events, while managing website development, project timelines, video production, promotional brochures, and official logo designs.",
    members: [
      { name: "Ema", image: "" },
      { name: "Nat", image: "" },
      { name: "Rebekah", image: "" },
      { name: "Sanjana", image: "" },
      { name: "Grace", image: "" },
      { name: "Jacob", image: "" },
    ],
  },
];
