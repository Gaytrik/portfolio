import React, { useState, useEffect, useRef } from "react";
import {
  Code2, Globe, Server, Cloud,
  Coffee, Leaf, Database, Shield,
  Layers, Cpu, Wrench, GitBranch,
  Github, Package, Terminal, Box,
} from "lucide-react";

const TABS = [
  { id: "languages", label: "Programming Languages", icon: <Code2 size={15} /> },
  { id: "frontend",  label: "Frontend Development",  icon: <Globe size={15} /> },
  { id: "backend",   label: "Backend Development",   icon: <Server size={15} /> },
  { id: "cloud",     label: "Cloud & Deployment",    icon: <Cloud size={15} /> },
];

const SKILLS = {
  languages: {
    heading: "Programming Languages",
    items: [
      { name: "Java",       icon: <Coffee size={24} /> },
      { name: "SQL",        icon: <Database size={24} /> },
      { name: "JavaScript", icon: <Code2 size={24} /> },
      { name: "HTML/CSS",   icon: <Globe size={24} /> },
    ],
  },
  frontend: {
    heading: "Frontend Development",
    items: [
      { name: "React",      icon: <Cpu size={24} /> },
      { name: "Tailwind",   icon: <Layers size={24} /> },
      { name: "Bootstrap",  icon: <Globe size={24} /> },
      { name: "Thymeleaf",  icon: <Code2 size={24} /> },
    ],
  },
  backend: {
    heading: "Backend Development",
    items: [
      { name: "Spring Boot",     icon: <Leaf size={24} /> },
      { name: "Spring Security", icon: <Shield size={24} /> },
      { name: "REST APIs",       icon: <Server size={24} /> },
      { name: "MySQL",           icon: <Database size={24} /> },
      { name: "Microservices",   icon: <Layers size={24} /> },
      { name: "JWT / RBAC",      icon: <Shield size={24} /> },
    ],
  },
  cloud: {
    heading: "Cloud & Deployment",
    items: [
      { name: "Docker",    icon: <Box size={24} /> },
      { name: "Git",       icon: <GitBranch size={24} /> },
      { name: "GitHub",    icon: <Github size={24} /> },
      { name: "Maven",     icon: <Wrench size={24} /> },
      { name: "Postman",   icon: <Terminal size={24} /> },
      { name: "IntelliJ",  icon: <Package size={24} /> },
    ],
  },
};

const TOOLS = ["Git", "GitHub", "Postman", "LangChain", "CrewAI", "FastMCP", "Gemini", "ChatGPT", "Docker", "Maven"];

function useTypingHeading(text) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) ref.current = setTimeout(tick, 42);
      else setDone(true);
    };
    ref.current = setTimeout(tick, 80);
    return () => clearTimeout(ref.current);
  }, [text]);

  return { displayed, done };
}

