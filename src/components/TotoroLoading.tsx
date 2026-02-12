"use client";

export default function TotoroLoading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1a2a3a" }}
      aria-label="Loading"
    >
      {/* Rain */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {RAIN.map((r, i) => (
          <div
            key={i}
            className="totoro-rain"
            style={{
              left: `${r.x}%`,
              animationDelay: `${r.d}s`,
              animationDuration: `${r.s}s`,
            }}
          />
        ))}
      </div>

      {/* Scene */}
      <svg
        viewBox="0 0 400 320"
        className="relative z-10 w-[280px] sm:w-[360px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground */}
        <rect x="0" y="285" width="400" height="35" fill="#1a3a1a" />
        <ellipse cx="200" cy="285" rx="220" ry="6" fill="#234a23" />

        {/* Puddle */}
        <ellipse cx="310" cy="290" rx="25" ry="4" fill="#1a3a4a" opacity="0.5" />

        {/* Bus stop sign */}
        <rect x="68" y="130" width="4" height="155" fill="#8B7355" rx="2" />
        <rect x="50" y="115" width="40" height="22" fill="#D4A745" rx="3" />
        <text
          x="70"
          y="130"
          textAnchor="middle"
          fontSize="7"
          fill="#3a2a1a"
          fontFamily="sans-serif"
          fontWeight="bold"
        >
          バス停
        </text>

        {/* Totoro */}
        <g className="totoro-breathe">
          {/* Body */}
          <ellipse cx="210" cy="248" rx="72" ry="50" fill="#6B7B8D" />
          {/* Neck area */}
          <rect x="152" y="195" width="116" height="53" fill="#6B7B8D" rx="8" />
          {/* Head */}
          <ellipse cx="210" cy="192" rx="56" ry="45" fill="#6B7B8D" />

          {/* Left ear */}
          <path d="M168,158 L150,90 L185,150" fill="#6B7B8D" />
          <path d="M170,154 L156,102 L182,148" fill="#5A6A7A" />
          {/* Right ear */}
          <path d="M252,158 L270,90 L235,150" fill="#6B7B8D" />
          <path d="M250,154 L264,102 L238,148" fill="#5A6A7A" />

          {/* Belly */}
          <ellipse cx="210" cy="255" rx="45" ry="33" fill="#D4CFC4" />

          {/* Belly chevrons */}
          <path
            d="M192,242 L210,233 L228,242"
            stroke="#8B7B6B"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M188,253 L210,244 L232,253"
            stroke="#8B7B6B"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M192,264 L210,255 L228,264"
            stroke="#8B7B6B"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Eyes */}
          <g className="totoro-blink">
            <circle cx="192" cy="182" r="9" fill="white" />
            <circle cx="228" cy="182" r="9" fill="white" />
            <circle cx="195" cy="182" r="4.5" fill="#1a1a2e" />
            <circle cx="231" cy="182" r="4.5" fill="#1a1a2e" />
            {/* Highlights */}
            <circle cx="197" cy="180" r="1.8" fill="white" />
            <circle cx="233" cy="180" r="1.8" fill="white" />
          </g>

          {/* Nose */}
          <ellipse cx="210" cy="194" rx="6" ry="3.5" fill="#4A3A2A" />

          {/* Mouth */}
          <path
            d="M203,199 Q210,204 217,199"
            stroke="#4A3A2A"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Whiskers */}
          <line x1="174" y1="190" x2="144" y2="185" stroke="#5A6A7A" strokeWidth="1.5" opacity="0.6" />
          <line x1="174" y1="196" x2="142" y2="198" stroke="#5A6A7A" strokeWidth="1.5" opacity="0.6" />
          <line x1="246" y1="190" x2="276" y2="185" stroke="#5A6A7A" strokeWidth="1.5" opacity="0.6" />
          <line x1="246" y1="196" x2="278" y2="198" stroke="#5A6A7A" strokeWidth="1.5" opacity="0.6" />

          {/* Little arms/paws holding umbrella */}
          <ellipse cx="160" cy="220" rx="12" ry="8" fill="#6B7B8D" transform="rotate(-20 160 220)" />
          <ellipse cx="260" cy="220" rx="12" ry="8" fill="#6B7B8D" transform="rotate(20 260 220)" />
          {/* Feet */}
          <ellipse cx="180" cy="293" rx="18" ry="6" fill="#5A6A7A" />
          <ellipse cx="240" cy="293" rx="18" ry="6" fill="#5A6A7A" />
        </g>

        {/* Umbrella */}
        <g className="totoro-umbrella">
          {/* Handle */}
          <line x1="210" y1="148" x2="210" y2="78" stroke="#5A3A1A" strokeWidth="3" strokeLinecap="round" />
          {/* Hook */}
          <path d="M210,148 Q210,156 203,156" stroke="#5A3A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Canopy */}
          <path d="M140,80 Q155,32 210,25 Q265,32 280,80 Z" fill="#C84040" />
          {/* Canopy ribs */}
          <path d="M162,78 Q182,40 210,34" stroke="#A83030" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M210,34 Q238,40 258,78" stroke="#A83030" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M210,25 L210,78" stroke="#A83030" strokeWidth="0.8" opacity="0.4" />
          {/* Tip */}
          <circle cx="210" cy="23" r="3" fill="#5A3A1A" />
          {/* Water drops sliding off */}
          <circle className="totoro-drop-1" cx="150" cy="78" r="2" fill="rgba(150,200,255,0.5)" />
          <circle className="totoro-drop-2" cx="268" cy="76" r="1.5" fill="rgba(150,200,255,0.5)" />
        </g>

        {/* まっくろくろすけ (Soot Sprites) */}
        <g className="totoro-soot-1">
          <circle cx="320" cy="278" r="8" fill="#1a1a2e" />
          {/* Fuzzy edges */}
          <circle cx="312" cy="273" r="2.5" fill="#1a1a2e" />
          <circle cx="328" cy="273" r="2.5" fill="#1a1a2e" />
          <circle cx="313" cy="283" r="2" fill="#1a1a2e" />
          <circle cx="327" cy="283" r="2" fill="#1a1a2e" />
          <circle cx="320" cy="270" r="2" fill="#1a1a2e" />
          {/* Eyes */}
          <circle cx="317" cy="276" r="2.2" fill="white" />
          <circle cx="323" cy="276" r="2.2" fill="white" />
          <circle cx="317.5" cy="276" r="1" fill="#1a1a2e" />
          <circle cx="323.5" cy="276" r="1" fill="#1a1a2e" />
        </g>
        <g className="totoro-soot-2">
          <circle cx="348" cy="280" r="6" fill="#1a1a2e" />
          <circle cx="342" cy="276" r="2" fill="#1a1a2e" />
          <circle cx="354" cy="276" r="2" fill="#1a1a2e" />
          <circle cx="348" cy="274" r="1.5" fill="#1a1a2e" />
          {/* Eyes */}
          <circle cx="346" cy="279" r="1.6" fill="white" />
          <circle cx="350" cy="279" r="1.6" fill="white" />
          <circle cx="346" cy="279" r="0.8" fill="#1a1a2e" />
          <circle cx="350" cy="279" r="0.8" fill="#1a1a2e" />
        </g>
        <g className="totoro-soot-3">
          <circle cx="105" cy="278" r="7" fill="#1a1a2e" />
          <circle cx="98" cy="274" r="2.2" fill="#1a1a2e" />
          <circle cx="112" cy="274" r="2.2" fill="#1a1a2e" />
          <circle cx="99" cy="283" r="1.8" fill="#1a1a2e" />
          <circle cx="111" cy="283" r="1.8" fill="#1a1a2e" />
          <circle cx="105" cy="271" r="1.8" fill="#1a1a2e" />
          {/* Eyes */}
          <circle cx="102" cy="276" r="2" fill="white" />
          <circle cx="108" cy="276" r="2" fill="white" />
          <circle cx="102.5" cy="276" r="1" fill="#1a1a2e" />
          <circle cx="108.5" cy="276" r="1" fill="#1a1a2e" />
        </g>

        {/* Grass blades */}
        <path d="M30,285 Q33,275 36,285" stroke="#2a5a2a" strokeWidth="1.5" fill="none" />
        <path d="M130,285 Q133,273 136,285" stroke="#2a5a2a" strokeWidth="1.5" fill="none" />
        <path d="M280,285 Q283,274 286,285" stroke="#2a5a2a" strokeWidth="1.5" fill="none" />
        <path d="M360,285 Q362,276 365,285" stroke="#2a5a2a" strokeWidth="1.5" fill="none" />
        <path d="M370,285 Q373,278 376,285" stroke="#2a5a2a" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Loading text */}
      <p
        className="relative z-10 mt-6 font-mono text-lg tracking-[0.2em]"
        style={{ color: "#D4CFC4" }}
      >
        Loading
        <span className="totoro-dot-1">.</span>
        <span className="totoro-dot-2">.</span>
        <span className="totoro-dot-3">.</span>
      </p>
    </div>
  );
}

