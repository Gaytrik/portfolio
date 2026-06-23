import React, { useState, useEffect } from "react";
import { Github, Linkedin, Code2, Mail, ArrowRight, Download, ChevronDown } from "lucide-react";

function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayed;
}

export default function HeroSection() {
  const typedText = useTypingEffect([
    "Build. Secure. Scale.",
    "API. Auth. Deploy.",
    "Code. Ship. Repeat.",
  ]);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Gaytri_Kolhe_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0d1b2e",
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        pointerEvents: "none", position: "absolute",
        top: "-120px", right: "-100px", width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)",
      }} />
      <div style={{
        pointerEvents: "none", position: "absolute",
        bottom: "-100px", left: "-80px", width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
      }} />

      {/* ── Hero content ── */}
      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
          maxWidth: "1080px",
          width: "100%",
          margin: "0 auto",
          padding: "32px 60px 72px",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT — Text */}
        <div style={{
          flex: "1 1 0", minWidth: 0,
          display: "flex", flexDirection: "column",
          alignItems: "flex-start", textAlign: "left",
        }}>
          <p style={{
            color: "#3b9eff", fontSize: "13px", fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px",
          }}>
            Hey, I'm Gaytri
          </p>

          <div style={{ minHeight: "80px", marginBottom: "12px" }}>
            <h1 style={{
              color: "#ffffff",
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 700, lineHeight: 1.25,
              letterSpacing: "0.02em", margin: 0,
            }}>
              {typedText}
              <span style={{
                display: "inline-block", width: "2px", height: "1em",
                marginLeft: "4px", verticalAlign: "middle",
                backgroundColor: "#ffffff",
                animation: "blink 1s step-end infinite",
              }} />
            </h1>
          </div>

          <p style={{
            color: "#3b9eff", fontSize: "clamp(15px, 1.8vw, 19px)",
            fontWeight: 600, marginBottom: "20px", lineHeight: 1.4,
          }}>
            Java Backend Developer · Spring Boot · REST APIs
          </p>

          <p style={{
            color: "#8a9bb0", fontSize: "15px", lineHeight: 1.75,
            marginBottom: "36px", maxWidth: "480px",
          }}>
            Results-driven backend developer with production experience building
            REST APIs and microservices using Java 17, Spring Boot, Spring Security
            (JWT/RBAC), and MySQL. I ship clean, secure, and scalable backend
            systems — from e-commerce platforms to food delivery apps.
          </p>

          {/* Buttons */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: "16px", marginBottom: "36px", flexWrap: "wrap",
          }}>
            <a
              href="#contact"
              className="btn btn-primary btn-square hero-btn"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ArrowRight size={18} />
            </a>
            <button
              onClick={handleResumeDownload}
              className="btn btn-outline hero-btn"
              style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
            >
              <Download size={16} /> Download Resume
            </button>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {[
              { icon: <Github size={20} />, href: "https://github.com/Gaytrik", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gaytrikolhe-4467921b9", label: "LinkedIn" },
              { icon: <Code2 size={20} />, href: "https://leetcode.com", label: "LeetCode" },
              { icon: <Mail size={20} />, href: "mailto:gaytrikolhe2001@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                target="_blank" rel="noopener noreferrer"
                style={{ color: "#4a5a70", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5a70")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="hero-image-wrap" style={{ flexShrink: 0 }}>
          <div style={{
            width: "360px", height: "400px", borderRadius: "16px",
            overflow: "hidden", border: "1px solid rgba(59,158,255,0.18)",
            backgroundColor: "#0f1a2e", boxShadow: "0 0 60px rgba(37,99,235,0.14)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <img
              src="src/assets/profile2.png"
              alt="Gaytri Kolhe"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div style={{
              display: "none", width: "100%", height: "100%",
              alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "14px", backgroundColor: "#0f1a2e",
            }}>
              <div style={{
                width: "90px", height: "90px", borderRadius: "50%",
                backgroundColor: "rgba(59,158,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "30px", fontWeight: 700, color: "#3b9eff",
                border: "2px solid rgba(59,158,255,0.3)",
              }}>GK</div>
              <span style={{ color: "#4a5a70", fontSize: "12px" }}>Add photo at src/assets/profile2.png</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll down arrow — desktop only ── */}
      <div className="scroll-arrow" style={{
        position: "absolute", bottom: "100px",
        left: "50%", transform: "translateX(-50%)", zIndex: 10,
      }}>
        <a
          href="#about"
          aria-label="Scroll down"
          style={{
            width: "42px", height: "42px", borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#ffffff", textDecoration: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.2s",
            animation: "updown 1.6s ease-in-out infinite",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3b9eff")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
        >
          <ChevronDown size={18} />
        </a>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }

        @keyframes updown {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(7px); }
        }

        @media (max-width: 768px) {
          .scroll-arrow {
            display: none !important;
          }

          .hero-inner {
            flex-direction: column !important;
            padding: 16px 24px 32px !important;
            align-items: center !important;
            text-align: center !important;
            gap: 20px !important;
          }
          .hero-inner > div:first-child {
            align-items: center !important;
          }
          .hero-inner > div:first-child p,
          .hero-inner > div:first-child h1 {
            text-align: center !important;
          }
          .hero-inner > div:first-child > div {
            justify-content: center !important;
          }
          .hero-image-wrap {
            width: 100% !important;
            order: -1;
          }
          .hero-image-wrap > div {
            width: 100% !important;
            height: 300px !important;
          }
          .hero-image-wrap img {
            object-position: center 10% !important;
          }
        }
      `}</style>
    </section>
  );
}