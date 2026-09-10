import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import NetworkGraphic from "./NetworkGraphic.jsx";

const Hero = () => (
  <section id="home" className="bg-theme-deep relative overflow-hidden min-h-screen flex items-center">
    <div className="absolute inset-0 grid-fade pointer-events-none" />
    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] orb orb-blue" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] orb orb-teal" />
    <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] orb orb-cyan" />

    <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 relative grid md:grid-cols-2 gap-14 items-center w-full">
      <div className="reveal">
        <p
          className="font-mono text-xs tracking-[0.2em] mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            color: "var(--teal-400)",
            border: "1px solid var(--border-strong)",
            background: "var(--surface)",
            boxShadow: "0 0 20px var(--teal-glow)",
          }}
        >
          <Sparkles size={12} />
          Software &nbsp;/&nbsp; Web &nbsp;/&nbsp; Mobile &nbsp;/&nbsp; Data
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mb-6">
          <span className="glow-text-blue" style={{ color: "var(--text-primary)" }}>
            We build technology
          </span>
          <br />
          <span className="text-shimmer">that moves ideas forward.</span>
        </h1>
        <p className="text-base md:text-lg text-secondary max-w-lg mb-10 leading-relaxed">
          AB Tech Agency designs and develops modern software systems, websites, web
          applications, mobile applications, and data-driven solutions for businesses
          and organizations.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary px-7 py-3.5 rounded-xl text-sm flex items-center gap-2 group">
            Start a Project
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#projects" className="btn-ghost px-7 py-3.5 rounded-xl text-sm">
            Explore Our Work
          </a>
        </div>

        <div className="mt-12 flex items-center gap-8">
          {[
            ["200+", "Solutions"],
            ["40+", "Technologies"],
            ["24/7", "Support"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col">
              <span className="font-display text-2xl font-semibold text-gradient">{num}</span>
              <span className="text-xs font-mono text-tertiary">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal float-anim" style={{ animationDelay: ".15s" }}>
        <NetworkGraphic />
      </div>
    </div>
  </section>
);

export default Hero;