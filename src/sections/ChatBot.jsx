import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const SUGGESTED = [
  "How much experience do you have?",
  "What are your skills?",
  "Are you open to relocation?",
  "Tell me about your projects",
  "How can I contact you?",
];

// Smart keyword-based response engine
function getReply(text) {
  const q = text.toLowerCase();

  if (q.match(/hi|hello|hey|hii|helo|sup/))
    return "Hey there! 👋 I'm Gaytri's portfolio assistant. Feel free to ask me about her experience, skills, projects, or how to get in touch!";

  if (q.match(/experience|exp|year|fresher|junior|work/))
    return "Gaytri is a fresher with solid hands-on production experience. She has built real-world REST APIs and microservices using Java 17, Spring Boot, Spring Security (JWT/RBAC), and MySQL — including an e-commerce platform and a food delivery app.";

  if (q.match(/skill|tech|stack|know|language|framework/))
    return "Gaytri's core stack:\n• Backend: Java 17, Spring Boot, Spring Security, REST APIs, MySQL, Microservices, JWT/RBAC\n• Frontend: React, Tailwind CSS, Bootstrap, Thymeleaf\n• DevOps: Docker, Git, GitHub, Maven, Postman\n• AI Tools: LangChain, CrewAI, FastMCP, Gemini, ChatGPT";

  if (q.match(/reloc|move|shift|city|locat|where|pune|remote/))
    return "Yes! Gaytri is based in Pune, Maharashtra and is open to relocation anywhere in India. She is also available for remote opportunities. 📍";

  if (q.match(/project|build|app|platform|ecomm|food|delivery/))
    return "Gaytri has built:\n1. 🛒 E-Commerce Platform — Java, Spring Boot, MySQL, JWT auth, REST APIs\n2. 🍔 Food Delivery App — Microservices architecture, Spring Security, RBAC\nBoth are production-grade backend systems.";

  if (q.match(/contact|email|phone|reach|mail|number|call/))
    return "You can reach Gaytri at:\n📧 gaytrikolhe2001@gmail.com\n📞 +91 72197 86270\n💼 linkedin.com/in/gaytrikolhe-4467921b9\n🐙 github.com/Gaytrik";

  if (q.match(/github|linkedin|social|profile|link/))
    return "Here are Gaytri's profiles:\n🐙 GitHub: github.com/Gaytrik\n💼 LinkedIn: linkedin.com/in/gaytrikolhe-4467921b9\n📧 Email: gaytrikolhe2001@gmail.com";

  if (q.match(/java|spring|boot|security|jwt|mysql|api|micro/))
    return "Gaytri specialises in Java backend development — Java 17, Spring Boot, Spring Security with JWT/RBAC, MySQL, and building RESTful microservices. These are her core strengths with real production usage.";

  if (q.match(/education|college|degree|study|btech|engineering/))
    return "Gaytri has a Computer Science engineering background, which laid the foundation for her strong backend development skills.";

  if (q.match(/hire|available|open|opportunit|job|role|position/))
    return "Yes, Gaytri is actively looking for backend developer roles! She is open to full-time positions, open to relocation, and also considers remote work. Reach her at gaytrikolhe2001@gmail.com 🚀";

  if (q.match(/about|who|introduce|tell me|yourself/))
    return "Gaytri Kolhe is a results-driven Java Backend Developer from Pune, India. She builds clean, secure, and scalable backend systems — REST APIs, microservices, and full-stack apps using Spring Boot, MySQL, and React.";

  if (q.match(/certif|course|learn|udemy|training/))
    return "Gaytri has completed relevant certifications and training in Java, Spring Boot, and related technologies to sharpen her backend development skills.";

  if (q.match(/docker|git|maven|postman|intellij|devops/))
    return "Gaytri is comfortable with DevOps tools: Docker for containerisation, Git & GitHub for version control, Maven for build management, Postman for API testing, and IntelliJ IDEA as her primary IDE.";

  return "That's a great question! I can answer about Gaytri's experience, skills, projects, relocation, or contact info. Try asking something like 'What are your skills?' or 'Are you open to relocation?' 😊";
}

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: "7px", height: "7px", borderRadius: "50%",
          backgroundColor: "#3b9eff", display: "inline-block",
          animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! 👋 I'm Gaytri's portfolio assistant. Ask me anything about her experience, skills, projects, or availability!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 300); }, [open]);

  const sendMessage = (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    setShowSuggested(false);
    setMessages((prev) => [...prev, { role: "user", content: userText }]);
    setLoading(true);

    // Simulate slight delay for natural feel
    setTimeout(() => {
      const reply = getReply(userText);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 700 + Math.random() * 400);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,158,255,0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(59,158,255,0); }
        }
        .chat-msg { animation: chatSlideUp 0.22s ease both; }
        .send-btn:hover:not(:disabled) { background: #1d4ed8 !important; }
        .send-btn:disabled { opacity: 0.4 !important; cursor: not-allowed !important; }
        .suggested-btn:hover {
          background: rgba(59,158,255,0.12) !important;
          border-color: rgba(59,158,255,0.5) !important;
          color: #fff !important;
        }
        .chat-input:focus { outline: none; border-color: rgba(59,158,255,0.5) !important; background: rgba(59,158,255,0.05) !important; }
        .chat-scroll::-webkit-scrollbar { width: 3px; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(59,158,255,0.2); border-radius: 4px; }
      `}</style>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: "fixed", bottom: "84px", right: "24px",
          width: "360px", maxWidth: "calc(100vw - 48px)", height: "520px",
          backgroundColor: "#0d1b2e",
          border: "1px solid rgba(59,158,255,0.2)",
          borderRadius: "18px",
          display: "flex", flexDirection: "column",
          zIndex: 9999,
          animation: "chatSlideUp 0.25s ease both",
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
        }}>

          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "14px 16px",
            borderBottom: "1px solid rgba(59,158,255,0.12)",
            backgroundColor: "#091627", flexShrink: 0,
          }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "50%",
              backgroundColor: "rgba(59,158,255,0.15)",
              border: "1px solid rgba(59,158,255,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#3b9eff", flexShrink: 0,
            }}>
              <Bot size={17} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: "13.5px", fontWeight: 600, color: "#fff" }}>Gaytri's Assistant</p>
              <p style={{ margin: 0, fontSize: "11px", color: "#3b9eff" }}>● Online</p>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#4a5a70", padding: "4px", borderRadius: "6px",
              transition: "color 0.2s", display: "flex",
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#4a5a70"}
            >
              <X size={17} />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-scroll" style={{
            flex: 1, overflowY: "auto",
            padding: "14px 12px",
            display: "flex", flexDirection: "column", gap: "10px",
          }}>
            {messages.map((msg, i) => (
              <div key={i} className="chat-msg" style={{
                display: "flex",
                flexDirection: msg.role === "user" ? "row-reverse" : "row",
                alignItems: "flex-end", gap: "8px",
              }}>
                <div style={{
                  width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0,
                  backgroundColor: msg.role === "user" ? "rgba(37,99,235,0.25)" : "rgba(59,158,255,0.12)",
                  border: `1px solid ${msg.role === "user" ? "rgba(37,99,235,0.4)" : "rgba(59,158,255,0.25)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: msg.role === "user" ? "#6096f5" : "#3b9eff",
                }}>
                  {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                </div>
                <div style={{
                  maxWidth: "76%",
                  padding: "9px 13px",
                  borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  backgroundColor: msg.role === "user" ? "#2563eb" : "#091627",
                  border: msg.role === "user" ? "none" : "1px solid rgba(59,158,255,0.15)",
                  fontSize: "13px", lineHeight: "1.65",
                  color: msg.role === "user" ? "#fff" : "#c8d8ea",
                  whiteSpace: "pre-wrap",
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat-msg" style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                <div style={{
                  width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0,
                  backgroundColor: "rgba(59,158,255,0.12)",
                  border: "1px solid rgba(59,158,255,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#3b9eff",
                }}>
                  <Bot size={12} />
                </div>
                <div style={{
                  padding: "9px 13px", borderRadius: "16px 16px 16px 4px",
                  backgroundColor: "#091627", border: "1px solid rgba(59,158,255,0.15)",
                }}>
                  <TypingDots />
                </div>
              </div>
            )}

            {showSuggested && !loading && (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                <p style={{ fontSize: "10.5px", color: "#4a5a70", margin: "0 0 2px 2px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Suggested
                </p>
                {SUGGESTED.map((q) => (
                  <button key={q} className="suggested-btn" onClick={() => sendMessage(q)} style={{
                    textAlign: "left", padding: "8px 12px",
                    background: "rgba(59,158,255,0.04)",
                    border: "1px solid rgba(59,158,255,0.18)",
                    borderRadius: "10px", color: "#7a9ab8",
                    fontSize: "12px", cursor: "pointer", transition: "all 0.18s",
                  }}>
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "10px 12px",
            borderTop: "1px solid rgba(59,158,255,0.1)",
            backgroundColor: "#091627",
            display: "flex", gap: "8px", alignItems: "flex-end", flexShrink: 0,
          }}>
            <textarea
              ref={(el) => { inputRef.current = el; textareaRef.current = el; }}
              className="chat-input"
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 90) + "px";
              }}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              style={{
                flex: 1, background: "#0b1e33",
                border: "1px solid rgba(59,158,255,0.15)",
                borderRadius: "10px", padding: "9px 12px",
                fontSize: "13px", color: "#c8d8ea",
                fontFamily: "inherit", resize: "none",
                overflowY: "hidden", lineHeight: "1.5",
                transition: "border-color 0.2s, background 0.2s",
              }}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              style={{
                width: "36px", height: "36px", borderRadius: "10px",
                backgroundColor: "#2563eb", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", flexShrink: 0,
                transition: "background 0.2s", color: "#fff",
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed", bottom: "24px", right: "24px",
          width: "52px", height: "52px", borderRadius: "50%",
          backgroundColor: "#2563eb", border: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", zIndex: 9999, color: "#fff",
          animation: "pulse 2.5s ease-in-out infinite",
          transition: "transform 0.2s, background 0.2s",
          boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.background = "#1d4ed8"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#2563eb"; }}
        aria-label="Open chat"
      >
        {open ? <X size={21} /> : <MessageCircle size={21} />}
      </button>
    </>
  );
}