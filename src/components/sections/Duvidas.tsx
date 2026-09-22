import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { perguntas } from '@/data/site'
import { Secao } from '@/components/ui/Secao'
import { cn } from '@/lib/utils'

export function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <Secao id="duvidas" indice="07 — Dúvidas" aoLado="Não achou o que precisava? Fale com a recepção" className="pt-0">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-[clamp(26px,4vw,70px)]">
        <h2 className="mb-8 max-w-[14ch] text-d2 lg:mb-0">
          Perguntas que <span className="text-lav">sempre chegam</span>
        </h2>

        <div className="border-t border-hair">
          {perguntas.map((item, i) => {
            const ativa = aberta === i
            return (
              <div key={item.p} className="border-b border-hair">
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberta(ativa ? null : i)}
                    aria-expanded={ativa}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-[clamp(0.95rem,1.4vw,1.2rem)] font-semibold uppercase tracking-[-0.01em] transition-colors hover:text-lav"
                  >
                    {item.p}
                    <Plus
                      className={cn(
                        'h-4 w-4 shrink-0 text-lav transition-transform duration-500 ease-out',
                        ativa && 'rotate-45',
                      )}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {ativa && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[60ch] pb-6 text-ash">{item.r}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </Secao>
  )
}
