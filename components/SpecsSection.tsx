const specs = [
  { group: "Impressão", items: [
    { label: "Tecnologia", value: "Laser monocromático" },
    { label: "Velocidade", value: "42 ppm (A4 paisagem)" },
    { label: "Resolução", value: "1200 × 1200 dpi" },
    { label: "Primeira página", value: "< 6,5 segundos" },
  ]},
  { group: "Papel", items: [
    { label: "Capacidade padrão", value: "550 folhas" },
    { label: "Gramatura", value: "60 – 220 g/m²" },
    { label: "Formatos", value: "A3, A4, A5, Carta, Ofício" },
    { label: "Saída", value: "250 folhas face para baixo" },
  ]},
  { group: "Sistema", items: [
    { label: "Processador", value: "1.2 GHz dual-core" },
    { label: "Memória", value: "512 MB RAM" },
    { label: "Armazenamento", value: "16 GB eMMC" },
    { label: "Display", value: "Touchscreen 4,3\"" },
  ]},
  { group: "Conectividade", items: [
    { label: "Ethernet", value: "10/100/1000 Base-T" },
    { label: "Wireless", value: "802.11 a/b/g/n/ac" },
    { label: "USB Host", value: "USB-A 3.0 (2×)" },
    { label: "Protocolos", value: "PCL6, PostScript 3, PDF" },
  ]},
];

export default function SpecsSection() {
  return (
    <section
      id="desempenho"
      className="bg-[#09090b] px-6 md:px-12 py-24 md:py-36 w-full"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24 border-b border-zinc-800 pb-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-3">
              Seção 04 — Especificações
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-zinc-50">
              Dados
              <br />
              técnicos.
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-[38ch] leading-relaxed">
            Informações completas para equipes de TI e gestores de compras.
          </p>
        </div>

        {/* Specs grid */}
        <div className="grid md:grid-cols-2 gap-0 divide-y divide-zinc-800 md:divide-y-0">
          {specs.map((group) => (
            <div
              key={group.group}
              className="py-10 md:py-0 md:px-0 first:md:pr-12 md:[&:nth-child(2)]:pl-12 md:[&:nth-child(3)]:pr-12 md:[&:nth-child(4)]:pl-12 md:border-b md:border-zinc-800 md:py-12"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-600 mb-6">
                {group.group}
              </p>
              <div className="space-y-0 divide-y divide-zinc-900">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between py-3 gap-4"
                  >
                    <span className="text-[13px] text-zinc-500">{item.label}</span>
                    <span className="font-mono text-[12px] text-zinc-200 text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
