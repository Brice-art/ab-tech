import React from "react";
import { CheckCircle2 } from "lucide-react";

const WHY = [
  ["Problem-driven", "We begin with the problem, not the technology."],
  ["Custom solutions", "We develop solutions around specific requirements rather than forcing clients into generic systems."],
  ["Modern technology", "We use modern development tools and technologies to build future-ready products."],
  ["Data-driven", "Where data is available, we use it to generate insights and improve decision-making."],
  ["Scalable approach", "We build with future growth and expansion in mind."],
];

const Why = () => (
  <section className="bg-theme py-20 md:py-28 relative overflow-hidden">
    <div className="absolute top-[-15%] right-[-5%] w-[35%] h-[35%] orb orb-blue" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">WHY US / 08</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14 max-w-2xl">
        Why build <span className="text-shimmer">with us?</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {WHY.map(([title, desc]) => (
          <div key={title} className="flex gap-5 py-5 border-b group" style={{ borderColor: "var(--border-subtle)" }}>
            <CheckCircle2
              size={20}
              className="shrink-0 mt-0.5"
              style={{ color: "var(--teal-400)", filter: "drop-shadow(0 0 8px var(--teal-glow))" }}
              strokeWidth={1.75}
            />
            <div>
              <h3 className="font-display text-base font-semibold mb-1.5 group-hover:text-cyan transition-colors">{title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Why;