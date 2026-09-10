import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
        background: "linear-gradient(135deg, var(--blue-500), var(--cyan-400))",
        color: "#FFFFFF",
        boxShadow: "0 0 20px var(--blue-glow), 0 0 40px var(--cyan-glow)",
        border: "1px solid var(--border-subtle)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 32px var(--glow-strong)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px var(--blue-glow), 0 0 40px var(--cyan-glow)")}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
};

export default BackToTop;