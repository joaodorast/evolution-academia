import { metodo } from '@/data/site'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { cn } from '@/lib/utils'

export function Metodo() {
  return (
    <Secao
      id="metodo"
      indice="02 — Detalhe que importa"
      titulo={
        <>
          Quatro coisas que medimos
          <br />
          antes de acrescentar qualquer outra
        </>
      }
    >
      <div className="grid gap-[clamp(10px,1.2vw,18px)] sm:grid-cols-2 lg:grid-cols-4">
        {metodo.map((pilar, i) => (
          <Revelar key={pilar.titulo} atraso={(i % 4) * 0.07}>
            <article
              className={cn(
                'isolate',
                'group relative flex h-full min-h-[clamp(210px,24vw,330px)] flex-col justify-between overflow-hidden',
                'rounded-frame border p-[clamp(16px,1.7vw,24px)] transition-all duration-500 ease-out hover:-translate-y-1.5',
                pilar.destaque
                  ? 'border-transparent bg-gradient-to-br from-haze to-[#98A4C6] text-void'
                  : 'border-hair bg-slab hover:border-lav/40',
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 -z-10',
                  pilar.destaque ? 'textura-metal opacity-15 mix-blend-multiply' : 'textura-metal opacity-50',
                )}
              />

              <Etiqueta
                tom={pilar.destaque ? 'escuro' : 'ash'}
                className="font-display font-bold tracking-[0.18em]"
              >
                {pilar.marcador}
              </Etiqueta>

              <div>
                <h3 className="text-d3">{pilar.titulo}</h3>
                <p className={cn('mt-2 max-w-[26ch]', pilar.destaque ? 'text-[#39405A]' : 'text-ash')}>
                  {pilar.texto}
                </p>
              </div>
            </article>
          </Revelar>
        ))}
      </div>
    </Secao>
  )
}
