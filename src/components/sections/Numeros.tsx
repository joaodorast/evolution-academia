import { numeros, type Numero } from '@/data/site'
import { useContagem } from '@/hooks/useContagem'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'

function Valor({ item }: { item: Numero }) {
  const { ref, valor } = useContagem(item.valor ?? 0)

  if (item.bruto) {
    const [a, b] = item.bruto.split('/')
    return (
      <b className="block font-display text-[clamp(2.4rem,6.4vw,5.2rem)] font-black leading-[0.9] tracking-[-0.05em] tabular-nums">
        {a}
        <span className="text-lav">/</span>
        {b}
      </b>
    )
  }

  return (
    <b className="block font-display text-[clamp(2.4rem,6.4vw,5.2rem)] font-black leading-[0.9] tracking-[-0.05em] tabular-nums">
      <span ref={ref}>{valor}</span>
      <span className="text-lav">{item.sufixo}</span>
    </b>
  )
}

export function Numeros() {
  return (
    <section className="grid gap-px border-y border-hair bg-hair sm:grid-cols-2 lg:grid-cols-4">
      {numeros.map((item, i) => (
        <Revelar key={item.texto} atraso={(i % 4) * 0.07} className="bg-void">
          <div className="px-[clamp(16px,2vw,32px)] py-[clamp(24px,3vw,44px)]">
            <Valor item={item} />
            <Etiqueta className="mt-3 max-w-[22ch]">{item.texto}</Etiqueta>
          </div>
        </Revelar>
      ))}
    </section>
  )
}
