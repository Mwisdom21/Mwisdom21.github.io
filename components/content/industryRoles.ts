export type IndustryRoleWindowId =
  | "industryL3harris"
  | "industryCollins"
  | "industryRaytheon"
  | "industryNuaxis";

export type IndustryRole = {
  windowId: IndustryRoleWindowId;
  folderLabel: string;
  folderSubtitle: string;
  title: string;
  affiliation: string;
  overview: string;
  highlights: string[];
  tools: string[];
};

export const INDUSTRY_ROLE_ORDER: IndustryRoleWindowId[] = [
  "industryL3harris",
  "industryCollins",
  "industryRaytheon",
  "industryNuaxis",
];

export const INDUSTRY_ROLES: Record<IndustryRoleWindowId, IndustryRole> = {
  industryL3harris: {
    windowId: "industryL3harris",
    folderLabel: "L3Harris Technologies",
    folderSubtitle: "June 2025 - Present",
    title: "Specialty Software Engineer (Configuration Management)",
    affiliation: "Palm Bay, FL",
    overview:
      "Supporting aerospace software/configuration workflows, automation, and controlled technical documentation for multi-program delivery.",
    highlights: [
      "Improved automated workflow pipelines and CM processes across multiple aerospace programs.",
      "Supported in-house applications and process improvements with reported annual savings of approximately $73k.",
      "Maintained controlled documentation for space and airborne systems technical libraries.",
    ],
    tools: ["Configuration Management", "Automation", "Aerospace Systems", "Technical Documentation"],
  },
  industryCollins: {
    windowId: "industryCollins",
    folderLabel: "Collins Aerospace",
    folderSubtitle: "June 2024 - Present",
    title: "Data Engineer Intern",
    affiliation: "Washington, DC",
    overview:
      "Built internal data workflow tooling and improved data quality and retrieval performance for engineering stakeholders.",
    highlights: [
      "Developed SharePoint Power Apps to streamline internal data workflows.",
      "Cleaned and normalized datasets to improve retrieval efficiency by 30 percent.",
      "Delivered reusable workflow patterns for operations and reporting tasks.",
    ],
    tools: ["Power Apps", "SharePoint", "Data Cleaning", "Workflow Automation"],
  },
  industryRaytheon: {
    windowId: "industryRaytheon",
    folderLabel: "Raytheon I&S",
    folderSubtitle: "June 2023 - Present",
    title: "Systems Engineering Intern",
    affiliation: "Sterling, VA",
    overview:
      "Automated satellite-data engineering tasks and improved repeatability of systems workflows for mission support.",
    highlights: [
      "Improved NOAA satellite data workflow efficiency by 20 percent using VBA and Excel automation.",
      "Collaborated with systems engineering teams to refine process reliability.",
      "Translated manual reporting tasks into repeatable automation templates.",
    ],
    tools: ["Systems Engineering", "VBA", "Excel Automation", "Satellite Data Workflows"],
  },
  industryNuaxis: {
    windowId: "industryNuaxis",
    folderLabel: "NuAxis Innovations",
    folderSubtitle: "May 2021 - August 2021",
    title: "ServiceNow Developer Intern",
    affiliation: "Virtual / Remote",
    overview:
      "Built low-code ServiceNow applications for data management and system-administration operations.",
    highlights: [
      "Developed ServiceNow apps to support data management and platform administration.",
      "Configured workflow logic to reduce repetitive process overhead.",
      "Delivered practical low-code solutions aligned with team operations.",
    ],
    tools: ["ServiceNow", "Low-Code Development", "Workflow Design", "System Administration"],
  },
};