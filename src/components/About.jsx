import React from "react";
import { Compass, Telescope } from "lucide-react";

const About = () => (
  <section id="about" className="bg-theme py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 grid-fade pointer-events-none opacity-60" />
    <div className="absolute top-[-15%] left-[-10%] w-[40%] h-[40%] orb orb-blue" />
    <div className="absolute bottom-[-15%] right-[-10%] w-[40%] h-[40%] orb orb-teal" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">ABOUT / 06</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Engineering technology <span className="text-shimmer">with purpose.</span>
          </h2>
          <p className="text-secondary leading-relaxed mb-4">
            AB Tech Agency is a technology company focused on creating digital
            products and solutions that address real-world challenges.
          </p>
          <p className="text-secondary leading-relaxed">
            We combine software development, modern web and mobile technologies, and
            data analytics to help organizations move from ideas and information to
            practical digital solutions.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {["Understand the problem.", "Design the solution.", "Build the technology.", "Deliver the value."].map((s, i) => (
            <div key={s} className="flex items-center gap-4 py-3 border-b group" style={{ borderColor: "var(--border-subtle)" }}>
              <span className="index-mark">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-lg group-hover:text-teal transition-colors">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="card gradient-border rounded-xl p-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "var(--surface-alt)", boxShadow: "0 0 24px var(--teal-glow)" }}
          >
            <Compass size={24} className="text-teal" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-sm mb-4" style={{ color: "var(--teal-400)" }}>Mission</h3>
          <p className="text-lg leading-relaxed">
            Our mission is to develop innovative, reliable, and accessible technology
            solutions that help businesses, organizations, and individuals solve
            problems, improve efficiency, and make better decisions.
          </p>
        </div>
        <div className="card gradient-border rounded-xl p-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "var(--surface-alt)", boxShadow: "0 0 24px var(--blue-glow)" }}
          >
            <Telescope size={24} className="text-blue" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-sm mb-4" style={{ color: "var(--teal-400)" }}>Vision</h3>
          <p className="text-lg leading-relaxed">
            Our vision is to become a trusted technology company recognized for
            building impactful digital products and using technology and data to
            create sustainable value.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;