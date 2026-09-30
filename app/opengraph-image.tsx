import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80,
        background: "linear-gradient(135deg,#0a1f3a,#07111f)", color: "#e8f1ff" }}>
        <div style={{ fontSize: 34, color: "#27d3ff", letterSpacing: 6 }}>ROPE ACCESS · WORK AT HEIGHT</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 20, color: "#ff7a1a" }}>{site.name}</div>
        <div style={{ fontSize: 38, marginTop: 24, maxWidth: 900 }}>{site.tagline}</div>
      </div>
    ),
    size
  );
}
