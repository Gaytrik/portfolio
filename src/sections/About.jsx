import React from "react";
import { Mail, MapPin, GraduationCap } from "lucide-react";

const about = {
  summary:
    "Results-driven Java Backend Developer with 1 year of production experience building REST APIs and microservices. I have worked on both full-stack development and applied backend systems. I like using my strong backend skills and modern web technologies to solve real-world problems. I'm always looking for new ways to build scalable, secure, and intelligent systems.",
  email: "gaytrikolhe2001@gmail.com",
  location: "Pune, MH, India",
  education: "B.E. Computer Science & Engineering",
  coreAreas: [
    "Java Backend Development",
    "Spring Boot · REST APIs",
    "Microservices Architecture",
    "JWT Auth · RBAC",
    "MySQL · MongoDB",
    "JPA / Hibernate",
    "React.js",
    "Git · Maven · Postman",
    "Razorpay · Cloudinary",
    "Agile / Scrum",
  ],
};

const educationList = [
  {
    degree: "B.E. Computer Science & Engineering",
    institute: "LoGMIEER, Nashik (SPPU)",
    period: "2020 – 2023",
    score: "CGPA: 8.0/10",
  },
  {
    degree: "Diploma in Computer Engineering",
    institute: "K.K. Wagh Polytechnic, Nashik",
    period: "2017 – 2020",
    score: "85%",
  },
  {
    degree: "Java Full Stack Certification",
    institute: "Full Stack Development Program",
    period: "Jul 2023 – Jun 2024",
    score: "Spring Boot · REST APIs · MySQL",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0d1b2e",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "84px 0 48px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Section heading ── */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2
          style={{
            color: "#3b9eff",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700,
            margin: 0,
          }}
        >
          My Professional Side
        </h2>
      </div>

      {/* ── Two-column body ── */}
      <div
        className="about-body"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
          boxSizing: "border-box",
          alignItems: "stretch",
        }}
      >
        {/* ── LEFT card ── */}
        <div
          className="about-left"
          style={{
            width: "400px",
            flexShrink: 0,
            backgroundColor: "#0a1628",
            border: "1px solid rgba(59,158,255,0.14)",
            borderRadius: "16px",
            padding: "22px 26px",
            boxSizing: "border-box",
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Summary */}
          <p
            style={{
              color: "#c8d6e5",
              fontSize: "12.5px",
              lineHeight: 1.75,
              margin: "0 0 18px",
            }}
          >
            {about.summary}
          </p>

          {/* Info rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "18px",
            }}
          >
            {[
              { Icon: Mail, label: "Email", value: about.email },
              { Icon: MapPin, label: "Location", value: about.location },
              { Icon: GraduationCap, label: "Education", value: about.education },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
              >
                <Icon
                  size={15}
                  style={{ color: "#3b9eff", marginTop: "2px", flexShrink: 0 }}
                />
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 600,
                      margin: "0 0 1px",
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ color: "#8a9bb0", fontSize: "12px", margin: 0 }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Areas */}
          <div>
            <p
              style={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: 600,
                margin: "0 0 8px",
              }}
            >
              Core Areas
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {about.coreAreas.map((area) => (
                <span
                  key={area}
                  style={{
                    fontSize: "10.5px",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    color: "#7ec8ff",
                    border: "1px solid rgba(59,158,255,0.22)",
                    backgroundColor: "transparent",
                    lineHeight: 1.6,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — Education ── */}
        <div
          className="about-right"
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 700,
              margin: "0 0 16px",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {educationList.map((edu) => (
              <div
                key={edu.degree}
                style={{
                  backgroundColor: "#0a1628",
                  border: "1px solid rgba(59,158,255,0.14)",
                  borderRadius: "14px",
                  padding: "20px 24px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                    margin: "0 0 4px",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    color: "#3b9eff",
                    fontSize: "12px",
                    margin: "0 0 12px",
                  }}
                >
                  {edu.institute}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#8a9bb0", fontSize: "12px", margin: 0 }}>
                    {edu.period}
                  </p>
                  <p style={{ color: "#8a9bb0", fontSize: "12px", margin: 0 }}>
                    {edu.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .about-body {
            flex-direction: column !important;
            padding: 0 16px !important;
            gap: 16px !important;
          }
          .about-left {
            width: 100% !important;
          }
          .about-right {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}