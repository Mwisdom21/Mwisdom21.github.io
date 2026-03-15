"use client";

import type { PointerEvent } from "react";
import type { WindowId } from "@/components/window/WindowManager";

export type DesktopIconAsset = {
  bwSrc: string;
  colorSrc: string;
  alt: string;
};

type DesktopIconProps = {
  glyph: string;
  label: string;
  detail: string;
  windowId: WindowId;
  icon?: DesktopIconAsset;
  x: number;
  y: number;
  isDragging: boolean;
  onOpen: (windowId: WindowId, options?: { startFullscreen?: boolean }) => void;
  onDragStart: (windowId: WindowId, event: PointerEvent<HTMLButtonElement>) => void;
};

export function DesktopIcon({ glyph, label, detail, windowId, icon, x, y, isDragging, onOpen, onDragStart }: DesktopIconProps) {
  return (
    <button
      type="button"
      className={`fm-icon${isDragging ? " is-dragging" : ""}`}
      style={{ left: x, top: y }}
      onPointerDown={(event) => onDragStart(windowId, event)}
      onDoubleClick={() => onOpen(windowId, { startFullscreen: true })}
      onClick={() => onOpen(windowId, { startFullscreen: true })}
      aria-label={`Open ${label}`}
    >
      <span className="fm-icon-glyph" aria-hidden="true">
        {icon ? (
          <span className="fm-icon-image-stack">
            <img className="fm-icon-image fm-icon-image-bw" src={icon.bwSrc} alt="" />
            <img className="fm-icon-image fm-icon-image-color" src={icon.colorSrc} alt="" />
          </span>
        ) : (
          glyph
        )}
      </span>
      <span className="fm-icon-label">
        <strong>{label}</strong>
        <span>{detail}</span>
      </span>
    </button>
  );
}