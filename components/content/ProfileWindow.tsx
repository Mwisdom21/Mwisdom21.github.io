"use client";

import { useMemo, useState } from "react";

const PROFILE_SOURCES = [
  "profile.jpg",
  "profile.jpeg",
  "profile.png",
  "profile.webp",
  "profile.JPG",
  "profile.JPEG",
  "profile.PNG",
  "profile.WEBP",
  "Screenshot 2026-03-07 181830.png",
];

export function ProfileWindow() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const activeSource = useMemo(() => PROFILE_SOURCES[sourceIndex], [sourceIndex]);

  return (
    <section className="fm-profile-window">
      <div className="fm-profile-layout">
        <div className="fm-profile-photo-shell" aria-label="Profile photo">
          {!imageError ? (
            <img
              src={activeSource}
              alt=""
              className="fm-profile-photo"
              onError={() => {
                if (sourceIndex < PROFILE_SOURCES.length - 1) {
                  setSourceIndex((current) => current + 1);
                  return;
                }

                setImageError(true);
              }}
            />
          ) : null}
          <span className={`fm-profile-fallback${imageError ? " is-visible" : ""}`}>MW</span>
        </div>

        <div className="fm-profile-copy">
          <p className="fm-profile-cli">[ mw@portfolio:~ ]$ whoami</p>
          <h2 className="fm-profile-name">Masia Wisdom</h2>
          <p className="fm-profile-role">Creative Developer • Interactive Systems</p>
          <p className="fm-profile-body">
            I design and engineer memorable digital interfaces, blending visual storytelling, frontend systems, and
            experimental interaction models.
          </p>

          <div className="fm-profile-links">
            <a href="#" className="fm-profile-link" onClick={(event) => event.preventDefault()}>
              Research
            </a>
            <a href="#" className="fm-profile-link" onClick={(event) => event.preventDefault()}>
              Publications
            </a>
            <a href="#" className="fm-profile-link" onClick={(event) => event.preventDefault()}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}