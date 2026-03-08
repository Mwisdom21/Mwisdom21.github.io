"use client";

import type { PointerEvent } from "react";
import type { WindowId } from "@/components/window/WindowManager";

type DesktopIconProps = {
  glyph: string;
  label: string;
  detail: string;
  windowId: WindowId;
  iconSrc?: string;
  x: number;
  y: number;
  isDragging: boolean;
  onOpen: (windowId: WindowId, options?: { startFullscreen?: boolean }) => void;
  onDragStart: (windowId: WindowId, event: PointerEvent<HTMLButtonElement>) => void;
};

export function DesktopIcon({
  glyph,
  label,
  detail,
  windowId,
  iconSrc,
  x,
  y,
  isDragging,
  onOpen,
  onDragStart,
}: DesktopIconProps) {
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
        {iconSrc ? <img className="fm-icon-image" src={iconSrc} alt="" /> : glyph}
      </span>
      <span className="fm-icon-label">
        <strong>{label}</strong>
        <span>{detail}</span>
      </span>
    </button>
  );
}