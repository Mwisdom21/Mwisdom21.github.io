import { AWARD_ENTRY_ORDER, AWARD_ENTRIES, type AwardWindowId } from "@/components/content/awardEntries";

type AwardsWindowProps = {
  onOpenEntry: (entryId: AwardWindowId) => void;
};

export function AwardsWindow({ onOpenEntry }: AwardsWindowProps) {
  return (
    <section>
      <h2 className="fm-content-title">Awards & Pitch Folders</h2>
      <p>Open a folder to view pitch, award, and scholarship details.</p>

      <div className="fm-folder-list" role="list" aria-label="Awards and pitch folders">
        {AWARD_ENTRY_ORDER.map((entryId) => {
          const entry = AWARD_ENTRIES[entryId];

          return (
            <button key={entry.windowId} type="button" className="fm-folder-btn" onClick={() => onOpenEntry(entry.windowId)}>
              <span className="fm-folder-icon" aria-hidden="true" />
              <span className="fm-folder-copy">
                <strong>{entry.folderLabel}</strong>
                <span>{entry.folderSubtitle}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}