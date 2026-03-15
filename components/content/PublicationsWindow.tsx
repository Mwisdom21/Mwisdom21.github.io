type PosterEntry = {
  title: string;
  citation: string;
  venue: string;
  year: string;
  pdfPath: string;
};

const POSTERS: PosterEntry[] = [
  {
    title: "Quant-Enabled Healthcare Resource Allocation: Optimization for Underrepresented Communities",
    citation: "Wisdom, M.; Ryan, H.; Clarice, Y.",
    venue: "IBM HBCU Quantum Center Conference + NSBP Conference",
    year: "2025",
    pdfPath: "/docs/posters/quantum-healthcare-resource-allocation.pdf",
  },
  {
    title: "Hybrid Quantum-Classical Operating Systems (HQCOS) for Embedded Devices",
    citation: "Wisdom, M.",
    venue: "Quantum Noir Poster Session, Harvard University",
    year: "2024",
    pdfPath: "/docs/posters/hqcos-embedded-devices.pdf",
  },
];

export function PublicationsWindow() {
  return (
    <section className="fm-publications-window">
      <h2 className="fm-content-title">Publications & Posters</h2>
      <p className="fm-publication-intro">Selected research posters from your current record.</p>

      <div className="fm-publication-list" role="list" aria-label="Research posters">
        {POSTERS.map((poster) => (
          <article key={poster.title} className="fm-publication-card" role="listitem">
            <p className="fm-publication-year">{poster.year}</p>
            <h3 className="fm-publication-title">{poster.title}</h3>
            <p className="fm-publication-meta">{poster.citation}</p>
            <p className="fm-publication-meta">{poster.venue}</p>

            <div className="fm-publication-actions">
              <a className="fm-link-btn" href={poster.pdfPath} target="_blank" rel="noreferrer">
                Open Poster
              </a>
              <a className="fm-link-btn" href={poster.pdfPath} download>
                Download PDF
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}