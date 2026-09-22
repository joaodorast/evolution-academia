import { cn } from '@/lib/utils'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variante?: 'solido' | 'contorno' | 'contornoEscuro'
}

/** Botão em pílula. Três variantes cobrem fundo escuro e painéis claros. */
export function Botao({ variante = 'solido', className, children, ...props }: Props) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2.5 rounded-full border px-6 py-3.5',
        'text-micro font-semibold uppercase transition-colors duration-300',
        variante === 'solido' && 'border-transparent bg-bone text-void hover:bg-lav',
        variante === 'contorno' && 'border-hair text-bone hover:border-lav hover:text-lav',
        variante === 'contornoEscuro' &&
          'border-void/20 text-void hover:border-void hover:bg-void hover:text-bone',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
