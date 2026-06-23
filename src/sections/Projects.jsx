import React from "react";
import { Github, ExternalLink } from "lucide-react";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/image.png";
import img3 from "../assets/img3.png";

const projectImages = [img1, img2, img3];

const projects = [
  {
    title: "E-Commerce Platform",
    subtitle: "Microservices Backend",
    description:
      "Designed microservices architecture with independent Auth, Product, Cart, and Order services. Built 10+ REST APIs with JWT auth and RBAC for end-to-end purchase workflows.",
    details: [
      "Microservices with Auth, Product, Cart & Order — independently deployable.",
      "10+ REST APIs with JWT authentication and role-based access control (Admin/User).",
      "Razorpay payment gateway + Cloudinary CDN integration.",
      "Spring Boot · MySQL · JPA/Hibernate · React.js",
    ],
    tags: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MySQL", "Microservices", "React.js", "Razorpay"],
    github: "https://github.com/Gaytrik",
    accent: "#3b9eff",
  },
  {
    title: "Food Delivery Application",
    subtitle: "API Backend",
    description:
      "REST APIs for restaurant listing, dynamic menu management, and real-time order tracking. MongoDB document model handles variable menu schemas across vendors.",
    details: [
      "Restaurant listing, menu management & real-time order tracking APIs.",
      "MongoDB document model for flexible vendor menu schemas.",
      "JWT authentication with Admin/Customer role-based access.",
      "Razorpay integration for multi-restaurant payment flows.",
    ],
    tags: ["Java 8", "Spring Boot", "MongoDB", "JWT", "Microservices", "Razorpay", "Cloudinary"],
    github: "https://github.com/Gaytrik",
    accent: "#22d3a5",
  },
  {
    title: "URL Shortener Service",
    subtitle: "Spring Boot REST API",
    description:
      "RESTful URL shortener with custom alias support, expiry management, and redirect tracking. Clean endpoints for create, resolve, and analytics.",
    details: [
      "Custom alias support, expiry management & redirect analytics.",
      "Indexed MySQL short-code lookups for fast resolution.",
      "Request validation & global exception handling.",
      "Production-ready API documented with Postman.",
    ],
    tags: ["Java 17", "Spring Boot", "MySQL", "JPA/Hibernate", "REST APIs", "Postman"],
    github: "https://github.com/Gaytrik",
    accent: "#a78bfa",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        width: "100%",
        backgroundColor: "#0d1b2e",
        color: "#fff",
        padding: "48px 0",
        boxSizing: "border-box",
      }}
    >
      <div
        className="projects-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2 style={{ color: "#3b9eff", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, margin: "0 0 8px" }}>
            Projects
          </h2>
          <p style={{ color: "#8a9bb0", fontSize: "14px", margin: 0 }}>
            Things I've built in production
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((proj, index) => (
            <article
              key={proj.title}
              className="proj-card"
              style={{
                backgroundColor: "#0a1628",
                border: "1px solid rgba(59,158,255,0.14)",
                borderRadius: "18px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                minHeight: "260px",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${proj.accent}66`;
                e.currentTarget.style.boxShadow = `0 8px 40px ${proj.accent}20`;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,158,255,0.14)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* LEFT — image */}
              <div
                className="proj-img-wrap"
                style={{
                  width: "240px",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                  borderRight: `1px solid rgba(59,158,255,0.1)`,
                }}
              >
                <img
                  src={projectImages[index]}
                  alt={`${proj.title} preview`}
                  className="proj-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.style.background =
                      `linear-gradient(135deg, #060f1c 0%, ${proj.accent}22 100%)`;
                  }}
                />

                {/* dark overlay on hover — shows via CSS */}
                <div className="proj-img-overlay" style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(6,15,28,0)",
                  transition: "background-color 0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }} />

                {/* accent top border */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  backgroundColor: proj.accent,
                  opacity: 0.8,
                }} />

                {/* right fade blend */}
                <div style={{
                  position: "absolute",
                  top: 0, right: 0,
                  width: "40px", height: "100%",
                  background: "linear-gradient(to right, transparent, #0a1628)",
                  pointerEvents: "none",
                }} />
              </div>

              {/* RIGHT — content */}
              <div style={{
                flex: 1,
                padding: "24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                minWidth: 0,
              }}>
                {/* title row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <div>
                    <p style={{
                      color: proj.accent, fontSize: "10px", fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      margin: "0 0 4px", opacity: 0.8,
                    }}>
                      Project 0{index + 1}
                    </p>
                    <h3 style={{ color: "#fff", fontSize: "17px", fontWeight: 700, margin: "0 0 3px", lineHeight: 1.3 }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: proj.accent, fontSize: "12px", fontWeight: 600, margin: 0 }}>
                      {proj.subtitle}
                    </p>
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      fontSize: "12px", fontWeight: 600, color: proj.accent,
                      textDecoration: "none", border: `1px solid ${proj.accent}44`,
                      borderRadius: "999px", padding: "5px 13px", flexShrink: 0,
                      transition: "background 0.2s, transform 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${proj.accent}22`;
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <Github size={13} /> GitHub
                  </a>
                </div>

                {/* description */}
                <p style={{ color: "#8a9bb0", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  {proj.description}
                </p>

                {/* bullet details */}
                <ul style={{ margin: 0, paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {proj.details.map((d) => (
                    <li key={d} style={{ color: "#c8d6e5", fontSize: "12.5px", lineHeight: 1.6 }}>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px", fontWeight: 600,
                        padding: "3px 10px", borderRadius: "999px",
                        color: proj.accent,
                        border: `1px solid ${proj.accent}33`,
                        backgroundColor: `${proj.accent}0d`,
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${proj.accent}22`}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${proj.accent}0d`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .proj-card:hover .proj-img {
          transform: scale(1.06);
        }
        .proj-card:hover .proj-img-overlay {
          background-color: rgba(6,15,28,0.25) !important;
        }
        @media (max-width: 768px) {
          .projects-inner { padding: 0 16px !important; }
          .proj-card { flex-direction: column !important; min-height: unset !important; }
          .proj-img-wrap {
            width: 100% !important;
            height: 200px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(59,158,255,0.1) !important;
          }
          .proj-img { object-position: center !important; }
        }
      `}</style>
    </section>
  );
}