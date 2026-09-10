import React from "react";
import { Cpu, Globe2, Smartphone, BarChart3, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    icon: Cpu,
    title: "Software Systems",
    desc: "Design and development of custom software systems that automate processes, organize information, improve productivity, and support organizational operations.",
    examples: ["Business management systems", "Management information systems", "School and institutional systems", "Inventory systems", "Booking systems", "Custom enterprise solutions"],
    cta: "Explore Software Solutions",
  },
  {
    n: "02",
    icon: Globe2,
    title: "Web Development",
    desc: "We design and develop modern websites and web applications that provide organizations with powerful digital experiences.",
    examples: ["Corporate websites", "Business platforms", "E-commerce", "Web portals", "Dashboards", "Custom web applications"],
    cta: "Explore Web Solutions",
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "We create mobile applications that bring digital products and services directly to users.",
    examples: ["Business applications", "Service applications", "Customer applications", "Educational applications", "Cross-platform mobile applications"],
    cta: "Explore Mobile Solutions",
  },
  {
    n: "04",
    icon: BarChart3,
    title: "Data Analytics",
    desc: "We transform raw data into meaningful insights that support better decisions.",
    examples: ["Data cleaning", "Statistical analysis", "Business analytics", "Data visualization", "Interactive dashboards", "Reporting"],
    cta: "Explore Data Solutions",
  },
];

const Services = () => (
  <section id="services" className="bg-theme py-20 md:py-28 relative overflow-hidden">
    <div className="absolute top-[-15%] left-[-10%] w-[40%] h-[40%] orb orb-cyan" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="max-w-2xl mb-14">
        <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">SERVICES / 02</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          What we <span className="text-shimmer">build</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          From ideas to digital products. Every solution is engineered with precision,
          quality, and scalability in mind.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {SERVICES.map(({ n, icon: Icon, title, desc, examples, cta }) => (
          <div key={n} className="card gradient-border rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform hover:scale-110 cursor-default"
                style={{ background: "var(--surface-alt)", boxShadow: "0 0 24px var(--teal-glow)" }}
              >
                <Icon size={26} className="text-teal" strokeWidth={1.5} />
              </div>
              <span className="index-mark">{n}</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
            <p className="text-sm text-secondary mb-5 leading-relaxed">{desc}</p>
            <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 mb-6">
              {examples.map((e) => (
                <li key={e} className="text-xs text-tertiary flex items-start gap-1.5">
                  <span className="text-teal mt-0.5">•</span>{e}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:text-cyan transition-colors group">
              {cta}
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;