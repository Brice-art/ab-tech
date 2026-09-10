import React from "react";
import { ArrowUpRight, MessagesSquare } from "lucide-react";

const CTA = () => (
  <section className="bg-cta py-24 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 grid-fade pointer-events-none opacity-25" />
    <div className="absolute top-[-20%] right-[-5%] w-[35%] h-[35%] orb" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)" }} />

    <div className="max-w-4xl mx-auto px-6 text-center relative">
      <p className="font-mono text-xs mb-6 tracking-[0.2em]" style={{ color: "#FFFFFF", opacity: 0.85 }}>
        LET'S COLLABORATE
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6 text-white">
        Have an idea?
        <br /> Let's build it.
      </h2>
      <p className="max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
        Whether you need a website, software system, mobile application, web
        platform, or data solution, AB Tech Agency can help turn your idea into a
        working digital product.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 group transition-all hover:-translate-y-0.5"
          style={{ background: "#FFFFFF", color: "var(--blue-600)", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
        >
          Start a Project
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href="#contact"
          className="px-7 py-3.5 rounded-xl text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5"
          style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#FFFFFF" }}
        >
          <MessagesSquare size={16} />
          Talk to Us
        </a>
      </div>
    </div>
  </section>
);

export default CTA;