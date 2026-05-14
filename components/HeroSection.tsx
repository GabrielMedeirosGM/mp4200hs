"use client";

import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

const stats = [
  { label: "Velocidade", value: "42", unit: "ppm" },
  { label: "Resolução", value: "1200", unit: "dpi" },
  { label: "Ciclo mensal", value: "150K", unit: "pág." },
];

export default function HeroSection() {
  return (
    <section className="bg-[#09090b] px-6 md:px-12 pt-28 pb-10 max-w-[1400px] mx-auto w-full">

      {/* Badge */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-100 inline-block" />
          Série Industrial — 2024
        </span>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">

        {/* Left — title + tagline */}
        <div className="flex flex-col gap-5">
          <h1 className="text-[clamp(64px,10vw,140px)] font-black tracking-[-0.05em] leading-[0.9] text-zinc-50 select-none">
            MP<br />4200<br />HS
          </h1>

          <p className="text-[15px] leading-relaxed text-zinc-400 max-w-[36ch] font-light">
            Velocidade sem compromisso. Precisão sem margem de erro.
            Construída para ambientes que não param.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#anatomia"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-zinc-50 border-b-2 border-zinc-50 pb-0.5 hover:border-zinc-600 hover:text-zinc-500 transition-all duration-300"
            >
              Explorar
            </a>
            <span className="text-zinc-700">|</span>
            <span className="font-mono text-[11px] text-zinc-500 tracking-wide">
              até 42 ppm
            </span>
          </div>
        </div>

        {/* Right — visual stat cards */}
        <div className="hidden md:flex flex-col gap-3 min-w-[220px]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-zinc-800 rounded-lg px-5 py-4 bg-zinc-900 hover:border-zinc-600 transition-colors duration-200"
            >
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-1">
                {s.label}
              </p>
              <p className="font-mono font-bold text-zinc-50 text-2xl leading-none">
                {s.value}
                <span className="text-sm font-normal text-zinc-500 ml-1">{s.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-8 mt-8 border-t border-zinc-800">

        {/* Mobile stats */}
        <div className="flex items-center gap-6 md:hidden">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-600 mb-0.5">
                {s.label}
              </p>
              <p className="font-mono text-sm font-bold text-zinc-50">
                {s.value} {s.unit}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop — model identifier */}
        <p className="hidden md:block font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-600">
          MP4200HS — Impressora Laser Corporativa
        </p>

        <a
          href="#anatomia"
          className="text-zinc-600 hover:text-zinc-100 transition-colors duration-300 ml-auto md:ml-0"
          aria-label="Rolar para baixo"
        >
          <ArrowDown size={18} weight="light" />
        </a>
      </div>
    </section>
  );
}
