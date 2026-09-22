import { useEffect } from 'react'
import Lenis from 'lenis'

/** Rolagem suave global, desligada quando o sistema pede menos movimento. */
export function useLenis() {
  useEffect(() => {
    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (semMovimento) return

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let id = 0
    const frame = (t: number) => {
      lenis.raf(t)
      id = requestAnimationFrame(frame)
    }
    id = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])
}
