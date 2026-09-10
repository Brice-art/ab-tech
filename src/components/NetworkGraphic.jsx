import React from "react";

const NetworkGraphic = () => (
  <div className="relative">
    <div className="absolute inset-0 orb orb-blue" style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }} />
    <div className="absolute inset-0 orb orb-teal" style={{ width: "80%", height: "80%", left: "20%", top: "10%" }} />
    <svg viewBox="0 0 480 480" className="w-full h-auto relative" role="img" aria-label="Abstract network of connected nodes representing software systems">
      <defs>
        <linearGradient id="netLineBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--blue-500)" }} />
          <stop offset="100%" style={{ stopColor: "var(--cyan-400)" }} />
        </linearGradient>
        <linearGradient id="netLineTeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--cyan-400)" }} />
          <stop offset="100%" style={{ stopColor: "var(--teal-400)" }} />
        </linearGradient>
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g opacity="0.6">
        <line x1="90" y1="120" x2="240" y2="60" stroke="url(#netLineBlue)" strokeWidth="1.2" className="line-draw" />
        <line x1="240" y1="60" x2="390" y2="130" stroke="url(#netLineTeal)" strokeWidth="1.2" className="line-draw" />
        <line x1="90" y1="120" x2="130" y2="270" stroke="url(#netLineBlue)" strokeWidth="1.2" className="line-draw" />
        <line x1="240" y1="60" x2="230" y2="230" stroke="url(#netLineBlue)" strokeWidth="1.2" className="line-draw" />
        <line x1="390" y1="130" x2="350" y2="290" stroke="url(#netLineTeal)" strokeWidth="1.2" className="line-draw" />
        <line x1="130" y1="270" x2="230" y2="230" stroke="url(#netLineBlue)" strokeWidth="1.2" className="line-draw" />
        <line x1="230" y1="230" x2="350" y2="290" stroke="url(#netLineBlue)" strokeWidth="1.2" className="line-draw" />
        <line x1="130" y1="270" x2="180" y2="400" stroke="url(#netLineTeal)" strokeWidth="1.2" className="line-draw" />
        <line x1="230" y1="230" x2="290" y2="400" stroke="url(#netLineBlue)" strokeWidth="1.2" className="line-draw" />
        <line x1="350" y1="290" x2="290" y2="400" stroke="url(#netLineTeal)" strokeWidth="1.2" className="line-draw" />
      </g>
      {[
        [90, 120], [240, 60], [390, 130], [130, 270], [230, 230],
        [350, 290], [180, 400], [290, 400],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          filter="url(#nodeGlow)"
          className={`node-pulse ${i % 3 === 0 ? "node-pulse-d1" : i % 3 === 1 ? "node-pulse-d2" : "node-pulse-d3"}`}
          style={{ fill: i % 2 === 0 ? "var(--blue-500)" : "var(--teal-400)" }}
        />
      ))}
      <circle cx="240" cy="60" r="8" opacity="0.3" filter="url(#nodeGlow)" style={{ fill: "var(--cyan-400)" }} />
      <circle cx="230" cy="230" r="8" opacity="0.3" filter="url(#nodeGlow)" style={{ fill: "var(--blue-500)" }} />
    </svg>
  </div>
);

export default NetworkGraphic;