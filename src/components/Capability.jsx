import React from "react";
import { Cpu, Globe2, BarChart3, Layers } from "lucide-react";

const CAPABILITIES = [
  { icon: Cpu, title: "Software Engineering", desc: "Custom digital systems and applications.", color: "var(--blue-500)" },
  { icon: Globe2, title: "Web & Mobile", desc: "Modern experiences across web and mobile platforms.", color: "var(--cyan-400)" },
  { icon: BarChart3, title: "Data Analytics", desc: "Turning complex data into useful insights.", color: "var(--teal-400)" },
  { icon: Layers, title: "Digital Solutions", desc: "Technology designed around business problems.", color: "var(--blue-500)" },
];

const Capability = () => (
  <section className="bg-theme-alt py-20 md:py-28 relative overflow-hidden">
    <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[35%] orb orb-blue" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="max-w-2xl mb-14">
        <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">CAPABILITIES / 01</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          Technology. Engineering. <span className="text-gradient">Data.</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          AB Tech Agency brings together software development and data analytics to
          create digital solutions that are practical, scalable, and designed around
          real-world needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CAPABILITIES.map(({ icon: Icon, title, desc, color }, i) => (
          <div key={title} className="card rounded-xl p-6 group relative overflow-hidden">
            <span className="absolute top-4 right-5 font-mono text-[10px] index-mark">
              0{i + 1}
            </span>
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
              style={{ background: "var(--surface-alt)", boxShadow: "inset 0 0 20px var(--blue-glow)" }}
            >
              <Icon size={22} strokeWidth={1.75} style={{ color }} />
            </div>
            <h3 className="font-display text-base font-semibold mb-2">{title}</h3>
            <p className="text-sm text-secondary">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Capability;