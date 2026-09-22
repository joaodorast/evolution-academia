import { site, navegacao } from '@/data/site'
import { Etiqueta } from '@/components/ui/Etiqueta'

const colunas = [
  { titulo: 'Espaço', itens: navegacao.map((n) => ({ rotulo: n.rotulo, href: n.href })) },
  {
    titulo: 'Matrícula',
    itens: [
      { rotulo: 'Planos', href: '#planos' },
      { rotulo: 'Agendar visita', href: '#visita' },
      { rotulo: 'Day use', href: '#visita' },
      { rotulo: 'Perguntas frequentes', href: '#duvidas' },
    ],
  },
  {
    titulo: 'Contato',
    itens: [
      { rotulo: site.email, href: `mailto:${site.email}` },
      { rotulo: site.telefone, href: 'tel:+551140000190' },
      { rotulo: site.instagram, href: 'https://instagram.com' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-hair bg-coal pt-[clamp(44px,5vw,72px)]">
      <div className="frame">
        <div className="grid gap-[clamp(24px,3vw,44px)] md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-display text-micro font-extrabold uppercase tracking-[0.26em]">
              Evo<span className="text-lav">lution</span>
            </p>
            <Etiqueta className="mt-3.5 max-w-[26ch]">
              {site.endereco}
              <br />
              Aberto 24h para alunos do plano Chave
            </Etiqueta>
          </div>

          {colunas.map((coluna) => (
            <div key={coluna.titulo}>
              <h4 className="mb-3.5 font-sans text-micro font-medium uppercase text-ash">{coluna.titulo}</h4>
              <ul className="grid gap-2.5">
                {coluna.itens.map((item) => (
                  <li key={item.rotulo}>
                    <a href={item.href} className="text-micro uppercase text-bone transition-colors hover:text-lav">
                      {item.rotulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="wordmark-outline mt-[clamp(28px,4vw,60px)]" aria-hidden="true">
          Evolution
        </div>

        <div className="mt-[clamp(18px,2vw,30px)] flex flex-wrap justify-between gap-x-7 gap-y-2.5 border-t border-hair py-[22px]">
          <Etiqueta>© 2026 {site.nome} — {site.descricao}</Etiqueta>
          <Etiqueta>Privacidade · Termos</Etiqueta>
          <Etiqueta>/2026 — Feito para quem treina com intenção</Etiqueta>
        </div>
      </div>
    </footer>
  )
}
