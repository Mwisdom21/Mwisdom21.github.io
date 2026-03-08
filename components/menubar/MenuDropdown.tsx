"use client";

type DropdownItem = {
  id: string;
  label: string;
  disabled?: boolean;
  dividerAfter?: boolean;
};

type MenuDropdownProps = {
  label: string;
  isOpen: boolean;
  items: DropdownItem[];
  triggerClassName?: string;
  onToggle: () => void;
  onSelect: (itemId: string) => void;
};

export function MenuDropdown({ label, isOpen, items, triggerClassName, onToggle, onSelect }: MenuDropdownProps) {
  return (
    <div className="fm-menu-wrap">
      <button
        type="button"
        className={`fm-menu-trigger${isOpen ? " is-open" : ""}${triggerClassName ? ` ${triggerClassName}` : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {label}
      </button>

      {isOpen ? (
        <div className="fm-dropdown" role="menu" aria-label={`${label} menu`}>
          {items.map((item) => (
            <div key={item.id}>
              <button type="button" disabled={item.disabled} onClick={() => onSelect(item.id)}>
                {item.label}
              </button>
              {item.dividerAfter ? <div className="fm-divider" /> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}