function SkillCard({ name, icon, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#0f2540" : "#091627",
        border: `1px solid ${hovered ? "rgba(59,158,255,0.5)" : "rgba(59,158,255,0.15)"}`,
        borderRadius: "12px",
        padding: "24px 16px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        cursor: "default",
        transition: "background 0.2s, border-color 0.2s",
        animation: "cardIn 0.3s ease both",
        animationDelay: `${index * 55}ms`,
      }}
    >
      <div style={{
        width: "52px", height: "52px", borderRadius: "50%",
        backgroundColor: hovered ? "rgba(59,158,255,0.18)" : "rgba(59,158,255,0.08)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#3b9eff",
        border: `1px solid ${hovered ? "rgba(59,158,255,0.4)" : "rgba(59,158,255,0.18)"}`,
        transition: "background 0.2s, border-color 0.2s",
      }}>
        {icon}
      </div>
      <span style={{
        color: hovered ? "#ffffff" : "#b0c8e0",
        fontSize: "14px", fontWeight: 500,
        textAlign: "center",
        transition: "color 0.2s",
      }}>
        {name}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState("languages");
  const current = SKILLS[active];
  const { displayed, done } = useTypingHeading(current.heading);

  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#0d1b2e",
        padding: "72px 0 72px",
      }}
    >
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pillIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes blink { 50% { opacity: 0; } }

        .skills-tab-btn:last-child { border-right: none !important; }

        @media (max-width: 768px) {
          .skills-tabs { overflow-x: auto !important; }
          .skills-tab-btn { flex: 0 0 auto !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 32px" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{
            color: "#3b9eff",
            fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: 700, margin: "0 0 8px",
            fontFamily: "'Courier New', Courier, monospace",
          }}>
            Skills
          </h2>
          <p style={{ color: "#4a5a70", fontSize: "14px", margin: 0 }}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Tabs */}
        <div
          className="skills-tabs"
          style={{
            display: "inline-flex",
            width: "100%",
            backgroundColor: "#091627",
            border: "1px solid rgba(59,158,255,0.15)",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "16px",
            boxSizing: "border-box",
          }}
        >
          {TABS.map((tab, idx) => {
            const isActive = active === tab.id;
            const isLast = idx === TABS.length - 1;
            return (
              <button
                key={tab.id}
                className="skills-tab-btn"
                onClick={() => setActive(tab.id)}
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "7px",
                  padding: "13px 12px",
                  border: "none",
                  borderRight: isLast ? "none" : "1px solid rgba(59,158,255,0.1)",
                  borderRadius: 0,
                  backgroundColor: isActive ? "#2563eb" : "transparent",
                  color: isActive ? "#ffffff" : "#4a5a70",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",
                  transition: "background 0.18s, color 0.18s",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#aac8e8"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#4a5a70"; }}
              >
                <span style={{ flexShrink: 0 }}>{tab.icon}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div style={{
          border: "1px solid rgba(59,158,255,0.15)",
          borderRadius: "12px",
          padding: "22px 24px 24px",
          backgroundColor: "#091627",
          marginBottom: "16px",
        }}>
          {/* Typing heading — fixed height so cards don't jump */}
          <div style={{ height: "34px", marginBottom: "16px", display: "flex", alignItems: "center" }}>
            <h3 style={{
              color: "#3b9eff",
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "18px",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "0.02em",
            }}>
              {displayed}
              <span style={{
                display: "inline-block",
                width: "2px", height: "1em",
                marginLeft: "3px", verticalAlign: "middle",
                backgroundColor: "#3b9eff",
                opacity: done ? 0 : 1,
                animation: done ? "none" : "blink 0.9s step-end infinite",
              }} />
            </h3>
          </div>

          {/* Cards grid */}
          <div
            className="skills-grid"
            key={active}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "14px",
            }}
          >
            {current.items.map((skill, i) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} index={i} />
            ))}
          </div>
        </div>

        {/* AI & Developer Tooling */}
        <div style={{
          border: "1px solid rgba(59,158,255,0.15)",
          borderRadius: "12px",
          padding: "22px 24px",
          backgroundColor: "#091627",
          textAlign: "center",
        }}>
          <p style={{
            color: "#c8d8ea", fontSize: "12px", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            margin: "0 0 16px",
          }}>
            AI &amp; Developer Tooling
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
            {TOOLS.map((t, i) => (
              <span
                key={t}
                style={{
                  padding: "6px 16px",
                  border: "1px solid rgba(59,158,255,0.22)",
                  borderRadius: "999px",
                  color: "#7a9ab8",
                  fontSize: "13px",
                  backgroundColor: "transparent",
                  animation: `pillIn 0.28s ease ${i * 35}ms both`,
                  cursor: "default",
                  transition: "border-color 0.18s, color 0.18s, background 0.18s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,158,255,0.55)";
                  e.currentTarget.style.color = "#d0e8ff";
                  e.currentTarget.style.backgroundColor = "rgba(59,158,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,158,255,0.22)";
                  e.currentTarget.style.color = "#7a9ab8";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}