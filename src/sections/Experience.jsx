import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "RBricks Technology",
    location: "Pune, Maharashtra",
    period: "Jun 2025 – Present",
    duration: "1 year 1 month",
    type: "Full-time",
    points: [
      "Engineered 15+ production REST APIs using Spring Boot and Spring MVC for product catalog, cart, and order-tracking modules across e-commerce and food delivery platforms.",
      "Secured all API endpoints with Spring Security — implemented JWT-based stateless authentication and role-based access control (Admin/User).",
      "Optimized MySQL and MongoDB queries for high-read inventory and order modules; applied indexing strategies to reduce query execution time.",
      "Delivered features in 2-week Agile sprints; enforced clean Git branching strategy (feature → dev → main) and participated in daily stand-ups and code reviews.",
    ],
    accent: "#3b9eff",
    current: true,
  },
  {
    role: "C# Intern",
    company: "Sofysyst",
    location: "Nashik, Maharashtra",
    period: "Jan 2021 – Jun 2021",
    duration: "6 months",
    type: "Internship",
    points: [
      "Worked on C# based application development during a 6-month internship.",
      "Gained hands-on experience with backend development and software engineering practices.",
    ],
    accent: "#22d3a5",
    current: false,
  },
  {
    role: "Web Developer",
    company: "Sumago Infotech Pvt. Ltd.",
    location: "Nashik, Maharashtra",
    period: "Mar 2019 – Jun 2019",
    duration: "4 months",
    type: "Internship",
    points: [
      "Developed web applications using HTML, CSS, and JavaScript.",
      "Built a To-Do List App with add, edit, delete, and local storage features.",
      "Gained practical exposure to frontend development and responsive UI design.",
    ],
    accent: "#a78bfa",
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        width: "100%",
        backgroundColor: "#0d1b2e",
        color: "#fff",
        padding: "40px 0",
        boxSizing: "border-box",
        scrollMarginTop: "70px",
      }}
    >
      <div
        className="exp-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ color: "#3b9eff", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, margin: "0 0 6px" }}>
            Experience
          </h2>
          <p style={{ color: "#8a9bb0", fontSize: "14px", margin: 0 }}>
            My professional journey so far
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline" style={{ position: "relative", paddingLeft: "32px" }}>

          {/* vertical line */}
          <div style={{
            position: "absolute",
            left: "7px",
            top: "8px",
            bottom: "8px",
            width: "2px",
            background: "linear-gradient(to bottom, #3b9eff, #22d3a5, #a78bfa)",
            opacity: 0.3,
            borderRadius: "2px",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: "relative" }}>

                {/* dot */}
                <div style={{
                  position: "absolute",
                  left: "-28px",
                  top: "20px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: exp.accent,
                  border: "3px solid #0d1b2e",
                  boxShadow: `0 0 10px ${exp.accent}88`,
                  zIndex: 1,
                }} />

                {/* card */}
                <div
                  style={{
                    backgroundColor: "#0a1628",
                    border: "1px solid rgba(59,158,255,0.14)",
                    borderLeft: `3px solid ${exp.accent}`,
                    borderRadius: "14px",
                    padding: "20px 24px",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 28px ${exp.accent}14`;
                    e.currentTarget.style.borderColor = `${exp.accent}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(59,158,255,0.14)";
                  }}
                >
                  {/* top row */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "10px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{
                        fontSize: "11.5px", fontWeight: 600, color: exp.accent,
                        backgroundColor: `${exp.accent}14`, border: `1px solid ${exp.accent}33`,
                        borderRadius: "999px", padding: "3px 11px",
                      }}>
                        {exp.period}
                      </span>
                      <span style={{
                        fontSize: "11px", color: "#8a9bb0",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "999px", padding: "3px 10px",
                      }}>
                        {exp.duration}
                      </span>
                      {exp.current && (
                        <span style={{
                          fontSize: "11px", fontWeight: 700, color: "#22d3a5",
                          backgroundColor: "rgba(34,211,165,0.1)",
                          border: "1px solid rgba(34,211,165,0.25)",
                          borderRadius: "999px", padding: "3px 10px",
                        }}>
                          ● Current
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: "11px", color: "#8a9bb0", fontWeight: 500 }}>
                      {exp.type}
                    </span>
                  </div>

                  {/* role & company */}
                  <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 700, margin: "0 0 3px", lineHeight: 1.3 }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: exp.accent, fontSize: "13px", fontWeight: 600, margin: "0 0 3px" }}>
                    {exp.company}
                  </p>
                  <p style={{ color: "#8a9bb0", fontSize: "12px", margin: "0 0 14px" }}>
                    📍 {exp.location}
                  </p>

                  {/* bullets */}
                  <ul style={{ margin: 0, paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ color: "#c8d6e5", fontSize: "12.5px", lineHeight: 1.65 }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience {
            padding: 20px 0 !important;
            scroll-margin-top: 60px !important;
          }
          .exp-inner {
            padding: 0 16px 0 16px !important;
          }
          .exp-timeline {
            padding-left: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}