/** Pre-defined raindrop positions for deterministic SSR */
const RAIN = [
  { x: 3, d: 0, s: 0.7 },
  { x: 8, d: 0.4, s: 0.6 },
  { x: 15, d: 0.2, s: 0.8 },
  { x: 22, d: 0.6, s: 0.55 },
  { x: 28, d: 0.1, s: 0.7 },
  { x: 35, d: 0.5, s: 0.6 },
  { x: 42, d: 0.3, s: 0.8 },
  { x: 48, d: 0.7, s: 0.55 },
  { x: 55, d: 0.2, s: 0.7 },
  { x: 60, d: 0.4, s: 0.6 },
  { x: 67, d: 0.1, s: 0.8 },
  { x: 73, d: 0.6, s: 0.55 },
  { x: 80, d: 0.3, s: 0.7 },
  { x: 85, d: 0.5, s: 0.6 },
  { x: 92, d: 0.2, s: 0.8 },
  { x: 97, d: 0.7, s: 0.55 },
  { x: 10, d: 0.8, s: 0.65 },
  { x: 25, d: 0.9, s: 0.7 },
  { x: 50, d: 1.0, s: 0.55 },
  { x: 75, d: 0.85, s: 0.6 },
  { x: 18, d: 1.1, s: 0.75 },
  { x: 38, d: 0.15, s: 0.65 },
  { x: 63, d: 0.45, s: 0.7 },
  { x: 88, d: 0.75, s: 0.55 },
];
