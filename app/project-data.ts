export const milestones = [
  {
    title: "Weeks 1-2",
    body: "The project entered its initial design phase with most parts ordered, apart from buttons, ribbon cable, and servo. Progress was made on both hardware and software fronts — the panoramic camera capture feature was initialized, prototype code was developed for the emergency and capture buttons, and the Raspberry Pi was successfully set up with the code uploaded.",
    images: ["/timeline/wk12_1.png", "/timeline/wk12_2.png", "/timeline/wk12_3.png"],
  },
  {
    title: "Week 3",
    body: "The team worked on CAD design for camera placement and coded features including still photo capture, live video feed, and motor rotation, though printer problems caused some delays. The design evolved from a boxy shape to a more R2D2-inspired form, and a screen was received and connected to the Raspberry Pi with controls uploaded. Progress on the camera display was halted after the ribbon cable broke, requiring a replacement to be ordered.",
    images: ["/timeline/wk3_1.png", "/timeline/wk3_2.png", "/timeline/wk3_3.png"],
  },
  {
    title: "Week 4",
    body: "A tolerance print was done to test wall connections, and the CAD was migrated to SolidWorks so the whole team could collaborate, though the transfer caused sketches to convert into objects. Hardware progress included completing the height mechanism, connecting the ring light to the Raspberry Pi, and advancing motor, lighting, and early UI code. The UI was redesigned from touchscreen to physical buttons per the project manager's direction, and the thermal printer case was updated with screw holders with the logo added to the rear chassis. The team also worked on the technical presentation, wrapped up the fundraiser, built a roughly 75%-scale cardboard model, and addressed printing challenges using the ESDC printers for fit testing.",
    images: ["/timeline/wk4_1.png", "/timeline/wk4_2.png", "/timeline/wk4_3.png"],
  },
  {
    title: "Week 5",
    body: "The team printed and secured the two base halves, completed the camera housing, and created a bearing mechanism to smooth rotation and reduce servo motor load, while sourcing heat inserts and screws to begin assembly. CAD work continued with tolerance tests for screw connections and partitioning the rear and front chassis into smaller assembly parts for final checks before printing. On the software side, major progress included a UI revamp, merged UI and panoramic functions, a new countdown screen, and verified LED functionality. Broad troubleshooting and testing was conducted across both the CS and EE sides of the project.",
    images: ["/timeline/wk5_1.png", "/timeline/wk5_2.png", "/timeline/wk5_3.png"],
  },
  {
    title: "Week 6",
    body: "The team finalized the mechanical and aesthetic design of the chassis, which involved CAD modeling for counterweight housings and hexagonal cutouts, resizing components, and successfully assembling, painting, and troubleshooting the 3D-printed parts. On the hardware and electronics side, they integrated a camera extension module and verified that the power system could support all components. The project concluded with software integration, where the team successfully connected the user interface to the core code and finalized their reach goals.",
    images: ["/timeline/wk6_1.png", "/timeline/wk6_2.png", "/timeline/wk6_3.png"],
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
      { name: "Divjot Purewal", role: "Subteam Lead", image: "/headshots/divjot.JPG" },
      { name: "Johnathon Li", role: "Co-Captain", image: "/headshots/jonathan.png" },
      { name: "Armaan Dewett", image: "/headshots/armaan.JPG" },
      { name: "Aneel Sethi", image: "/headshots/aneel.jpeg" },
      { name: "Andrew DeLaCruz", image: "/headshots/andrew.JPG" },
      { name: "Shubh Lele", image: "/headshots/shubh.jpg" },
    ],
  },
  {
    title: "CAD & Hardware Team",
    description:
      "The CAD and hardware team meticulously designs every structural component of the machine, handles the slicing and 3D printing workflows, and physically assembles the final chassis parts.",
    members: [
      { name: "Vivian Shen", role: "Subteam Lead", image: "/headshots/viv.jpg" },
      { name: "Mandee Nguyen", role: "Treasurer", image: "/headshots/mandee.JPG" },
      { name: "Cerene Lee", image: "/headshots/cerene.JPG" },
      { name: "Theresa Tsai", image: "/headshots/theresa.JPG" },
      { name: "Rylan Kuo", image: "/headshots/rylan.JPG" },
      { name: "Logan Moul", image: "/headshots/logan.JPG" },
      { name: "Lindsey Ngo", image: "/headshots/lindsey.png" },
      { name: "Andre Velez", image: "/headshots/andre.PNG" },
      { name: "Shaun Kim", image: "/headshots/shaun.png" },
    ],
  },
  {
    title: "Documentation Team",
    description:
      "The documentation team coordinates external outreach, social media, and fundraising events, while managing website development, project timelines, video production, promotional brochures, and official logo designs.",
    members: [
      { name: "Jacob Olano", role: "Subteam Lead", image: "/headshots/jacob.JPG" },
      { name: "Ema Maeda", role: "Co-Captain", image: "/headshots/ema.png" },
      { name: "Natalie Huang", image: "/headshots/nat.jpg" },
      { name: "Rebekah Lee", image: "/headshots/rebekah.JPG" },
      { name: "Sanjana Hazari", image: "/headshots/sanjana.png" },
      { name: "Grace Maruyama", image: "/headshots/grace.jpg" },
    ],
  },
];
