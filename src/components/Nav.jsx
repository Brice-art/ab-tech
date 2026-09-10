import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

export const NAV_LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Solutions", "#solutions"],
  ["Projects", "#projects"],
  ["Technologies", "#technologies"],
  ["Contact", "#contact"],
];

const Nav = ({ theme = "light", onToggle }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onScrollSpy = () => {
      const ids = NAV_LINKS.map(([, h]) => h.slice(1));
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollSpy);
    };
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--nav-shadow)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight">
          <span style={{ color: "var(--text-primary)" }} className="glow-text-blue">AB Tech</span>
          <span className="text-gradient"> Agency</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative px-4 py-2 text-sm transition-all duration-200 group"
              style={{ color: active === href ? "var(--teal-400)" : "var(--text-secondary)" }}
            >
              <span className="relative z-10 transition-colors" style={{ color: active === href ? "var(--teal-400)" : "var(--text-secondary)" }}>
                {label}
              </span>
              <span
                className="absolute inset-x-3 bottom-0 h-px transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, var(--blue-500), var(--cyan-400), var(--teal-400))",
                  opacity: active === href ? 1 : 0,
                  boxShadow: "0 0 12px var(--blue-glow)",
                  transform: active === href ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            aria-label="Toggle light / dark theme"
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--surface)",
              color: theme === "dark" ? "var(--teal-400)" : "var(--blue-500)",
              boxShadow: "0 0 12px var(--blue-glow)",
            }}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5 group">
              Start a Project
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded border"
            style={{ color: "var(--text-primary)", borderColor: "var(--border-strong)" }}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-8 pt-2 flex flex-col gap-1"
          style={{
            background: "var(--nav-bg-open)",
            backdropFilter: "blur(18px)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-mono py-3 flex items-center justify-between transition-colors"
              style={{ color: active === href ? "var(--teal-400)" : "var(--text-secondary)" }}
            >
              {label}
              <ArrowUpRight size={14} className="opacity-50" />
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-sm text-center px-5 py-3 rounded-lg flex-1">
              Start a Project
            </a>
            <button
              onClick={onToggle}
              aria-label="Toggle light / dark theme"
              className="w-11 rounded-lg flex items-center justify-center"
              style={{ border: "1px solid var(--border-strong)", color: theme === "dark" ? "var(--teal-400)" : "var(--blue-500)" }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;