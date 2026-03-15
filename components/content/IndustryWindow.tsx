import { INDUSTRY_ROLE_ORDER, INDUSTRY_ROLES, type IndustryRoleWindowId } from "@/components/content/industryRoles";

type IndustryWindowProps = {
  onOpenRole: (roleId: IndustryRoleWindowId) => void;
};

export function IndustryWindow({ onOpenRole }: IndustryWindowProps) {
  return (
    <section>
      <h2 className="fm-content-title">Industry Experience Folders</h2>
      <p>Open a folder to launch a dedicated industry role window.</p>

      <div className="fm-folder-list" role="list" aria-label="Industry experience roles">
        {INDUSTRY_ROLE_ORDER.map((roleId) => {
          const role = INDUSTRY_ROLES[roleId];

          return (
            <button key={role.windowId} type="button" className="fm-folder-btn" onClick={() => onOpenRole(role.windowId)}>
              <span className="fm-folder-icon" aria-hidden="true" />
              <span className="fm-folder-copy">
                <strong>{role.folderLabel}</strong>
                <span>{role.folderSubtitle}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}