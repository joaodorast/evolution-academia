import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { depoimentos } from '@/data/site'
import { Secao } from '@/components/ui/Secao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { cn } from '@/lib/utils'

export function Depoimentos() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false }, [
    Autoplay({ delay: 6500, stopOnInteraction: true }),
  ])
  const [atual, setAtual] = useState(0)

  const anterior = useCallback(() => embla?.scrollPrev(), [embla])
  const proximo = useCallback(() => embla?.scrollNext(), [embla])

  useEffect(() => {
    if (!embla) return
    const aoSelecionar = () => setAtual(embla.selectedScrollSnap())
    aoSelecionar()
    embla.on('select', aoSelecionar)
    return () => {
      embla.off('select', aoSelecionar)
    }
  }, [embla])

  return (
    <Secao indice="05 — Quem treina aqui" aoLado="Depoimentos coletados na renovação de plano" className="pt-0">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-[clamp(10px,1.2vw,18px)]">
          {depoimentos.map((d) => (
            <figure
              key={d.autor}
              className="m-0 flex min-w-0 flex-[0_0_100%] flex-col justify-between gap-8 rounded-frame border border-hair bg-slab p-[clamp(22px,2.6vw,40px)] sm:flex-[0_0_60%] lg:flex-[0_0_42%]"
            >
              <blockquote className="font-display text-[clamp(1.05rem,1.7vw,1.5rem)] font-semibold uppercase leading-[1.15] tracking-[-0.02em]">
                “{d.texto}”
              </blockquote>
              <figcaption>
                <p className="font-display text-d3">{d.autor}</p>
                <Etiqueta className="mt-1.5">{d.detalhe}</Etiqueta>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-1.5">
          {depoimentos.map((d, i) => (
            <button
              key={d.autor}
              type="button"
              aria-label={`Ir para o depoimento ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={cn(
                'h-1 rounded-full transition-all duration-500',
                i === atual ? 'w-8 bg-lav' : 'w-4 bg-hair hover:bg-ash',
              )}
            />
          ))}
        </div>

        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={anterior}
            aria-label="Depoimento anterior"
            className="grid h-11 w-11 place-items-center rounded-full border border-hair transition-colors hover:border-lav hover:text-lav"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={proximo}
            aria-label="Próximo depoimento"
            className="grid h-11 w-11 place-items-center rounded-full border border-hair transition-colors hover:border-lav hover:text-lav"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Secao>
  )
}
