import React from "react";

const certifications = [
  {
    title: "Java Full Stack Development",
    issuer: "Full Stack Development Program",
    period: "Jul 2023 – Jun 2024",
    accent: "#3b9eff",
  },
  {
    title: "Web Development Workshop",
    issuer: "Workshop Program",
    period: "2022",
    accent: "#22d3a5",
  },
  {
    title: "Python Programming",
    issuer: "Python Certification Program",
    period: "2023",
    accent: "#a78bfa",
  },
];

const MedalIcon = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="7" stroke={color} strokeWidth="1.8" />
    <path d="M9 5L7 2h10l-2 3" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 11v3l1.5 1.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        width: "100%",
        backgroundColor: "#080f1a",
        color: "#fff",
        padding: "40px 0",
        boxSizing: "border-box",
        scrollMarginTop: "70px",
      }}
    >
      <div
        className="cert-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{
            color: "#3b9eff",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700,
            margin: "0 0 6px",
          }}>
            Certifications
          </h2>
          <p style={{ color: "#8a9bb0", fontSize: "14px", margin: 0 }}>
            Courses and programs I've completed
          </p>
        </div>

        {/* Outer wrapper */}
        <div style={{
          border: "1px solid rgba(59,158,255,0.18)",
          borderRadius: "18px",
          padding: "28px",
          backgroundColor: "rgba(10,22,40,0.5)",
        }}>
          {/* Grid */}
          <div
            className="cert-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="cert-card"
                style={{
                  backgroundColor: "#0a1628",
                  border: `1px solid rgba(59,158,255,0.12)`,
                  borderRadius: "12px",
                  padding: "22px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  opacity: 0,
                  transform: "translateY(28px)",
                  animation: "certUp 0.7s ease-out forwards",
                  animationDelay: `${index * 120}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cert.accent}66`;
                  e.currentTarget.style.boxShadow = `0 6px 28px ${cert.accent}20`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,158,255,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* accent top bar */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  backgroundColor: cert.accent,
                  opacity: 0.7,
                  borderRadius: "12px 12px 0 0",
                }} />

                {/* icon box */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: `${cert.accent}18`,
                    border: `1px solid ${cert.accent}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "4px",
                    transition: "background-color 0.25s",
                  }}
                >
                  <MedalIcon color={cert.accent} />
                </div>

                {/* text */}
                <div style={{ flex: 1 }}>
                  <p style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                    margin: "0 0 6px",
                    lineHeight: 1.4,
                  }}>
                    {cert.title}
                  </p>
                  <p style={{ color: "#8a9bb0", fontSize: "12px", margin: "0 0 6px" }}>
                    {cert.issuer}
                  </p>
                  <span style={{
                    display: "inline-block",
                    color: cert.accent,
                    fontSize: "11px",
                    fontWeight: 600,
                    backgroundColor: `${cert.accent}14`,
                    border: `1px solid ${cert.accent}30`,
                    borderRadius: "999px",
                    padding: "2px 10px",
                  }}>
                    {cert.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes certUp {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          #certifications {
            padding: 28px 0 !important;
          }
          .cert-inner {
            padding: 0 16px !important;
          }
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}