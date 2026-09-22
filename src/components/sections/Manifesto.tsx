import { imagens } from '@/lib/images'
import { Foto } from '@/components/ui/Foto'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'

export function Manifesto() {
  return (
    <Secao id="espaco" indice="01 — O espaço" aoLado="Lotação limitada a 40 pessoas por andar">
      <div className="grid items-end gap-[clamp(28px,4vw,64px)] lg:grid-cols-[1.25fr_0.75fr]">
        <Revelar>
          <h2 className="max-w-[18ch] text-d2">
            Não somos uma academia.
            <br />
            Somos um espaço de transformação —{' '}
            <span className="text-lav">
              onde força
              <br />
              vira arte
            </span>
            .
          </h2>
          <p className="mt-[clamp(20px,2.4vw,32px)] max-w-[44ch] text-ash">
            Novecentos metros quadrados de concreto, aço e luz baixa. Sem fila, sem espelho em toda parede,
            sem playlist que você não escolheu. Só o trabalho à sua frente.
          </p>
        </Revelar>

        <Revelar atraso={0.1}>
          <figure className="textura-pedra-larga relative m-0 aspect-[3/4] overflow-hidden rounded-frame border border-hair">
            <Foto
              src={imagens.manifesto}
              alt="Aluno em treino de força, em preto e branco"
              loading="lazy"
              className="relative z-10 h-full w-full mix-blend-luminosity"
            />
            <div className="textura-nevoa absolute inset-0 z-20 opacity-40" aria-hidden="true" />
            <div className="photo-tint z-30" />
            <figcaption className="absolute bottom-4 left-4 z-40 rounded-full border border-hair bg-void/60 px-3.5 py-2 backdrop-blur-md">
              <Etiqueta>Andar 01 — Condicionamento</Etiqueta>
            </figcaption>
          </figure>
        </Revelar>
      </div>
    </Secao>
  )
}
