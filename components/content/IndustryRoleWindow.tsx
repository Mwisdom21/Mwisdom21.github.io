import { INDUSTRY_ROLES, type IndustryRoleWindowId } from "@/components/content/industryRoles";

type IndustryRoleWindowProps = {
  roleId: IndustryRoleWindowId;
};

export function IndustryRoleWindow({ roleId }: IndustryRoleWindowProps) {
  const role = INDUSTRY_ROLES[roleId];

  return (
    <section>
      <h2 className="fm-content-title">{role.title}</h2>
      <p className="fm-topic-meta">
        {role.affiliation} | {role.folderSubtitle}
      </p>
      <p>{role.overview}</p>

      <ul className="fm-list">
        {role.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="fm-chip-row" aria-label="Industry tools">
        {role.tools.map((tool) => (
          <span key={tool} className="fm-chip">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}