import { horarios } from '@/data/site'
import { Secao } from '@/components/ui/Secao'
import { Revelar } from '@/components/ui/Revelar'
import { Etiqueta } from '@/components/ui/Etiqueta'

export function Horarios() {
  return (
    <Secao className="pt-0">
      <div className="grid items-start gap-[clamp(26px,4vw,70px)] lg:grid-cols-2">
        <Revelar>
          <h2 className="text-d2">
            Feito para uma rotina consciente — <span className="text-lav">menos caos, mais controle</span>,
            com clareza e propósito.
          </h2>
        </Revelar>

        <Revelar atraso={0.1}>
          <div className="grid gap-[clamp(18px,2.4vw,30px)]">
            <div className="grid gap-2 border-t border-hair pt-[18px]">
              <Etiqueta tom="lav">Objetivo</Etiqueta>
              <p className="text-ash">
                Construir um espaço que funciona como estúdio particular e entrega resultado de laboratório —
                onde a sala convence, não a propaganda.
              </p>
            </div>

            <div className="grid gap-2 border-t border-hair pt-[18px]">
              <Etiqueta tom="lav">Horários</Etiqueta>
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">Horários de funcionamento da Evolution</caption>
                <tbody>
                  {horarios.map((linha) => (
                    <tr key={linha.dia} className="border-b border-hair last:border-0">
                      <th scope="row" className="py-3 pr-4 font-sans text-[1em] font-normal normal-case text-bone">
                        {linha.dia}
                      </th>
                      <td className="py-3 pr-4 text-ash tabular-nums">{linha.aberto}</td>
                      <td className="py-3 text-right text-lav tabular-nums">{linha.chave}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Etiqueta className="mt-1">
                A coluna à direita vale para alunos do plano Chave, com acesso liberado a qualquer hora.
              </Etiqueta>
            </div>
          </div>
        </Revelar>
      </div>
    </Secao>
  )
}
