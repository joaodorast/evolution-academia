import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { imagens } from '@/lib/images'
import { Foto } from '@/components/ui/Foto'
import { Botao } from '@/components/ui/Botao'
import { Seta } from '@/components/ui/Seta'
import { Etiqueta } from '@/components/ui/Etiqueta'

export function Heroi() {
  const reduzido = useReducedMotion()
  const { scrollY } = useScroll()
  const desloca = useTransform(scrollY, [0, 900], [0, reduzido ? 0 : 110])
  const arrasta = useTransform(scrollY, [0, 900], [0, reduzido ? 0 : -70])

  return (
    <header
      id="topo"
      className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden pt-[clamp(120px,15vw,190px)]"
    >
      {/* lajes de pedra nas laterais, como no material impresso */}
      <div
        className="textura-pedra pointer-events-none absolute inset-y-0 left-0 w-[clamp(90px,15vw,260px)] opacity-80 saturate-[0.7]
                   [mask-image:linear-gradient(90deg,#000_35%,transparent)]"
        aria-hidden="true"
      />
      <div
        className="textura-pedra pointer-events-none absolute inset-y-0 right-0 w-[clamp(90px,15vw,260px)] -scale-x-100 opacity-80 saturate-[0.7]
                   [mask-image:linear-gradient(90deg,#000_35%,transparent)]"
        aria-hidden="true"
      />
      {/* brilho atmosférico por trás de tudo */}
      <div className="textura-atmosfera pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />

      {/* fotografia de fundo, dessaturada e esmaecida nas bordas */}
      <motion.img
        src={imagens.heroi}
        alt="Atleta em série de levantamento no salão principal da Evolution"
        style={{ y: desloca }}
        fetchPriority="high"
        className="photo pointer-events-none absolute -right-[10%] bottom-0 h-[92%] w-[min(66vw,880px)] opacity-60
                   [mask-image:radial-gradient(58%_62%_at_52%_45%,#000_38%,transparent_78%)]"
      />
      {/* névoa sobre o atleta, amarrando foto e textura */}
      <motion.div
        style={{ y: desloca }}
        aria-hidden="true"
        className="textura-nevoa pointer-events-none absolute -right-[6%] bottom-0 h-[88%] w-[min(60vw,800px)] opacity-60
                   [mask-image:radial-gradient(58%_60%_at_50%_45%,#000_36%,transparent_76%)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_35%,rgba(142,159,218,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void to-transparent" />

      <div className="frame relative z-10 w-full">
        <div className="flex flex-wrap justify-between gap-x-10 gap-y-4 pb-[clamp(40px,7vw,90px)]">
          <Etiqueta className="max-w-[34ch]">
            Academia e espaço de treino privado
            <br />
            Rio de Janeiro — Ipanema
          </Etiqueta>
          <Etiqueta className="max-w-[34ch]">
            Feito para controle, privacidade
            <br />e uma rotina com intenção.
          </Etiqueta>
          <Etiqueta className="sm:text-right">
            /2026
            <br />
            Vagas por convite
          </Etiqueta>
        </div>

        <h1 className="max-w-[16ch] text-d1">
          Espaço premium
          <br />
          para o seu <span className="text-lav">estilo de vida</span>
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-[clamp(26px,3.6vw,44px)]">
          <Botao href="#planos">Comece sua matrícula</Botao>
          <Seta href="#espaco" rotulo="Conhecer o espaço" />

          <div className="flex items-center gap-3 sm:ml-auto">
            <div className="flex">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="-ml-2.5 h-6.5 w-6.5 rounded-full border-[1.5px] border-void bg-gradient-to-br from-[#39405A] to-lav first:ml-0"
                  style={{ width: 26, height: 26 }}
                />
              ))}
            </div>
            <Etiqueta>
              63 mil treinos
              <br />
              acompanhados desde 2019
            </Etiqueta>
          </div>
        </div>
      </div>

      {/* cartão flutuante sobre a foto */}
      <div className="absolute bottom-[clamp(300px,34vw,470px)] right-[clamp(16px,7vw,140px)] z-20 hidden items-center gap-3 rounded-2xl border border-hair bg-slab/75 p-2.5 pr-4 backdrop-blur-lg sm:flex">
        <div className="textura-metal h-10 w-12 shrink-0 overflow-hidden rounded-xl">
          <Foto src={imagens.halter} alt="" className="h-full w-full" loading="lazy" />
        </div>
        <div>
          <b className="block font-display text-[13px] tracking-[-0.01em]">Andar 02 — Força</b>
          <Etiqueta>Agora · 12 de 40 alunos</Etiqueta>
        </div>
      </div>

      <div className="frame relative z-10">
        <motion.div style={{ x: arrasta }} className="wordmark mt-[clamp(20px,3vw,40px)]">
          Evolution
        </motion.div>
      </div>
    </header>
  )
}
