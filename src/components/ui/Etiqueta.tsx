import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  tom?: 'ash' | 'lav' | 'escuro'
  className?: string
}

/** Micro-rótulo em caixa alta com espaçamento largo — usado nos cantos das seções. */
export function Etiqueta({ children, tom = 'ash', className }: Props) {
  return (
    <p
      className={cn(
        'text-micro font-medium uppercase',
        tom === 'ash' && 'text-ash',
        tom === 'lav' && 'text-lav',
        tom === 'escuro' && 'text-dim',
        className,
      )}
    >
      {children}
    </p>
  )
}
