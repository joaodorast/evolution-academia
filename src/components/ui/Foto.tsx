import { useState } from 'react'
import { cn } from '@/lib/utils'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
}

/**
 * Fotografia com rede de segurança: se a imagem não carregar, ela some e a
 * textura que está atrás do elemento assume o lugar — o bloco nunca quebra.
 */
export function Foto({ src, alt, className, ...props }: Props) {
  const [falhou, setFalhou] = useState(false)
  if (falhou) return null

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFalhou(true)}
      className={cn('photo', className)}
      {...props}
    />
  )
}
