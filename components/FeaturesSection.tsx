const features = [
  {
    index: "01",
    title: "Velocidade Real",
    body:
      "42 páginas por minuto em impressão monocromática contínua. Sem aquecimento intermediário, sem hesitação.",
    metric: "42 ppm",
  },
  {
    index: "02",
    title: "Resolução Cirúrgica",
    body:
      "1200 × 1200 dpi com tecnologia de ponto fino. Textos em 6pt legíveis. Gráficos sem aliasing visível.",
    metric: "1200 dpi",
  },
  {
    index: "03",
    title: "Ciclo Estendido",
    body:
      "150.000 páginas por mês de ciclo de trabalho recomendado. Projetada para ambientes de produção real.",
    metric: "150K / mês",
  },
  {
    index: "04",
    title: "Conectividade Total",
    body:
      "Ethernet Gigabit, Wi-Fi 802.11ac, USB 3.0. Suporte a impressão em nuvem e protocolos corporativos.",
    metric: "3 vias",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="especificações"
      className="bg-[#09090b] px-6 md:px-12 py-24 md:py-36 max-w-[1400px] mx-auto w-full"
    >
      {/* Header */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 mb-16 md:mb-24 items-end">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-3">
            Seção 03 — Capacidades
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-zinc-50">
            O que ela
            <br />
            entrega.
          </h2>
        </div>
        <p className="text-zinc-500 text-[15px] leading-relaxed max-w-[52ch] md:self-end">
          Especificações não são números numa folha. São compromissos. Cada dado
          abaixo foi validado em condições reais de uso contínuo.
        </p>
      </div>

      {/* Features — asymmetric 2-col zigzag */}
      <div className="space-y-0 divide-y divide-zinc-800">
        {features.map((f, i) => (
          <div
            key={f.index}
            className={`grid md:grid-cols-[80px_1fr_1fr_auto] gap-6 md:gap-12 py-10 items-start ${
              i % 2 === 0 ? "" : "md:text-right md:[&>*:last-child]:text-left"
            }`}
          >
            <span className="font-mono text-[11px] text-zinc-600 tracking-widest pt-1">
              {f.index}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-zinc-50 md:col-span-1">
              {f.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[45ch]">
              {f.body}
            </p>
            <div className="md:text-right">
              <span className="font-mono text-base font-bold text-zinc-50">
                {f.metric}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
