import React, { useState } from "react";

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(8, 15, 26, 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(59, 158, 255, 0.08)",
          height: "68px",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              color: "#3b9eff",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.01em",
              lineHeight: 1,
            }}
          >
            Gaytri Kolhe
          </a>

          {/* Desktop Nav — hidden below 768px */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              listStyle: "none",
              margin: 0,
              padding: "8px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#b3c4d6",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 500,
                    padding: "6px 12px",
                    borderRadius: "6px",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#b3c4d6")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — visible only on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
            style={{
              display: "none",           /* shown via CSS below 768px */
              background: "none",
              border: "1px solid rgba(59,158,255,0.25)",
              borderRadius: "8px",
              padding: "8px",
              cursor: "pointer",
              color: "#3b9eff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isMenuOpen ? (
              /* X icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            display: "none",           /* shown via CSS below 768px */
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            zIndex: 49,
            backgroundColor: "rgba(8, 15, 26, 0.98)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(59,158,255,0.12)",
            padding: "12px 24px 20px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: "block",
                    color: "#b3c4d6",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderRadius: "10px",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.backgroundColor = "rgba(59,158,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#b3c4d6";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        /* Desktop: show pill nav, hide hamburger */
        .desktop-nav { display: flex !important; }
        .hamburger-btn { display: none !important; }
        .mobile-menu { display: none !important; }

        /* Mobile: hide pill nav, show hamburger & dropdown */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;