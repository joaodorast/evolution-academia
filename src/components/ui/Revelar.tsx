import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  atraso?: number
  className?: string
}

/** Entrada suave ao rolar. Com movimento reduzido, o conteúdo aparece direto. */
export function Revelar({ children, atraso = 0, className }: Props) {
  const reduzido = useReducedMotion()

  if (reduzido) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay: atraso, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
