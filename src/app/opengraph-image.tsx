import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#080b10", color: "#f2f6fa", padding: "78px", flexDirection: "column", justifyContent: "space-between", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#62d9f2", fontSize: 22, letterSpacing: "3px" }}>
          <span style={{ display: "flex", width: 38, height: 38, background: "#62d9f2" }} />
          SOFTWARE ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600 }}>{profile.name}</div>
          <div style={{ display: "flex", color: "#98a6b5", fontSize: 30 }}>{profile.role} · Full-Stack &amp; Systems</div>
        </div>
        <div style={{ display: "flex", width: "100%", height: 1, background: "#1b2632" }} />
      </div>
    ),
    size,
  );
}