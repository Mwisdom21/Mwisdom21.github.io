"use client";

import { useEffect, useMemo, useState } from "react";
import { MenuDropdown } from "@/components/menubar/MenuDropdown";
import type { WindowId } from "@/components/window/WindowManager";

type MenuBarProps = {
  onOpenWindow: (windowId: WindowId) => void;
};

const OPENABLE_WINDOWS: WindowId[] = [
  "finder",
  "projects",
  "research",
  "code",
  "cv",
  "controlPanels",
  "publications",
  "sponsors",
  "contact",
];

export function MenuBar({ onOpenWindow }: MenuBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [clockLabel, setClockLabel] = useState(() =>
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date()),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setClockLabel(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    }, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const menus = useMemo(
    () => [
      {
        id: "apple",
        label: "MW",
        triggerClassName: "fm-menu-trigger-apple",
        items: [
          { id: "finder", label: "About This Portfolio", dividerAfter: true },
          { id: "projects", label: "Open Projects" },
          { id: "research", label: "Open Research" },
          { id: "code", label: "Open Code" },
          { id: "cv", label: "Open Resume", dividerAfter: true },
          { id: "controlPanels", label: "Control Panels" },
        ],
      },
      {
        id: "file",
        label: "File",
        items: [
          { id: "projects", label: "Open Projects" },
          { id: "publications", label: "Open Publications" },
          { id: "finder", label: "New Finder Window" },
        ],
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "research", label: "Open Research" },
          { id: "code", label: "Open Code" },
          { id: "controlPanels", label: "Control Panels" },
        ],
      },
      {
        id: "special",
        label: "Special",
        items: [
          { id: "finder", label: "Bring Finder Front" },
          { id: "projects", label: "Bring Projects Front" },
          { id: "cv", label: "Bring Resume Front" },
          { id: "controlPanels", label: "Open Control Panels" },
        ],
      },
    ],
    [],
  );

  const topTabs: Array<{ id: WindowId; label: string }> = [
    { id: "publications", label: "Publications" },
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" },
  ];

  const handleSelect = (itemId: string) => {
    if (OPENABLE_WINDOWS.includes(itemId as WindowId)) {
      onOpenWindow(itemId as WindowId);
    }

    setActiveMenu(null);
  };

  return (
    <header className="fm-menubar">
      <div className="fm-menubar-left">
        {menus.map((menu) => (
          <MenuDropdown
            key={menu.id}
            label={menu.label}
            triggerClassName={menu.triggerClassName}
            isOpen={activeMenu === menu.id}
            items={menu.items}
            onToggle={() => setActiveMenu((current) => (current === menu.id ? null : menu.id))}
            onSelect={handleSelect}
          />
        ))}

        {topTabs.map((tab) => (
          <button key={tab.id} type="button" className="fm-menu-trigger fm-menu-tab" onClick={() => onOpenWindow(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="fm-menubar-right">
        <span className="fm-clock">{clockLabel}</span>
      </div>
    </header>
  );
}