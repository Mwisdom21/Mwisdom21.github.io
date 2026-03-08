"use client";

import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { MenuBar } from "@/components/menubar/MenuBar";
import { DesktopIcon } from "@/components/desktop/DesktopIcon";
import { WindowManager, type WindowId } from "@/components/window/WindowManager";

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

type IconId = "finder" | "projects" | "research" | "code" | "cv";
type IconPositionMap = Record<IconId, { x: number; y: number }>;

const ICONS: Array<{
  glyph: string;
  label: string;
  detail: string;
  windowId: IconId;
  iconSrc?: string;
}> = [
  { glyph: "HD", label: "Finder", detail: "System Disk", windowId: "finder" },
  { glyph: "PJ", label: "Projects", detail: "Build archive", windowId: "projects" },
  { glyph: "RS", label: "Research", detail: "Notes + ideas", windowId: "research" },
  { glyph: "<>", label: "Code", detail: "Engineering stack", windowId: "code" },
  { glyph: "CV", label: "Resume", detail: "Experience", windowId: "cv" },
];

const DEFAULT_ICON_POSITIONS: IconPositionMap = {
  finder: { x: 0, y: 0 },
  projects: { x: 0, y: 110 },
  research: { x: 0, y: 220 },
  code: { x: 0, y: 330 },
  cv: { x: 0, y: 440 },
};

export type ThemeMode = "light" | "dark";

export function Desktop() {
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const suppressNextOpenRef = useRef<WindowId | null>(null);
  const iconDragRef = useRef<null | {
    id: IconId;
    pointerX: number;
    pointerY: number;
    startX: number;
    startY: number;
    moved: boolean;
  }>(null);

  const [openWindows, setOpenWindows] = useState<WindowId[]>([]);
  const [activeWindow, setActiveWindow] = useState<WindowId>("finder");
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const [showTexture, setShowTexture] = useState(true);
  const [fullscreenRequest, setFullscreenRequest] = useState<{ id: WindowId; token: number } | null>(null);

  const [iconPositions, setIconPositions] = useState<IconPositionMap>(DEFAULT_ICON_POSITIONS);
  const [iconsPlaced, setIconsPlaced] = useState(false);
  const [draggingIcon, setDraggingIcon] = useState<IconId | null>(null);

  useEffect(() => {
    if (!surfaceRef.current || iconsPlaced) {
      return;
    }

    const rect = surfaceRef.current.getBoundingClientRect();
    const rightX = Math.max(12, rect.width - 100);

    setIconPositions({
      finder: { x: rightX, y: 20 },
      projects: { x: rightX, y: 132 },
      research: { x: rightX, y: 244 },
      code: { x: rightX, y: 356 },
      cv: { x: rightX, y: 468 },
    });

    setIconsPlaced(true);
  }, [iconsPlaced]);

  useEffect(() => {
    const onResize = () => {
      if (!surfaceRef.current) {
        return;
      }

      const rect = surfaceRef.current.getBoundingClientRect();
      setIconPositions((current) => {
        const next = { ...current };
        (Object.keys(current) as IconId[]).forEach((id) => {
          next[id] = {
            x: clamp(current[id].x, 8, Math.max(8, rect.width - 96)),
            y: clamp(current[id].y, 8, Math.max(8, rect.height - 92)),
          };
        });
        return next;
      });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const drag = iconDragRef.current;
      if (!drag || !surfaceRef.current || window.innerWidth <= 980) {
        return;
      }

      const rect = surfaceRef.current.getBoundingClientRect();
      const dx = event.clientX - drag.pointerX;
      const dy = event.clientY - drag.pointerY;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        drag.moved = true;
      }

      setIconPositions((current) => ({
        ...current,
        [drag.id]: {
          x: clamp(drag.startX + dx, 8, Math.max(8, rect.width - 96)),
          y: clamp(drag.startY + dy, 8, Math.max(8, rect.height - 92)),
        },
      }));
    };

    const onUp = () => {
      const drag = iconDragRef.current;
      if (drag?.moved) {
        suppressNextOpenRef.current = drag.id;
      }

      iconDragRef.current = null;
      setDraggingIcon(null);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const desktopHint = useMemo(() => {
    if (openWindows.length === 0) {
      return "No windows open. Select an icon or menu item.";
    }

    return `${openWindows.length} window${openWindows.length > 1 ? "s" : ""} open`;
  }, [openWindows]);

  const openWindow = (windowId: WindowId, options?: { startFullscreen?: boolean }) => {
    if (suppressNextOpenRef.current === windowId) {
      suppressNextOpenRef.current = null;
      return;
    }

    setOpenWindows((current) => (current.includes(windowId) ? current : [...current, windowId]));
    setActiveWindow(windowId);

    if (options?.startFullscreen) {
      setFullscreenRequest({ id: windowId, token: Date.now() + Math.random() });
    }
  };

  const closeWindow = (windowId: WindowId) => {
    setOpenWindows((current) => {
      const next = current.filter((id) => id !== windowId);

      if (next.length > 0 && activeWindow === windowId) {
        setActiveWindow(next[next.length - 1]);
      }

      return next;
    });
  };

  const handleIconDragStart = (windowId: WindowId, event: ReactPointerEvent<HTMLButtonElement>) => {
    if (window.innerWidth <= 980) {
      return;
    }

    const iconId = windowId as IconId;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDraggingIcon(iconId);

    iconDragRef.current = {
      id: iconId,
      pointerX: event.clientX,
      pointerY: event.clientY,
      startX: iconPositions[iconId].x,
      startY: iconPositions[iconId].y,
      moved: false,
    };
  };

  return (
    <main className={`fm-desktop${showTexture ? "" : " is-flat"}`} data-theme={themeMode}>
      <MenuBar onOpenWindow={openWindow} />

      <section className="fm-workspace" aria-label="Desktop workspace">
        <div ref={surfaceRef} className="fm-main-surface">
          <div className="fm-desktop-icons" aria-label="Desktop icons">
            {ICONS.map((icon) => (
              <DesktopIcon
                key={icon.windowId}
                {...icon}
                x={iconPositions[icon.windowId].x}
                y={iconPositions[icon.windowId].y}
                isDragging={draggingIcon === icon.windowId}
                onOpen={openWindow}
                onDragStart={handleIconDragStart}
              />
            ))}
          </div>

          <WindowManager
            openWindows={openWindows}
            activeWindow={activeWindow}
            onFocusWindow={setActiveWindow}
            onCloseWindow={closeWindow}
            themeMode={themeMode}
            onThemeChange={setThemeMode}
            showTexture={showTexture}
            onTextureChange={setShowTexture}
            fullscreenRequest={fullscreenRequest}
          />
        </div>
      </section>

      <footer className="fm-statusbar">
        {desktopHint}. Tip: press <span className="fm-kbd">Esc</span> to close menus.
      </footer>
    </main>
  );
}