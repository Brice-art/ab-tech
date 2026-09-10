import React from "react";
import { Lightbulb, ShieldCheck, Users, CheckCircle2, TrendingUp } from "lucide-react";

const VALUES = [
  { icon: Lightbulb, title: "Innovation", desc: "We continuously explore better ways to solve problems through technology.", color: "var(--blue-500)" },
  { icon: ShieldCheck, title: "Quality", desc: "We build solutions with usability, reliability, performance, and maintainability in mind.", color: "var(--cyan-400)" },
  { icon: Users, title: "Customer Focus", desc: "We design technology around real user and business needs.", color: "var(--teal-400)" },
  { icon: CheckCircle2, title: "Integrity", desc: "We believe strong technology is built on trust, transparency, and responsibility.", color: "var(--blue-500)" },
  { icon: TrendingUp, title: "Continuous Growth", desc: "Technology evolves continuously, and so do we.", color: "var(--cyan-400)" },
];

const Values = () => (
  <section className="bg-theme-alt py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">VALUES / 07</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14 max-w-2xl">
        What <span className="text-gradient">guides</span> how we build.
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {VALUES.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="card rounded-xl p-6 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
              style={{ background: "var(--surface-alt)", boxShadow: "inset 0 0 16px var(--blue-glow)" }}
            >
              <Icon size={20} style={{ color }} strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-sm font-semibold mb-2">{title}</h3>
            <p className="text-xs leading-relaxed text-secondary">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Values;