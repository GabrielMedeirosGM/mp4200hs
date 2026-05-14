"use client";

import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        borderBottom: scrolled ? "1px solid rgba(250,250,250,0.08)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* Logo — avatar + developer by SnT */}
        <div className="flex items-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/avatar.png`}
            alt="SnT"
            width={68}
            height={68}
            className="object-contain relative z-10"
          />
          <div className="flex flex-col -ml-1 mb-1 leading-none">
            <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-zinc-500 mb-0.5">
              developer by
            </span>
            <span
              className="text-[2rem] text-white leading-none"
              style={{ fontFamily: "var(--font-graffiti)" }}
            >
              SnT
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Especificações", "Desempenho", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-wider uppercase text-zinc-500 hover:text-zinc-100 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5511946854680"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-wider uppercase px-4 py-2 bg-zinc-50 text-zinc-950 font-semibold hover:bg-white transition-all duration-300 active:scale-[0.98]"
        >
          Quero meu site
        </a>
      </nav>
    </header>
  );
}
