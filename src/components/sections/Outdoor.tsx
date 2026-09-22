import { imagens, texturas } from '@/lib/images'
import { Foto } from '@/components/ui/Foto'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'

/** Peça de mídia exterior — a mesma frase que roda nos painéis da cidade. */
export function Outdoor() {
  return (
    <section className="pb-sec">
      <div className="frame">
        <Revelar>
          <div
            className="relative flex min-h-[clamp(320px,44vw,560px)] items-center overflow-hidden rounded-frame border border-hair"
            style={{ backgroundImage: `url(${texturas.pedraLarga})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <Foto
              src={imagens.outdoor}
              alt="Atleta prestes a levantar a barra, em preto e branco"
              loading="lazy"
              className="absolute inset-0 h-full w-full opacity-70 mix-blend-luminosity"
            />
            <div className="textura-nevoa absolute inset-y-0 right-[4%] w-[min(50%,520px)] opacity-55" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_40%,rgba(142,159,218,0.3),transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent" />

            <div className="relative z-10 max-w-[720px] p-[clamp(26px,4.4vw,72px)]">
              <Etiqueta tom="lav">Mídia exterior — 2026</Etiqueta>
              <h2 className="mt-[18px] text-d2">
                Não é academia.
                <br />É um espaço de transformação.
              </h2>
              <Etiqueta className="mt-5 max-w-[30ch]">
                Campanha nos painéis da Paulista, Faria Lima e Oscar Freire.
              </Etiqueta>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  )
}
