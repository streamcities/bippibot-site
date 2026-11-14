import { ImageResponse } from "next/og";

export const alt = "The Map Pack Playbook, a free local SEO download from BippiBot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0F1B3D",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "#B9C4E6", textTransform: "uppercase" }}>
            BippiBot · Free download
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 58, fontWeight: 700, lineHeight: 1.12, maxWidth: 760 }}>
              Your Google Business Profile is probably costing you calls
            </div>
            <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#F5DBA0" }}>
              The Map Pack Playbook · The Insiders Stack
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 250,
            height: 360,
            marginTop: 70,
            borderRadius: 12,
            background: "linear-gradient(165deg, #2a3f86 0%, #0c1736 100%)",
            border: "1px solid rgba(255,255,255,0.18)",
            padding: 28,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 14, letterSpacing: 2, color: "#B9C4E6" }}>BippiBot</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 36, fontWeight: 700, lineHeight: 1 }}>Map Pack Playbook</div>
            <div style={{ display: "flex", marginTop: 16, height: 4, width: 56, background: "#F5DBA0" }} />
          </div>
          <div style={{ display: "flex", fontSize: 16, color: "#F5DBA0" }}>16 prompts</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
