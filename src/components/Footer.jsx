import React from "react";
import { Linkedin, Github, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-theme-deep pt-16 pb-8 relative overflow-hidden">
    <div className="absolute inset-0 grid-fade pointer-events-none opacity-25" />
    <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] orb orb-blue" />

    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <p className="font-display text-lg font-semibold mb-3">
            <span style={{ color: "var(--text-primary)" }} className="glow-text-blue">AB Tech</span>{" "}
            <span className="text-gradient">Agency</span>
          </p>
          <p className="text-sm text-secondary leading-relaxed">
            Building Digital Solutions. Driving Digital Growth.
          </p>
        </div>

        <div>
          <p className="text-xs font-mono mb-4" style={{ color: "var(--teal-400)" }}>Navigate</p>
          <div className="grid grid-cols-2 gap-2">
            {["Home", "About", "Services", "Projects", "Technologies", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-secondary hover:text-teal transition-colors w-fit flex items-center gap-1 group"
              >
                {l}
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono mb-4" style={{ color: "var(--cyan-400)" }}>Connect</p>
          <div className="flex gap-3">
            {[Linkedin, Github, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 rounded-lg flex items-center justify-center btn-ghost transition-all hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t flex flex-col sm:flex-row justify-between gap-3" style={{ borderColor: "var(--border-subtle)" }}>
        <p className="text-xs text-tertiary">© 2026 AB Tech Agency. All rights reserved.</p>
        <p className="text-xs font-mono text-tertiary">
          Kigali, Rwanda — <span className="text-gradient">Built with precision</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;