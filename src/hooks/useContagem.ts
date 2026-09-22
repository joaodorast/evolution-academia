import { useEffect, useRef, useState } from 'react'

/** Conta de 0 até `ate` quando o elemento entra na tela. */
export function useContagem(ate: number, duracao = 1100) {
  const ref = useRef<HTMLSpanElement>(null)
  const [valor, setValor] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (semMovimento) {
      setValor(ate)
      return
    }

    let quadro = 0
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return
        obs.disconnect()
        const inicio = performance.now()
        const passo = (agora: number) => {
          const p = Math.min((agora - inicio) / duracao, 1)
          setValor(Math.round(ate * (1 - Math.pow(1 - p, 3))))
          if (p < 1) quadro = requestAnimationFrame(passo)
        }
        quadro = requestAnimationFrame(passo)
      },
      { threshold: 0.5 },
    )

    obs.observe(el)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(quadro)
    }
  }, [ate, duracao])

  return { ref, valor }
}
