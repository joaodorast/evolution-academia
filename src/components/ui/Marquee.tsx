import { marquee } from '@/data/site'

/** Faixa infinita de modalidades entre o herói e o manifesto. */
export function Marquee() {
  const itens = [...marquee, ...marquee]

  return (
    <div className="overflow-hidden border-y border-hair bg-coal py-4" aria-hidden="true">
      <div className="flex w-max animate-slide gap-11">
        {itens.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-11 font-display text-[clamp(13px,1.5vw,19px)] font-bold uppercase tracking-[0.04em] text-ash"
          >
            {item}
            <i className="block h-1.5 w-1.5 rounded-full bg-lav-deep" />
          </span>
        ))}
      </div>
    </div>
  )
}
