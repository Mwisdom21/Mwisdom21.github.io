export type AwardWindowId = "awardsPitch" | "awardsHonors" | "awardsScholarships";

export type AwardEntry = {
  windowId: AwardWindowId;
  folderLabel: string;
  folderSubtitle: string;
  title: string;
  organization: string;
  overview: string;
  highlights: string[];
  tags: string[];
};

export const AWARD_ENTRY_ORDER: AwardWindowId[] = ["awardsPitch", "awardsHonors", "awardsScholarships"];

export const AWARD_ENTRIES: Record<AwardWindowId, AwardEntry> = {
  awardsPitch: {
    windowId: "awardsPitch",
    folderLabel: "Pitch Competition",
    folderSubtitle: "HU Empower - 2024",
    title: "HU Empower Pitch Competition",
    organization: "Howard University",
    overview:
      "Presented a space-technology startup concept and received competitive funding through the HU Empower pitch program.",
    highlights: [
      "Awarded $2,500 for a space-tech startup pitch.",
      "Built and delivered a concise venture narrative focused on technical feasibility and user impact.",
      "Translated engineering ideas into clear business and execution milestones.",
    ],
    tags: ["Pitch", "Entrepreneurship", "Space Tech", "2024"],
  },
  awardsHonors: {
    windowId: "awardsHonors",
    folderLabel: "Awards + Honors",
    folderSubtitle: "2023 - 2025",
    title: "Selected Awards & Competition Results",
    organization: "Multiple Programs",
    overview:
      "Recognition across quantum, engineering, and civic technology competitions.",
    highlights: [
      "Quantum AI Challenge - 1st Place (2025), sponsored by Flapmax and IBM.",
      "Bison Bytes Hackathon - 4th Place (2025).",
      "Tech for Change Civic Hackathon - 2nd Place (2023).",
    ],
    tags: ["Quantum", "Hackathon", "Awards", "2023-2025"],
  },
  awardsScholarships: {
    windowId: "awardsScholarships",
    folderLabel: "Scholarships",
    folderSubtitle: "2021 - 2025",
    title: "Scholarships & Academic Recognition",
    organization: "Howard University + Partners",
    overview:
      "Scholarships and recognitions supporting sustained performance across undergraduate and graduate training.",
    highlights: [
      "Howard University Scholarship - Achievers Award (2021-2025).",
      "SandboxAQ Quantum Scholarship (2025, $500).",
      "Abassynian Baptist Church Scholarship (2021, $1,000).",
      "Dean's List - College of Engineering and Architecture (2024).",
    ],
    tags: ["Scholarship", "Academic", "Merit", "2021-2025"],
  },
};