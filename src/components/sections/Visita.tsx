import { site } from '@/data/site'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Botao } from '@/components/ui/Botao'
import { Seta } from '@/components/ui/Seta'
import { Etiqueta } from '@/components/ui/Etiqueta'

export function Visita() {
  return (
    <Secao id="visita">
      <div className="grid justify-items-center gap-[clamp(20px,2.6vw,34px)] text-center">
        <Revelar>
          <Etiqueta tom="lav">08 — Convite</Etiqueta>
        </Revelar>

        <Revelar atraso={0.05}>
          <h2 className="max-w-[17ch] text-d2">Um convite para conhecer o espaço pessoalmente</h2>
        </Revelar>

        <Revelar atraso={0.1}>
          <Etiqueta className="max-w-[40ch]">
            Uma hora, um professor, nenhum balcão de vendas. Você sai com sua avaliação em mãos, decidindo
            matricular-se ou não.
          </Etiqueta>
        </Revelar>

        <Revelar atraso={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Botao href={`mailto:${site.email}`}>Agendar minha visita</Botao>
            <Seta href={`mailto:${site.email}`} rotulo="Agendar visita por e-mail" />
          </div>
        </Revelar>

        <Revelar atraso={0.2}>
          <Etiqueta>
            {site.endereco} · {site.telefone}
          </Etiqueta>
        </Revelar>
      </div>
    </Secao>
  )
}
