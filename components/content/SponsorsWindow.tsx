type SponsorEntry = {
  name: string;
  role: string;
  period: string;
  logoSrc: string;
};

const SPONSORS: SponsorEntry[] = [
  {
    name: "IBM HBCU Quantum Center",
    role: "Research Program",
    period: "Fall 2023 - Present",
    logoSrc: "/logos/sponsors/ibm-hbcu-quantum-center.svg",
  },
  {
    name: "IBM",
    role: "Challenge + Research Sponsor",
    period: "2025",
    logoSrc: "/logos/sponsors/ibm.svg",
  },
  {
    name: "Howard University",
    role: "Research Institution",
    period: "2021 - Present",
    logoSrc: "/logos/sponsors/howard-university.png",
  },
  {
    name: "NASA",
    role: "Research Collaborator",
    period: "August 2023 - January 2024",
    logoSrc: "/logos/sponsors/nasa.jpg",
  },
  {
    name: "National Radio Astronomy Observatory (NRAO)",
    role: "Research Collaborator",
    period: "July 2023 - March 2024",
    logoSrc: "/logos/sponsors/nrao.svg",
  },
  {
    name: "U.S. Department of Energy",
    role: "HPC Program Sponsor",
    period: "August 2025",
    logoSrc: "/logos/sponsors/us-doe.png",
  },
  {
    name: "NERSC",
    role: "DOE HPC Bootcamp Infrastructure",
    period: "August 2025",
    logoSrc: "/logos/sponsors/nersc.svg",
  },
  {
    name: "Amazon",
    role: "Logistics Research Collaboration",
    period: "August 2023 - December 2023",
    logoSrc: "/logos/sponsors/amazon.png",
  },
  {
    name: "L3Harris Technologies",
    role: "Specialty Software Engineering",
    period: "June 2025 - Present",
    logoSrc: "/logos/sponsors/l3harris.png",
  },
  {
    name: "Collins Aerospace",
    role: "Data Engineering Internship",
    period: "June 2024 - Present",
    logoSrc: "/logos/sponsors/collins-aerospace.png",
  },
  {
    name: "Raytheon Intelligence & Space",
    role: "Systems Engineering Internship",
    period: "June 2023 - Present",
    logoSrc: "/logos/sponsors/raytheon-iis.png",
  },
  {
    name: "SandboxAQ",
    role: "Quantum Scholarship",
    period: "2025",
    logoSrc: "/logos/sponsors/sandboxaq.png",
  },
  {
    name: "National Society of Black Physicists (NSBP)",
    role: "Conference + Poster Venue",
    period: "2025",
    logoSrc: "/logos/sponsors/nsbp.png",
  },
];

export function SponsorsWindow() {
  return (
    <section>
      <h2 className="fm-content-title">Sponsors & Collaborators</h2>
      <p className="fm-sponsor-intro">Integrated organizations from your research, internships, and scholarship track.</p>

      <div className="fm-sponsor-grid" role="list" aria-label="Sponsors and collaborators">
        {SPONSORS.map((sponsor) => (
          <article key={sponsor.name} className="fm-sponsor-card" role="listitem">
            <div className="fm-sponsor-logo-wrap">
              <img className="fm-sponsor-logo" src={sponsor.logoSrc} alt={`${sponsor.name} logo`} loading="lazy" />
            </div>
            <h3 className="fm-sponsor-name">{sponsor.name}</h3>
            <p className="fm-sponsor-meta">{sponsor.role}</p>
            <p className="fm-sponsor-meta">{sponsor.period}</p>
          </article>
        ))}
      </div>
    </section>
  );
}