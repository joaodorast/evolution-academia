import { Check } from 'lucide-react'
import { planos } from '@/data/site'
import { brl, cn } from '@/lib/utils'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Botao } from '@/components/ui/Botao'
import { Etiqueta } from '@/components/ui/Etiqueta'

export function Planos() {
  return (
    <Secao id="planos" indice="06 — Planos" aoLado="Todos os planos incluem o andar de recuperação">
      <div className="grid gap-[clamp(10px,1.2vw,18px)] md:grid-cols-2 lg:grid-cols-3">
        {planos.map((plano, i) => (
          <Revelar key={plano.nome} atraso={(i % 3) * 0.07} className="h-full">
            <article
              className={cn(
                'flex h-full flex-col gap-[18px] rounded-frame border p-[clamp(20px,2.3vw,32px)] transition-colors duration-500',
                plano.destaque
                  ? 'border-transparent bg-gradient-to-br from-haze to-[#A7B1CD] text-void'
                  : 'border-hair bg-coal hover:border-lav/40 hover:bg-slab',
              )}
            >
              <Etiqueta tom={plano.destaque ? 'escuro' : 'ash'}>
                {plano.nome}
                {plano.selo && ` — ${plano.selo}`}
              </Etiqueta>

              <p className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-black leading-[0.9] tracking-[-0.04em] tabular-nums">
                {plano.preco ? brl(plano.preco) : 'Sob consulta'}
                {plano.preco && (
                  <small
                    className={cn(
                      'text-[0.28em] font-semibold uppercase tracking-[0.14em]',
                      plano.destaque ? 'text-dim' : 'text-ash',
                    )}
                  >
                    {' '}
                    {plano.periodo}
                  </small>
                )}
              </p>

              <ul className="flex flex-1 flex-col gap-2.5">
                {plano.itens.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'flex items-start gap-2.5 border-t pt-2.5',
                      plano.destaque ? 'border-void/10 text-[#39405A]' : 'border-hair text-ash',
                    )}
                  >
                    <Check className={cn('mt-1 h-3.5 w-3.5 shrink-0', plano.destaque ? 'text-void' : 'text-lav')} />
                    {item}
                  </li>
                ))}
              </ul>

              <Botao
                href="#visita"
                variante={plano.destaque ? 'contornoEscuro' : 'contorno'}
                className="w-full"
              >
                {plano.cta}
              </Botao>
            </article>
          </Revelar>
        ))}
      </div>

      <Etiqueta className="mt-6">
        Matrícula de R$ 120 isenta na primeira visita · Day use avulso R$ 90 · Sem fidelidade
      </Etiqueta>
    </Secao>
  )
}
