import { AWARD_ENTRIES, type AwardWindowId } from "@/components/content/awardEntries";

type AwardDetailWindowProps = {
  entryId: AwardWindowId;
};

export function AwardDetailWindow({ entryId }: AwardDetailWindowProps) {
  const entry = AWARD_ENTRIES[entryId];

  return (
    <section>
      <h2 className="fm-content-title">{entry.title}</h2>
      <p className="fm-topic-meta">
        {entry.organization} | {entry.folderSubtitle}
      </p>
      <p>{entry.overview}</p>

      <ul className="fm-list">
        {entry.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="fm-chip-row" aria-label="Award tags">
        {entry.tags.map((tag) => (
          <span key={tag} className="fm-chip">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}