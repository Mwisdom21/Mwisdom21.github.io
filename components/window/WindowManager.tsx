"use client";

import { useEffect, useRef, useState } from "react";
import { FinderWindow } from "@/components/window/FinderWindow";
import { WindowFrame } from "@/components/window/WindowFrame";
import { ProjectsWindow } from "@/components/content/ProjectsWindow";
import { ResearchWindow } from "@/components/content/ResearchWindow";
import { CodeWindow } from "@/components/content/CodeWindow";
import { CvWindow } from "@/components/content/CvWindow";
import { ProfileWindow } from "@/components/content/ProfileWindow";
import { ControlPanelsWindow } from "@/components/content/ControlPanelsWindow";
import { PublicationsWindow } from "@/components/content/PublicationsWindow";
import { SponsorsWindow } from "@/components/content/SponsorsWindow";
import { ContactWindow } from "@/components/content/ContactWindow";

export type WindowId =
  | "finder"
  | "projects"
  | "research"
  | "code"
  | "cv"
  | "controlPanels"
  | "publications"
  | "sponsors"
  | "contact";

type WindowManagerProps = {
  openWindows: WindowId[];
  activeWindow: WindowId;
  onFocusWindow: (windowId: WindowId) => void;
  onCloseWindow: (windowId: WindowId) => void;
  themeMode: "light" | "dark";
  onThemeChange: (mode: "light" | "dark") => void;
  showTexture: boolean;
  onTextureChange: (nextValue: boolean) => void;
  fullscreenRequest: { id: WindowId; token: number } | null;
};

type Position = {
  x: number;
  y: number;
};

type WindowDef = {
  title: string;
  width: number;
  height: number;
  start: Position;
};

const WINDOW_DEFS: Record<WindowId, WindowDef> = {
  finder: { title: "Finder", width: 420, height: 300, start: { x: 56, y: 362 } },
  projects: { title: "Projects", width: 460, height: 330, start: { x: 146, y: 132 } },
  research: { title: "Research", width: 450, height: 320, start: { x: 198, y: 178 } },
  code: { title: "Code", width: 520, height: 340, start: { x: 265, y: 96 } },
  cv: { title: "Resume", width: 420, height: 350, start: { x: 316, y: 150 } },
  controlPanels: { title: "Control Panels", width: 380, height: 260, start: { x: 390, y: 88 } },
  publications: { title: "Publications", width: 520, height: 320, start: { x: 212, y: 122 } },
  sponsors: { title: "Sponsors", width: 460, height: 280, start: { x: 242, y: 182 } },
  contact: { title: "Contact", width: 420, height: 260, start: { x: 276, y: 226 } },
};

