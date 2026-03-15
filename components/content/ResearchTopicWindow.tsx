import { RESEARCH_TOPICS, type ResearchTopicWindowId } from "@/components/content/researchTopics";

type ResearchTopicWindowProps = {
  topicId: ResearchTopicWindowId;
};

export function ResearchTopicWindow({ topicId }: ResearchTopicWindowProps) {
  const topic = RESEARCH_TOPICS[topicId];

  return (
    <section>
      <h2 className="fm-content-title">{topic.title}</h2>
      <p className="fm-topic-meta">
        {topic.affiliation} | {topic.folderSubtitle}
      </p>
      <p>{topic.overview}</p>

      <ul className="fm-list">
        {topic.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="fm-chip-row" aria-label="Research tools">
        {topic.tools.map((tool) => (
          <span key={tool} className="fm-chip">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}