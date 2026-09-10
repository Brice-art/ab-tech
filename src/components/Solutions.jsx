import React from "react";

const PROCESS = [
  ["01", "Discover", "Understand the problem and requirements.", "var(--blue-500)"],
  ["02", "Design", "Design the user experience and technical solution.", "var(--cyan-400)"],
  ["03", "Develop", "Build the software using modern technologies.", "var(--teal-400)"],
  ["04", "Test", "Validate performance, security, usability, and reliability.", "var(--blue-500)"],
  ["05", "Deploy", "Deliver and launch the solution.", "var(--cyan-400)"],
  ["06", "Improve", "Maintain, optimize, and scale the product.", "var(--teal-400)"],
];

const Solutions = () => (
  <section id="solutions" className="bg-theme-alt py-20 md:py-28 relative overflow-hidden">
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] orb orb-teal" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="grid lg:grid-cols-5 gap-14 mb-16">
        <div className="lg:col-span-2">
          <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">PROCESS / 03</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">
            Solutions built around <span className="text-gradient">real problems.</span>
          </h2>
        </div>
        <div className="lg:col-span-3 flex flex-col justify-center">
          <p className="leading-relaxed mb-4 text-secondary">
            Every organization has different challenges. We don't believe in
            one-size-fits-all technology.
          </p>
          <p className="leading-relaxed text-secondary">
            AB Tech Agency works with clients to understand their challenges, design
            appropriate solutions, develop the technology, and deliver digital
            products that create measurable value.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-px rounded-xl overflow-hidden border-theme">
        {PROCESS.map(([n, title, desc, color]) => (
          <div key={n} className="card bg-surface-alt p-6 relative group border-0" style={{ borderRadius: 0 }}>
            <span
              className="font-mono text-sm block mb-4 font-medium"
              style={{ color, textShadow: `0 0 12px ${color}` }}
            >
              {n}
            </span>
            <h3 className="font-display text-base font-semibold mb-2">{title}</h3>
            <p className="text-xs leading-relaxed text-secondary">{desc}</p>
            <span
              className="absolute top-0 left-0 h-0.5 w-full transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, ${color}, transparent)`,
                opacity: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;