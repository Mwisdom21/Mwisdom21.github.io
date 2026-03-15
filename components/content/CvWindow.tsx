export function CvWindow() {
  const cvPath = "/docs/MasiaWCVUltimate.pdf";

  return (
    <section className="fm-cv-window">
      <h2 className="fm-content-title">Resume / CV</h2>

      <div className="fm-cv-toolbar">
        <a className="fm-link-btn" href={cvPath} target="_blank" rel="noreferrer">
          Open in New Tab
        </a>
        <a className="fm-link-btn" href={cvPath} download>
          Download PDF
        </a>
      </div>

      <div className="fm-cv-frame-wrap">
        <iframe
          className="fm-cv-frame"
          src={`${cvPath}#toolbar=1&navpanes=0&view=FitH`}
          title="Masia Wisdom CV PDF"
        />
      </div>
    </section>
  );
}