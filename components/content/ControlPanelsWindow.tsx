"use client";

type ControlPanelsWindowProps = {
  themeMode: "light" | "dark";
  onThemeChange: (mode: "light" | "dark") => void;
  showTexture: boolean;
  onTextureChange: (nextValue: boolean) => void;
};

export function ControlPanelsWindow({
  themeMode,
  onThemeChange,
  showTexture,
  onTextureChange,
}: ControlPanelsWindowProps) {
  return (
    <section>
      <h2 className="fm-content-title">Control Panels</h2>

      <div className="fm-control-row">
        <p className="fm-control-label">Appearance</p>
        <div className="fm-toggle-group" role="radiogroup" aria-label="Theme mode">
          <button
            type="button"
            className={`fm-toggle-btn${themeMode === "light" ? " is-selected" : ""}`}
            onClick={() => onThemeChange("light")}
          >
            Light
          </button>
          <button
            type="button"
            className={`fm-toggle-btn${themeMode === "dark" ? " is-selected" : ""}`}
            onClick={() => onThemeChange("dark")}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="fm-control-row">
        <p className="fm-control-label">Desktop Texture</p>
        <button
          type="button"
          className={`fm-toggle-btn${showTexture ? " is-selected" : ""}`}
          onClick={() => onTextureChange(!showTexture)}
        >
          {showTexture ? "Enabled" : "Disabled"}
        </button>
      </div>

      <p className="fm-control-note">Add more controls here later (sound, icon size, animation speed).</p>
    </section>
  );
}