const PROFILE_DEF = {
  title: "Profile",
  width: 700,
  height: 300,
  start: { x: 18, y: 18 },
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

export function WindowManager({
  openWindows,
  activeWindow,
  onFocusWindow,
  onCloseWindow,
  themeMode,
  onThemeChange,
  showTexture,
  onTextureChange,
  fullscreenRequest,
}: WindowManagerProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const [positions, setPositions] = useState<Record<WindowId, Position>>(() => ({
    finder: WINDOW_DEFS.finder.start,
    projects: WINDOW_DEFS.projects.start,
    research: WINDOW_DEFS.research.start,
    code: WINDOW_DEFS.code.start,
    cv: WINDOW_DEFS.cv.start,
    controlPanels: WINDOW_DEFS.controlPanels.start,
    publications: WINDOW_DEFS.publications.start,
    sponsors: WINDOW_DEFS.sponsors.start,
    contact: WINDOW_DEFS.contact.start,
  }));

  const [expanded, setExpanded] = useState<Record<WindowId, boolean>>({
    finder: false,
    projects: false,
    research: false,
    code: false,
    cv: false,
    controlPanels: false,
    publications: false,
    sponsors: false,
    contact: false,
  });

  const [zOrder, setZOrder] = useState<WindowId[]>(openWindows);
  const dragRef = useRef<null | {
    id: WindowId;
    pointerX: number;
    pointerY: number;
    startX: number;
    startY: number;
  }>(null);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    setZOrder((current) => {
      const kept = current.filter((id) => openWindows.includes(id));
      const newlyOpen = openWindows.filter((id) => !kept.includes(id));
      return [...kept, ...newlyOpen];
    });
  }, [openWindows]);

  useEffect(() => {
    if (!fullscreenRequest) {
      return;
    }

    const { id } = fullscreenRequest;
    onFocusWindow(id);
    setExpanded((current) => ({ ...current, [id]: true }));
    setZOrder((current) => [...current.filter((windowId) => windowId !== id), id]);
  }, [fullscreenRequest, onFocusWindow]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag || !containerRef.current) {
        return;
      }

      const def = WINDOW_DEFS[drag.id];
      const rect = containerRef.current.getBoundingClientRect();
      const dx = event.clientX - drag.pointerX;
      const dy = event.clientY - drag.pointerY;

      setPositions((current) => {
        const nextX = drag.startX + dx;
        const nextY = drag.startY + dy;

        return {
          ...current,
          [drag.id]: {
            x: clamp(nextX, 8, Math.max(8, rect.width - def.width - 8)),
            y: clamp(nextY, 8, Math.max(8, rect.height - def.height - 8)),
          },
        };
      });
    };

    const onUp = () => {
      dragRef.current = null;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const bringToFront = (windowId: WindowId) => {
    onFocusWindow(windowId);
    setZOrder((current) => [...current.filter((id) => id !== windowId), windowId]);
  };

  const widthForExpanded = containerSize.width > 0 ? containerSize.width : 1100;
  const heightForExpanded = containerSize.height > 0 ? containerSize.height : 620;

  return (
    <section ref={containerRef} className="fm-window-layer" aria-label="Open windows">
      <WindowFrame
        title={PROFILE_DEF.title}
        isActive={false}
        isExpanded={false}
        left={PROFILE_DEF.start.x}
        top={PROFILE_DEF.start.y}
        width={PROFILE_DEF.width}
        height={PROFILE_DEF.height}
        zIndex={35}
        onFocus={() => undefined}
        showCloseButton={false}
        showExpandButton={false}
        draggable={false}
      >
        <ProfileWindow />
      </WindowFrame>

      {zOrder
        .filter((id) => openWindows.includes(id))
        .map((id, index) => {
          const def = WINDOW_DEFS[id];
          const position = positions[id];
          const isExpanded = expanded[id];

          const frameLeft = isExpanded ? 8 : position.x;
          const frameTop = isExpanded ? 8 : position.y;
          const frameWidth = isExpanded ? Math.max(320, widthForExpanded - 16) : def.width;
          const frameHeight = isExpanded ? Math.max(220, heightForExpanded - 16) : def.height;

          const contentByWindow = {
            finder: <FinderWindow />,
            projects: <ProjectsWindow />,
            research: <ResearchWindow />,
            code: <CodeWindow />,
            cv: <CvWindow />,
            controlPanels: (
              <ControlPanelsWindow
                themeMode={themeMode}
                onThemeChange={onThemeChange}
                showTexture={showTexture}
                onTextureChange={onTextureChange}
              />
            ),
            publications: <PublicationsWindow />,
            sponsors: <SponsorsWindow />,
            contact: <ContactWindow />,
          };

          return (
            <WindowFrame
              key={id}
              title={def.title}
              isActive={activeWindow === id}
              isExpanded={isExpanded}
              left={frameLeft}
              top={frameTop}
              width={frameWidth}
              height={frameHeight}
              zIndex={55 + index}
              onFocus={() => bringToFront(id)}
              onClose={() => {
                setExpanded((current) => ({ ...current, [id]: false }));
                onCloseWindow(id);
              }}
              onToggleExpand={() => {
                bringToFront(id);
                setExpanded((current) => ({ ...current, [id]: !current[id] }));
              }}
              onDragStart={(event) => {
                if (window.innerWidth <= 980 || expanded[id]) {
                  return;
                }

                event.preventDefault();
                bringToFront(id);
                dragRef.current = {
                  id,
                  pointerX: event.clientX,
                  pointerY: event.clientY,
                  startX: positions[id].x,
                  startY: positions[id].y,
                };
              }}
            >
              {contentByWindow[id]}
            </WindowFrame>
          );
        })}
    </section>
  );
}