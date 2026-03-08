import type { PointerEvent, ReactNode } from "react";

type WindowFrameProps = {
  title: string;
  isActive: boolean;
  isExpanded: boolean;
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
  onFocus: () => void;
  onClose?: () => void;
  onToggleExpand?: () => void;
  onDragStart?: (event: PointerEvent<HTMLDivElement>) => void;
  showCloseButton?: boolean;
  showExpandButton?: boolean;
  draggable?: boolean;
  children: ReactNode;
};

export function WindowFrame({
  title,
  isActive,
  isExpanded,
  left,
  top,
  width,
  height,
  zIndex,
  onFocus,
  onClose,
  onToggleExpand,
  onDragStart,
  showCloseButton = true,
  showExpandButton = true,
  draggable = true,
  children,
}: WindowFrameProps) {
  const handleTitlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggable || !onDragStart) {
      return;
    }

    onDragStart(event);
  };

  return (
    <article
      className={`fm-window${isActive ? " is-active" : ""}${draggable ? "" : " is-pinned"}`}
      style={{ left, top, width, height, zIndex }}
      onMouseDown={onFocus}
      aria-label={title}
    >
      <div className="fm-titlebar" onPointerDown={handleTitlePointerDown}>
        {showCloseButton && onClose ? (
          <button
            type="button"
            className="fm-window-close"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            x
          </button>
        ) : (
          <span className="fm-window-tab-spacer" aria-hidden="true" />
        )}

        <span className="fm-window-title">{title}</span>

        {showExpandButton && onToggleExpand ? (
          <button
            type="button"
            className="fm-window-expand"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onToggleExpand}
            aria-label={isExpanded ? `Restore ${title}` : `Expand ${title}`}
            title={isExpanded ? "Restore window" : "Expand window"}
          >
            []
          </button>
        ) : (
          <span className="fm-window-tab-spacer" aria-hidden="true" />
        )}
      </div>
      <div className="fm-window-content">{children}</div>
    </article>
  );
}