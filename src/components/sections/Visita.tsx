import { useState, type FormEvent } from 'react'
import { site, horarios } from '@/data/site'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { cn } from '@/lib/utils'

const periodos = ['Manhã', 'Tarde', 'Noite'] as const

const campo =
  'w-full rounded-2xl border border-hair bg-slab/60 px-5 py-4 text-sm text-bone placeholder:text-ash ' +
  'outline-none transition-colors duration-300 focus:border-lav'

export function Visita() {
  const [nome, setNome] = useState('')
  const [contato, setContato] = useState('')
  const [dia, setDia] = useState<string>(horarios[0].dia)
  const [periodo, setPeriodo] = useState<(typeof periodos)[number]>(periodos[0])
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState('')

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (!nome.trim() || !contato.trim()) {
      setErro('Preencha seu nome e um telefone ou e-mail para contato.')
      return
    }

    setErro('')

    const texto = [
      `Olá! Quero agendar uma visita na Evolution.`,
      `Nome: ${nome}`,
      `Contato: ${contato}`,
      `Dia preferido: ${dia}`,
      `Período preferido: ${periodo}`,
      mensagem.trim() ? `Mensagem: ${mensagem}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener')
    setEnviado(true)
  }

  return (
    <Secao id="visita">
      <div className="grid gap-[clamp(32px,4vw,56px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="grid gap-[clamp(16px,2vw,24px)]">
          <Revelar>
            <Etiqueta tom="lav">08 — Convite</Etiqueta>
          </Revelar>

          <Revelar atraso={0.05}>
            <h2 className="max-w-[17ch] text-d2">Um convite para conhecer o espaço pessoalmente</h2>
          </Revelar>

          <Revelar atraso={0.1}>
            <Etiqueta className="max-w-[40ch] normal-case">
              Uma hora, um professor, nenhum balcão de vendas. Você sai com sua avaliação em mãos,
              decidindo matricular-se ou não.
            </Etiqueta>
          </Revelar>

          <Revelar atraso={0.15}>
            <Etiqueta className="normal-case">
              {site.endereco} · {site.telefone}
            </Etiqueta>
          </Revelar>
        </div>

        <Revelar atraso={0.1}>
          <form
            onSubmit={aoEnviar}
            noValidate
            className="grid gap-4 rounded-3xl border border-hair bg-coal/60 p-[clamp(20px,3vw,32px)] backdrop-blur-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-micro font-medium uppercase text-ash">Nome</span>
                <input
                  className={campo}
                  type="text"
                  name="nome"
                  autoComplete="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-micro font-medium uppercase text-ash">Telefone ou e-mail</span>
                <input
                  className={campo}
                  type="text"
                  name="contato"
                  autoComplete="tel"
                  value={contato}
                  onChange={(e) => setContato(e.target.value)}
                  placeholder="(21) 90000-0000"
                  required
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-micro font-medium uppercase text-ash">Dia preferido</span>
                <select
                  className={cn(campo, 'appearance-none')}
                  name="dia"
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                >
                  {horarios.map((h) => (
                    <option key={h.dia} value={h.dia}>
                      {h.dia}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-micro font-medium uppercase text-ash">Período preferido</span>
                <select
                  className={cn(campo, 'appearance-none')}
                  name="periodo"
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value as (typeof periodos)[number])}
                >
                  {periodos.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-micro font-medium uppercase text-ash">Mensagem (opcional)</span>
              <textarea
                className={cn(campo, 'min-h-[96px] resize-y')}
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Conte um pouco sobre seu objetivo de treino"
              />
            </label>

            {erro && (
              <p role="alert" className="text-micro font-medium text-lav">
                {erro}
              </p>
            )}

            {enviado && !erro && (
              <p role="status" className="text-micro font-medium text-lav">
                O WhatsApp deve abrir com a mensagem pronta. Se não abrir, fale direto pelo{' '}
                {site.telefone}.
              </p>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent bg-bone px-6 py-3.5 text-micro font-semibold uppercase text-void transition-colors duration-300 hover:bg-lav"
            >
              Agendar pelo WhatsApp
            </button>
          </form>
        </Revelar>
      </div>
    </Secao>
  )
}
