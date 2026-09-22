import { modalidades } from '@/data/site'
import { Foto } from '@/components/ui/Foto'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'

export function Modalidades() {
  return (
    <Secao id="modalidades" indice="03 — Modalidades" aoLado="Três andares · uma chave">
      <div className="grid gap-[clamp(10px,1.2vw,18px)] sm:grid-cols-2 lg:grid-cols-3">
        {modalidades.map((item, i) => (
          <Revelar key={item.nome} atraso={(i % 3) * 0.07}>
            <article className="textura-pedra group relative isolate aspect-[3/3.7] overflow-hidden rounded-frame border border-hair">
              <Foto
                src={item.foto}
                alt={`${item.nome} na Evolution`}
                loading="lazy"
                className="absolute inset-0 h-full w-full opacity-95 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="textura-atmosfera absolute inset-0 opacity-45" aria-hidden="true" />
              <div className="photo-tint" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3.5 p-[clamp(16px,1.8vw,26px)]">
                <div>
                  <h3 className="text-d3">{item.nome}</h3>
                  <Etiqueta className="mt-1.5 min-h-[3em] max-w-[24ch]">{item.texto}</Etiqueta>
                </div>
                <Etiqueta className="shrink-0">{item.andar}</Etiqueta>
              </div>
            </article>
          </Revelar>
        ))}
      </div>
    </Secao>
  )
}
