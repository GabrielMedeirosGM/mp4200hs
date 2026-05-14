const items = [
  "MP4200HS",
  "42 ppm",
  "1200 dpi",
  "Laser Monocromático",
  "150K pág./mês",
  "Ethernet Gigabit",
  "PostScript 3",
  "Touchscreen 4.3\"",
];

// Duplicated for seamless loop
const all = [...items, ...items, ...items, ...items];

export default function MarqueeStrip() {
  return (
    <div className="bg-[#09090b] py-4 overflow-hidden border-t border-b border-zinc-900 w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6"
          >
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-zinc-500">
              {item}
            </span>
            <span className="text-zinc-800 text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
