import { RESEARCH_TOPIC_ORDER, RESEARCH_TOPICS, type ResearchTopicWindowId } from "@/components/content/researchTopics";

type ResearchWindowProps = {
  onOpenTopic: (topicId: ResearchTopicWindowId) => void;
};

export function ResearchWindow({ onOpenTopic }: ResearchWindowProps) {
  return (
    <section>
      <h2 className="fm-content-title">Research Experience Folders</h2>
      <p>Open a folder to launch a dedicated research experience window.</p>

      <div className="fm-folder-list" role="list" aria-label="Research experiences">
        {RESEARCH_TOPIC_ORDER.map((topicId) => {
          const topic = RESEARCH_TOPICS[topicId];

          return (
            <button key={topic.windowId} type="button" className="fm-folder-btn" onClick={() => onOpenTopic(topic.windowId)}>
              <span className="fm-folder-icon" aria-hidden="true" />
              <span className="fm-folder-copy">
                <strong>{topic.folderLabel}</strong>
                <span>{topic.folderSubtitle}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}