"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LABELS = [
  { at: 0.0,  text: "Anatomia",               sub: "Cada detalhe tem um propósito" },
  { at: 0.2,  text: "Motor de Impressão",      sub: "Precisão em cada ciclo" },
  { at: 0.42, text: "Sistema de Distribuição", sub: "Fluxo contínuo sem interrupção" },
  { at: 0.64, text: "Componentes Internos",    sub: "Engenharia que não se vê" },
  { at: 0.85, text: "MP4200HS",                sub: "Tudo junto. Tudo preciso." },
];

export default function VideoScrubSection() {
  const wrapperRef     = useRef<HTMLDivElement>(null);
  const videoRef       = useRef<HTMLVideoElement>(null);
  const barRef         = useRef<HTMLDivElement>(null);
  const labelRef       = useRef<HTMLHeadingElement>(null);
  const subRef         = useRef<HTMLParagraphElement>(null);
  const prevLabel      = useRef("");
  const rafRef         = useRef<number>(0);
  const targetP        = useRef(0);
  const smoothP        = useRef(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video   = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    // ── Progress from scroll position ────────────────────────────────────────
    const getP = () => {
      const top   = wrapper.getBoundingClientRect().top;
      const total = wrapper.offsetHeight - window.innerHeight;
      return total > 0 ? Math.max(0, Math.min(1, -top / total)) : 0;
    };

    const onScroll = () => { targetP.current = getP(); };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── RAF: lerp smooth → target, drive video.currentTime ──────────────────
    const LERP = 0.25;

    const tick = () => {
      const diff = targetP.current - smoothP.current;
      if (Math.abs(diff) > 0.0001) {
        smoothP.current += diff * LERP;
      }

      const p   = smoothP.current;
      const dur = video.duration;

      if (dur > 0 && video.readyState >= 2) {
        video.currentTime = p * dur;
        if (!video.paused) video.pause();
      }

      // Progress bar
      if (barRef.current) {
        barRef.current.style.transform = `scaleY(${p})`;
      }

      // Labels — driven by smooth progress so they match the frame shown
      const active = [...LABELS].reverse().find((l) => p >= l.at);
      if (active && active.text !== prevLabel.current) {
        prevLabel.current = active.text;
        if (labelRef.current && subRef.current) {
          labelRef.current.textContent = active.text;
          subRef.current.textContent   = active.sub;
          gsap.fromTo(
            [labelRef.current, subRef.current],
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "power2.out" }
          );
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    // ── After metadata: set wrapper height proportional to duration ──────────
    const setup = () => {
      const dur = video.duration || 10;
      const h = Math.min(1200, Math.max(500, Math.round(dur * 220)));
      wrapper.style.height = `${h}vh`;
      targetP.current  = getP();
      smoothP.current  = targetP.current;

      // iOS Safari ignores preload and blocks currentTime until play() is called.
      // A silent play→pause primes the buffer so frame scrubbing works.
      const prime = video.play();
      if (prime !== undefined) {
        prime.then(() => {
          video.pause();
          video.currentTime = 0;
          setReady(true);
        }).catch(() => {
          // Autoplay blocked — still mark ready; scrubbing will work after first user gesture
          setReady(true);
        });
      } else {
        video.pause();
        setReady(true);
      }
    };

    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", setup, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    /* tall wrapper — scroll space for the full video */
    <div
      id="anatomia"
      ref={wrapperRef}
      style={{ position: "relative", height: "600vh" }}
    >
      {/* sticky frame that stays in view while wrapper scrolls */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        {/* ── Video — CSS handles grayscale, no canvas needed ─────────────── */}
        <video
          ref={videoRef}
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/printer-v2.mp4`}
          preload="auto"
          autoPlay
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "grayscale(1) contrast(1.05) brightness(1.05)",
            display: ready ? "block" : "none",
          }}
        />

        {/* ── Vignette ─────────────────────────────────────────────────────── */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(255,255,255,0.55) 100%)",
          }}
        />

        {/* ── Bottom fade ──────────────────────────────────────────────────── */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 160,
            pointerEvents: "none",
            background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
          }}
        />

        {/* ── Section tag ──────────────────────────────────────────────────── */}
        <p
          style={{
            position: "absolute",
            top: 28,
            left: 36,
            margin: 0,
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#09090b",
            pointerEvents: "none",
          }}
        >
          Seção 02 — Estrutura
        </p>

        {/* ── Dynamic label ─────────────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 40,
            pointerEvents: "none",
          }}
        >
          <h2
            ref={labelRef}
            style={{
              margin: "0 0 6px",
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#09090b",
            }}
          >
            Anatomia
          </h2>
          <p
            ref={subRef}
            style={{
              margin: 0,
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontSize: 13,
              color: "#52525b",
              letterSpacing: "0.03em",
            }}
          >
            Cada detalhe tem um propósito
          </p>
        </div>

        {/* ── Vertical progress bar ─────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 1,
              height: 80,
              background: "#d4d4d8",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              ref={barRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#09090b",
                transformOrigin: "top center",
                transform: "scaleY(0)",
              }}
            />
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 9,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#09090b",
              writingMode: "vertical-rl",
            }}
          >
            Role para explorar
          </p>
        </div>

        {/* ── Loading state ─────────────────────────────────────────────────── */}
        {!ready && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: 40,
                height: 1,
                background: "#d4d4d8",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, transparent, #09090b, transparent)",
                  animation: "shimmer 1.2s ease infinite",
                }}
              />
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#09090b",
              }}
            >
              Carregando
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
