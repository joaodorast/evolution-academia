import { professores } from '@/data/site'
import { Foto } from '@/components/ui/Foto'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'

export function Professores() {
  return (
    <Secao indice="04 — Equipe" aoLado="Um professor para cada oito alunos">
      <div className="grid gap-[clamp(10px,1.2vw,18px)] sm:grid-cols-2 lg:grid-cols-4">
        {professores.map((p, i) => (
          <Revelar key={p.nome} atraso={(i % 4) * 0.07}>
            <article className="group">
              <div className="textura-pedra relative aspect-[4/5] overflow-hidden rounded-frame border border-hair">
                <Foto
                  src={p.foto}
                  alt={p.nome}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="textura-atmosfera absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="photo-tint" />
              </div>
              <h3 className="mt-4 text-d3">{p.nome}</h3>
              <Etiqueta tom="lav" className="mt-1.5">
                {p.area}
              </Etiqueta>
              <Etiqueta className="mt-1">{p.cref}</Etiqueta>
            </article>
          </Revelar>
        ))}
      </div>
    </Secao>
  )
}
