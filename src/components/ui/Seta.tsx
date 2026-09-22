import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Botão circular com seta diagonal — gira 45° no hover. */
export function Seta({ href = '#', rotulo, className }: { href?: string; rotulo: string; className?: string }) {
  return (
    <a href={href} aria-label={rotulo} className={cn('group inline-block', className)}>
      <span
        className={cn(
          'grid aspect-square w-[clamp(48px,4.6vw,62px)] place-items-center rounded-full',
          'bg-lav text-void transition-[transform,background-color] duration-500 ease-out',
          'group-hover:rotate-45 group-hover:bg-bone',
        )}
      >
        <ArrowUpRight className="h-[42%] w-[42%]" strokeWidth={2.4} />
      </span>
    </a>
  )
}
