import { EnvelopeSimple, WhatsappLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="bg-[#09090b] px-6 md:px-12 pt-24 pb-16 w-full"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Bloco principal */}
        <div className="grid md:grid-cols-[3fr_1fr] gap-12 md:gap-24 items-end border-t border-zinc-800 pt-16">

          {/* Esquerda */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-6">
              Developer by SnT — Solicitar projeto
            </p>
            <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] leading-none text-zinc-50">
              Sua marca
              <br />
              merece uma
              <br />
              <span className="text-zinc-600">landing assim.</span>
            </h2>

            <p className="text-zinc-500 text-[15px] leading-relaxed max-w-[48ch] mt-8">
              Landing pages de alto impacto — design de nível industrial,
              performance real, identidade sob medida. Sem templates genéricos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="https://wa.me/5511946854680"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-50 text-zinc-950 text-sm tracking-widest uppercase font-semibold hover:bg-white transition-colors duration-300 active:scale-[0.98] group"
              >
                <WhatsappLogo size={16} weight="bold" />
                Solicitar via WhatsApp
                <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
              <a
                href="mailto:gabrielde.2000medeiros@outlook.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-zinc-700 text-zinc-300 text-sm tracking-widest uppercase font-medium hover:border-zinc-400 hover:text-zinc-50 transition-all duration-300 active:scale-[0.98] group"
              >
                <EnvelopeSimple size={16} weight="regular" />
                Enviar e-mail
              </a>
            </div>
          </div>

          {/* Direita — contatos */}
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-2">
                WhatsApp
              </p>
              <a
                href="https://wa.me/5511946854680"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-zinc-300 hover:text-white transition-colors"
              >
                +55 (11) 94685-4680
              </a>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-2">
                Email
              </p>
              <a
                href="mailto:gabrielde.2000medeiros@outlook.com"
                className="font-mono text-[11px] text-zinc-300 hover:text-white transition-colors break-all"
              >
                gabrielde.2000medeiros
                <br />
                @outlook.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-2">
                Tempo de resposta
              </p>
              <p className="font-mono text-xs text-zinc-400">
                Até 24h úteis
              </p>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-20 pt-8 border-t border-zinc-800">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-700">
            MP4200HS — Série Industrial 2024
          </span>
          <span className="font-mono text-[10px] text-zinc-700">
            Desenvolvido por SnT · gabrielde.2000medeiros@outlook.com
          </span>
        </div>

      </div>
    </section>
  );
}
