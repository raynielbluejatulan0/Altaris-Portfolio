import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Altaris - AI Automation for Businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow - top right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(108, 92, 231, 0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Cyan glow - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 209, 255, 0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Purple glow behind logo */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            width: "300px",
            height: "120px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(108, 92, 231, 0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          {/* Logo icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://altaris.online/images/altaris-logo.png"
            alt=""
            width={48}
            height={48}
            style={{ borderRadius: "12px" }}
          />
          <span
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            Altaris
          </span>
        </div>

        {/* Divider line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #6C5CE7, #00D1FF)",
            borderRadius: "2px",
            marginBottom: "32px",
            display: "flex",
          }}
        />

        {/* Main headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          AI Automation for Businesses
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
            marginBottom: "48px",
            display: "flex",
          }}
        >
          Turn missed calls and messages into booked appointments
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.4)",
              letterSpacing: "2px",
              display: "flex",
            }}
          >
            altaris.online
          </div>
        </div>

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #6C5CE7, #00D1FF, #6C5CE7)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
