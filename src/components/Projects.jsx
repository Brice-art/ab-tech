import React from "react";
import { Database, FileCode2, Smartphone, BarChart3, ArrowUpRight, ShoppingBagIcon } from "lucide-react";

const PROJECTS = [
  {
    name: "Huye Finds",
    category: "Web Applications",
    desc: "A platform built for students and people in Huye to find and share information about local services, events, and opportunities.",
    tech: ["TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    tag: "Concept",
    icon: ShoppingBagIcon,
    glow: "var(--blue-glow)",
    projectLink: "https://huye-finds.xyz/",
  },
  {
    name: "ELB SERVICES LTD Website",
    category: "Web Applications",
    desc: "A static site build for ELB Services Ltd, a construction and building services company based in Rutare, Rwanda.",
    tech: ["Astro", "TypeScript", "Vercel"],
    tag: "Concept",
    icon: FileCode2,
    glow: "var(--teal-glow)",
    projectLink: "https://elbservicesgroup.vercel.app/",
  },
  // {
  //   name: "Northline Retail Platform",
  //   category: "Web Applications",
  //   desc: "A multi-branch inventory and sales dashboard built for a growing retail business.",
  //   tech: ["React", "Tailwind CSS", "REST API"],
  //   tag: "Concept",
  //   icon: FileCode2,
  //   glow: "var(--cyan-glow)",
  // },
  // {
  //   name: "FieldReach Mobile",
  //   category: "Mobile Applications",
  //   desc: "A cross-platform field-service app connecting technicians with job assignments in real time.",
  //   tech: ["React Native", "Django REST"],
  //   tag: "Prototype",
  //   icon: Smartphone,
  //   glow: "var(--teal-glow)",
  // },
  // {
  //   name: "Harvest Insights Dashboard",
  //   category: "Data Analytics",
  //   desc: "An interactive analytics dashboard turning agricultural yield data into decision-ready reports.",
  //   tech: ["Python", "Power BI", "SQL"],
  //   tag: "Concept",
  //   icon: BarChart3,
  //   glow: "var(--blue-glow)",
  // },
];

const Projects = () => (
  <section id="projects" className="bg-theme py-20 md:py-28 relative overflow-hidden">
    <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] orb orb-blue" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <div>
          <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">PORTFOLIO / 04</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Selected <span className="text-shimmer">work</span>
          </h2>
          <p className="text-secondary">Turning ideas into working technology.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <div key={p.name} className="card rounded-xl overflow-hidden group">
            <div
              className="h-44 flex items-center justify-center relative overflow-hidden"
              style={{
                background: "var(--surface-alt)",
                boxShadow: `inset 0 0 80px ${p.glow}`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${p.glow}, transparent 70%)` }}
              />
              <p.icon
                size={40}
                strokeWidth={1.25}
                className="relative transition-transform duration-500 group-hover:scale-110"
                style={{ color: "var(--teal-400)", filter: "drop-shadow(0 0 12px var(--teal-glow))" }}
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-teal">{p.category}</span>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{ border: "1px solid var(--border-strong)", color: "var(--cyan-400)" }}
                >
                  {p.tag}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-secondary mb-5 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded transition-colors hover:text-teal"
                    style={{ border: "1px solid var(--border-subtle)", background: "var(--surface-alt)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:text-cyan transition-colors group">
                View Project
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
