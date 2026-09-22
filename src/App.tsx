import { useLenis } from '@/hooks/useLenis'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Marquee } from '@/components/ui/Marquee'
import { Heroi } from '@/components/sections/Heroi'
import { Manifesto } from '@/components/sections/Manifesto'
import { Numeros } from '@/components/sections/Numeros'
import { Metodo } from '@/components/sections/Metodo'
import { Modalidades } from '@/components/sections/Modalidades'
import { Professores } from '@/components/sections/Professores'
import { Horarios } from '@/components/sections/Horarios'
import { Outdoor } from '@/components/sections/Outdoor'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { Planos } from '@/components/sections/Planos'
import { Duvidas } from '@/components/sections/Duvidas'
import { Visita } from '@/components/sections/Visita'

export default function App() {
  useLenis()

  return (
    <div className="grain">
      <a
        href="#espaco"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-bone focus:px-5 focus:py-3 focus:text-micro focus:uppercase focus:text-void"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main>
        <Heroi />
        <Marquee />
        <Manifesto />
        <Numeros />
        <Metodo />
        <Modalidades />
        <Professores />
        <Horarios />
        <Outdoor />
        <Depoimentos />
        <Planos />
        <Duvidas />
        <Visita />
      </main>

      <Footer />
    </div>
  )
}
