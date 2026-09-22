import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navegacao } from '@/data/site'
import { Botao } from '@/components/ui/Botao'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [fixado, setFixado] = useState(false)
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState<string>(navegacao[0].href)

  useEffect(() => {
    const aoRolar = () => setFixado(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    const secoes = navegacao
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el))

    const obs = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visivel) setAtivo(`#${visivel.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.01, 0.2] },
    )

    secoes.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-gut py-3.5',
          'border-b transition-colors duration-500',
          fixado ? 'border-hair bg-void/85 backdrop-blur-xl' : 'border-transparent',
        )}
        style={{ paddingTop: 'calc(0.875rem + env(safe-area-inset-top, 0px))' }}
      >
        <a href="#topo" className="font-display text-micro font-extrabold uppercase tracking-[0.26em]">
          Evo<span className="text-lav">lution</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-hair bg-slab/60 p-1.5 backdrop-blur-md lg:flex">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-2.5 text-micro font-medium uppercase transition-colors duration-300',
                ativo === item.href ? 'bg-lav/15 text-bone' : 'text-ash hover:text-bone',
              )}
            >
              {item.rotulo}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <Botao href="#visita" variante="contorno" className="hidden lg:inline-flex">
            Agendar visita
          </Botao>
          <button
            type="button"
            onClick={() => setAberto(true)}
            aria-label="Abrir menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-hair lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] grid content-center gap-1.5 bg-void/97 px-gut backdrop-blur-2xl"
          >
            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar menu"
              className="absolute right-gut grid h-11 w-11 place-items-center rounded-full border border-hair"
              style={{ top: 'calc(1.25rem + env(safe-area-inset-top, 0px))' }}
            >
              <X className="h-4 w-4" />
            </button>

            {[...navegacao, { rotulo: 'Agendar visita', href: '#visita' }].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.45 }}
                className={cn(
                  'font-display text-[clamp(2rem,9vw,3.4rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]',
                  i % 2 ? 'text-lav' : 'text-bone',
                )}
              >
                {item.rotulo}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
