export type ResearchTopicWindowId =
  | "researchIbmQuantum"
  | "researchHowardNasa"
  | "researchDoeHpc"
  | "researchNrao"
  | "researchHowardForensics"
  | "researchHasnineAmazon";

export type ResearchTopic = {
  windowId: ResearchTopicWindowId;
  folderLabel: string;
  folderSubtitle: string;
  title: string;
  affiliation: string;
  overview: string;
  highlights: string[];
  tools: string[];
};

export const RESEARCH_TOPIC_ORDER: ResearchTopicWindowId[] = [
  "researchIbmQuantum",
  "researchHowardNasa",
  "researchDoeHpc",
  "researchNrao",
  "researchHowardForensics",
  "researchHasnineAmazon",
];

export const RESEARCH_TOPICS: Record<ResearchTopicWindowId, ResearchTopic> = {
  researchIbmQuantum: {
    windowId: "researchIbmQuantum",
    folderLabel: "IBM HBCU Quantum Center",
    folderSubtitle: "Fall 2023 - Present",
    title: "IBM HBCU Quantum Center Scholar",
    affiliation: "Washington, DC",
    overview:
      "Developing hybrid classical-quantum workflows for healthcare resource allocation with a focus on equity-aware optimization.",
    highlights: [
      "Built a VQE-based model in IBM Qiskit to optimize ICU, ventilator, and PPE allocation strategies.",
      "Integrated CDC and FEMA datasets to simulate realistic emergency-resource allocation scenarios.",
      "Presented technical poster work on QAOA applications and healthcare optimization.",
    ],
    tools: ["Qiskit", "Python", "VQE", "QAOA", "CDC/FEMA Data"],
  },
  researchHowardNasa: {
    windowId: "researchHowardNasa",
    folderLabel: "Howard University / NASA",
    folderSubtitle: "August 2023 - January 2024",
    title: "Howard University / NASA Research",
    affiliation: "Washington, DC",
    overview:
      "Designed and optimized experimental hardware for optical and spectroscopy workflows.",
    highlights: [
      "Designed and 3D-printed custom optical mounts in Autodesk Inventor for lab instrumentation.",
      "Improved Raman experiment sampling accuracy while reducing sample damage in repeated tests.",
      "Documented fixture iteration tradeoffs to support faster experiment setup and calibration.",
    ],
    tools: ["Autodesk Inventor", "3D Printing", "Raman Spectroscopy", "Experimental Design"],
  },
  researchDoeHpc: {
    windowId: "researchDoeHpc",
    folderLabel: "DOE HPC Bootcamp",
    folderSubtitle: "August 2025",
    title: "DOE HPC Bootcamp (NERSC / Argonne)",
    affiliation: "Chicago, IL",
    overview:
      "Modeled large-scale scientific workloads and evaluated architecture tradeoffs on supercomputing infrastructure.",
    highlights: [
      "Simulated fusion/plasma diagnostics and ML workloads on NERSC Perlmutter.",
      "Quantified strong/weak scaling behavior, energy-per-job metrics, and performance-per-watt outcomes.",
      "Proposed next-generation supercomputer design directions using workload and efficiency tradeoff analysis.",
    ],
    tools: ["Perlmutter", "Python", "HPC Performance Modeling", "Argonne/NERSC"],
  },
  researchNrao: {
    windowId: "researchNrao",
    folderLabel: "NRAO",
    folderSubtitle: "July 2023 - March 2024",
    title: "National Radio Astronomy Observatory",
    affiliation: "Washington, DC",
    overview:
      "Worked on electromagnetic-spectrum analysis and prototype hardware development for radio astronomy workflows.",
    highlights: [
      "Analyzed electromagnetic spectrum behavior for radio astronomy applications.",
      "Designed and tested prototype circuits using ELEGOO UNO R3 hardware.",
      "Earned FCC technician license while supporting instrumentation and RF-related experimentation.",
    ],
    tools: ["Arduino/ELEGOO UNO R3", "Spectrum Analysis", "Circuit Prototyping", "RF Systems"],
  },
  researchHowardForensics: {
    windowId: "researchHowardForensics",
    folderLabel: "Howard Digital Forensics",
    folderSubtitle: "December 2021 - May 2022",
    title: "Howard University Research (Dr. Hassan Salmani)",
    affiliation: "Washington, DC",
    overview:
      "Performed memory-forensics workflows to investigate artifacts and system behavior across digital evidence captures.",
    highlights: [
      "Executed memory forensic analysis using FTK Imager and Volatility 3.",
      "Investigated process, credential, and artifact traces from captured memory images.",
      "Documented repeatable analysis workflow for academic digital-forensics exercises.",
    ],
    tools: ["FTK Imager", "Volatility 3", "Digital Forensics", "Memory Analysis"],
  },
  researchHasnineAmazon: {
    windowId: "researchHasnineAmazon",
    folderLabel: "Hasnine Lab / Amazon",
    folderSubtitle: "August 2023 - December 2023",
    title: "Hasnine Lab / Amazon Research",
    affiliation: "Washington, DC",
    overview:
      "Modeled logistics and location-quality workflows for last-mile delivery system improvement.",
    highlights: [
      "Modeled last-mile delivery flows to evaluate route and operations improvement opportunities.",
      "Improved spatial data quality using Google Geolocation API integration.",
      "Connected logistics assumptions to practical accuracy and efficiency outcomes.",
    ],
    tools: ["Python", "Logistics Optimization", "Google Geolocation API", "Data Modeling"],
  },
};