"use client";
import { useEffect, useState } from "react";

export default function AltitudeCounter({ target = 120, duration = 4200, delay = 300 }: { target?: number; duration?: number; delay?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setV(target); return; }
    let raf = 0;
    const t0 = performance.now() + delay;
    const tick = (now: number) => {
      const p = Math.min(Math.max((now - t0) / duration, 0), 1);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, delay]);

  return (
    <div className="altimeter" aria-label={`Working altitude ${target} metres`}>
      <small>Working altitude</small>
      <strong>{v} m</strong>
    </div>
  );
}
