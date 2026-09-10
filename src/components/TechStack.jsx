import React from "react";

const STACK = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"], color: "var(--blue-500)" },
  { group: "Backend", items: ["Python", "Django", "REST APIs"], color: "var(--cyan-400)" },
  { group: "Database", items: ["SQL", "MySQL", "PostgreSQL"], color: "var(--teal-400)" },
  { group: "Data & Analytics", items: ["Python", "R", "Excel", "Power BI"], color: "var(--blue-500)" },
  { group: "Development Tools", items: ["Git", "GitHub", "VS Code"], color: "var(--cyan-400)" },
];

const TechStack = () => (
  <section id="technologies" className="bg-theme-alt py-20 md:py-28 relative overflow-hidden">
    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] orb orb-cyan" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="max-w-2xl mb-14">
        <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">TECHNOLOGY / 05</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          Built with <span className="text-gradient">modern technology.</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          We use modern development and data technologies to build reliable,
          scalable, and maintainable digital solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {STACK.map(({ group, items, color }) => (
          <div key={group} className="card rounded-xl p-6">
            <h3 className="font-display text-sm font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
              {group}
            </h3>
            <ul className="flex flex-col gap-2">
              {items.map((i) => (
                <li key={i} className="text-sm font-mono hover:text-blue transition-colors cursor-default text-secondary">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;