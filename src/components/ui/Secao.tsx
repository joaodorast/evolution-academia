import { cn } from '@/lib/utils'
import { Etiqueta } from './Etiqueta'

type Props = {
  id?: string
  indice?: string
  titulo?: React.ReactNode
  aoLado?: React.ReactNode
  children: React.ReactNode
  className?: string
  semMoldura?: boolean
}

/** Bloco padrão: respiro vertical, cabeçalho com índice à esquerda e nota à direita. */
export function Secao({ id, indice, titulo, aoLado, children, className, semMoldura }: Props) {
  const conteudo = (
    <>
      {(indice || titulo || aoLado) && (
        <header className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4 pb-[clamp(26px,3.4vw,48px)]">
          <div className="flex flex-col gap-4">
            {indice && <Etiqueta tom="lav">{indice}</Etiqueta>}
            {titulo && <h2 className="max-w-[20ch] text-d3">{titulo}</h2>}
          </div>
          {aoLado && <Etiqueta className="max-w-[34ch] sm:text-right">{aoLado}</Etiqueta>}
        </header>
      )}
      {children}
    </>
  )

  return (
    <section id={id} className={cn('relative py-sec', className)}>
      {semMoldura ? conteudo : <div className="frame">{conteudo}</div>}
    </section>
  )
}
