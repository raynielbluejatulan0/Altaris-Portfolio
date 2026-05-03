import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0D1A",
          border: "1px solid rgba(0,255,255,0.35)",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            color: "#00FFFF",
            letterSpacing: "-0.5px",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          RBJ
        </span>
      </div>
    ),
    { ...size }
  );
}
