import type { CSSProperties } from "react";
import AltitudeCounter from "./AltitudeCounter";

const workers = [
  { x: 130, y: 250, delay: 0.2, start: 620, color: "#ff7a1a" },
  { x: 215, y: 420, delay: 0.5, start: 720, color: "#27d3ff" },
  { x: 300, y: 330, delay: 0.8, start: 680, color: "#ffc14d" },
  { x: 385, y: 500, delay: 1.1, start: 780, color: "#ff5d8f" },
];

export default function HeroScene() {
  const windows = Array.from({ length: 7 * 12 }, (_, i) => ({
    x: 70 + (i % 7) * 50, y: 90 + Math.floor(i / 7) * 62,
  }));
  return (
    <div className="scene-wrap">
      <svg className="scene" viewBox="0 0 480 600" role="img"
        aria-label="Animation of four rope-access workers descending a tall building facade">
        <ellipse className="cloud c1" cx="60" cy="70" rx="80" ry="18" />
        <ellipse className="cloud c2" cx="0" cy="150" rx="110" ry="22" />
        <ellipse className="cloud c3" cx="-40" cy="40" rx="70" ry="14" />

        <rect x="40" y="60" width="400" height="560" rx="6" fill="#0d2b4d" stroke="#1d4d80" />
        <rect x="40" y="60" width="400" height="14" fill="#1d4d80" />
        <g>{windows.map((w, i) => <rect key={i} className="window" x={w.x} y={w.y} width="28" height="38" rx="3" />)}</g>

        {workers.map((w, i) => (
          <g key={i} className="worker" style={{ "--delay": `${w.delay}s`, "--start": w.start } as CSSProperties}>
            <g transform={`translate(${w.x} ${w.y})`}>
              <line x1="0" y1="-900" x2="0" y2="-14" stroke="#e8f1ff" strokeWidth="2" opacity=".75" />
              <g className="sway">
                <g className="bob">
                  <circle cx="0" cy="-8" r="6" fill="#e8f1ff" />
                  <path d="M-9 -12 a9 9 0 0 1 18 0 z" fill={w.color} />
                  <rect x="-8" y="0" width="16" height="26" rx="5" fill={w.color} />
                  <rect x="-16" y="4" width="10" height="5" rx="2.5" fill="#e8f1ff" />
                  <rect x="6" y="4" width="10" height="5" rx="2.5" fill="#e8f1ff" />
                  <rect x="-8" y="26" width="6" height="14" rx="2" fill="#e8f1ff" />
                  <rect x="2" y="26" width="6" height="14" rx="2" fill="#e8f1ff" />
                </g>
              </g>
            </g>
          </g>
        ))}
      </svg>
      <AltitudeCounter target={120} />
    </div>
  );
}
