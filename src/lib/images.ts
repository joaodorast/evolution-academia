/**
 * Banco de imagens do projeto.
 *
 * As fotos vêm do Unsplash (uso livre, sem necessidade de atribuição).
 * Para trocar por fotos próprias, basta apontar cada chave para um arquivo
 * dentro de /public/img — por exemplo: hero: '/img/hero.jpg'.
 */

const UNSPLASH = 'https://images.unsplash.com/photo-'

/** Monta a URL já otimizada: recorte, largura, qualidade e preto e branco. */
function foto(id: string, w = 1600, opts: { bw?: boolean; h?: number } = {}) {
  const { bw = true, h } = opts
  const params = [
    'auto=format',
    'fit=crop',
    `w=${w}`,
    h ? `h=${h}` : '',
    'q=70',
    bw ? 'sat=-100' : '',
  ]
    .filter(Boolean)
    .join('&')
  return `${UNSPLASH}${id}?${params}`
}

/**
 * Texturas geradas para o projeto (rocha, névoa, atmosfera, metal escovado e grão
 * de filme). Ficam em /public/img e dão a materialidade do layout — as fotos
 * entram por cima delas.
 */
export const texturas = {
  pedra: '/img/textura-pedra.jpg',
  pedraLarga: '/img/textura-pedra-larga.jpg',
  nevoa: '/img/textura-nevoa.jpg',
  atmosfera: '/img/textura-atmosfera.jpg',
  metal: '/img/textura-metal.jpg',
  grao: '/img/textura-grao.png',
} as const

export const imagens = {
  heroi: foto('1605296867304-46d5465a13f1', 1400, { h: 1800 }),
  manifesto: foto('1526506118085-60ce8714f8c5', 1200, { h: 1600 }),
  outdoor: foto('1517836357463-d25dfeac3438', 1800, { h: 1100 }),
  salao: foto('1637430308606-86576d8fef3c', 1600),
  halter: foto('1672344048213-76b6e77304bd', 1200),

  modalidades: {
    musculacao: foto('1517838277536-f5f99be501cd', 1000, { h: 1300 }),
    condicionamento: foto('1599058917212-d750089bc07e', 1000, { h: 1300 }),
    mobilidade: foto('1591258370814-01609b341790', 1000, { h: 1300 }),
    recuperacao: foto('1689877020200-403d8542d95d', 1000, { h: 1300 }),
    funcional: foto('1554284126-aa88f22d8b74', 1000, { h: 1300 }),
    personal: foto('1574680096145-d05b474e2155', 1000, { h: 1300 }),
  },

  professores: {
    ana: foto('1722925541142-5db2668ca492', 800, { h: 1000 }),
    rafael: foto('1581009146145-b5ef050c2e1e', 800, { h: 1000 }),
    juliana: foto('1571019614242-c5c5dee9f50b', 800, { h: 1000 }),
    diego: foto('1584466977773-e625c37cdd50', 800, { h: 1000 }),
  },
} as const
