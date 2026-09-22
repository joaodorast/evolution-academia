import { imagens } from '@/lib/images'

export const site = {
  nome: 'Evolution',
  descricao: 'Academia e espaço de treino privado — Ipanema, Rio de Janeiro',
  endereco: 'Rua Visconde de Pirajá, 1200 — Ipanema, Rio de Janeiro',
  telefone: '+55 21 4000-0190',
  whatsapp: '5521986863072',
  email: 'contato@evolution.com.br',
  instagram: '@evolution.treino',
} as const

export const navegacao = [
  { rotulo: 'O espaço', href: '#espaco' },
  { rotulo: 'Método', href: '#metodo' },
  { rotulo: 'Modalidades', href: '#modalidades' },
  { rotulo: 'Planos', href: '#planos' },
] as const

export const marquee = [
  'Musculação',
  'Condicionamento',
  'Mobilidade',
  'Recuperação',
  'Funcional',
  'Personal',
] as const

export type Numero = {
  valor: number | null
  bruto?: string
  sufixo?: string
  texto: string
}

export const numeros: Numero[] = [
  { valor: 0, sufixo: '%', texto: 'De espera. Seu equipamento é reservado antes de você chegar.' },
  { valor: 380, sufixo: '+', texto: 'Alunos ativos, distribuídos em três andares.' },
  { valor: null, bruto: '24/7', texto: 'Acesso com chave pessoal. O espaço não fecha.' },
  { valor: 100, sufixo: '%', texto: 'Dos treinos escritos por um professor, nunca por um aplicativo.' },
]

export type Pilar = {
  marcador: string
  titulo: string
  texto: string
  destaque?: boolean
}

export const metodo: Pilar[] = [
  {
    marcador: '[ Avaliação ]',
    titulo: 'Linha de base',
    texto: 'Triagem completa de movimento e carga no primeiro dia. Nada é prescrito antes disso.',
  },
  {
    marcador: '[ Progresso ]',
    titulo: 'Carga',
    texto: 'Cada série registrada no rack. Volume revisado com o professor toda semana.',
    destaque: true,
  },
  {
    marcador: '[ Base ]',
    titulo: 'Recuperação',
    texto: 'Sauna, banho frio e sala silenciosa. Agendados junto com o treino, não depois dele.',
  },
  {
    marcador: '[ Equipe ]',
    titulo: 'Acompanhamento',
    texto: 'Um professor para cada oito alunos. O mesmo rosto durante todo o seu ciclo.',
  },
]

export const modalidades = [
  {
    nome: 'Musculação',
    texto: 'Doze racks e anilhas calibradas.',
    foto: imagens.modalidades.musculacao,
    andar: '01',
  },
  {
    nome: 'Condicionamento',
    texto: 'Trenó, bikes e pista de 30 metros.',
    foto: imagens.modalidades.condicionamento,
    andar: '02',
  },
  {
    nome: 'Mobilidade',
    texto: 'Sala aquecida, turmas de seis.',
    foto: imagens.modalidades.mobilidade,
    andar: '02',
  },
  {
    nome: 'Recuperação',
    texto: 'Sauna, imersão fria e uma sala sem telas.',
    foto: imagens.modalidades.recuperacao,
    andar: '03',
  },
  {
    nome: 'Funcional',
    texto: 'Circuitos curtos, no máximo dez pessoas.',
    foto: imagens.modalidades.funcional,
    andar: '01',
  },
  {
    nome: 'Personal',
    texto: 'Uma hora só sua, ficha reescrita a cada ciclo.',
    foto: imagens.modalidades.personal,
    andar: '01',
  },
] as const

export const professores = [
  { nome: 'Ana Ribeiro', area: 'Força e powerlifting', cref: 'CREF 084512-G/RJ', foto: imagens.professores.ana },
  { nome: 'Rafael Nunes', area: 'Condicionamento', cref: 'CREF 071903-G/RJ', foto: imagens.professores.rafael },
  { nome: 'Juliana Alves', area: 'Mobilidade e reabilitação', cref: 'CREF 066271-G/RJ', foto: imagens.professores.juliana },
  { nome: 'Diego Martins', area: 'Personal e avaliação', cref: 'CREF 090144-G/RJ', foto: imagens.professores.diego },
] as const

export type Plano = {
  nome: string
  selo?: string
  preco: number | null
  periodo: string
  itens: string[]
  cta: string
  destaque?: boolean
}

export const planos: Plano[] = [
  {
    nome: 'Livre',
    preco: 190,
    periodo: '/mês',
    itens: [
      'Acesso das 05h às 23h',
      'Avaliação física duas vezes por ano',
      'Andar de recuperação incluso',
      'Um convidado por trimestre',
    ],
    cta: 'Escolher Livre',
  },
  {
    nome: 'Chave',
    selo: 'mais escolhido',
    preco: 290,
    periodo: '/mês',
    itens: [
      'Acesso 24h com chave pessoal',
      'Professor fixo para você',
      'Ficha reescrita a cada ciclo de 6 semanas',
      'Equipamento reservado antes de chegar',
    ],
    cta: 'Escolher Chave',
    destaque: true,
  },
  {
    nome: 'Privativo',
    preco: null,
    periodo: 'sob consulta',
    itens: [
      'Andar reservado só para você',
      'Dois professores por sessão',
      'Fisioterapia e nutrição na casa',
      'Contato direto, sem aplicativo',
    ],
    cta: 'Falar com a equipe',
  },
]

export const horarios = [
  { dia: 'Segunda a sexta', aberto: '05h — 23h', chave: '24 horas' },
  { dia: 'Sábado', aberto: '08h — 18h', chave: '24 horas' },
  { dia: 'Domingo e feriados', aberto: '09h — 14h', chave: '24 horas' },
] as const

export const depoimentos = [
  {
    texto:
      'Saí de uma rede grande e não voltaria. Aqui eu chego, o rack está livre e o treino do dia já está na ficha. Em oito meses tirei 22 quilos do agachamento.',
    autor: 'Marina Costa',
    detalhe: 'Aluna desde 2024 · plano Chave',
  },
  {
    texto:
      'O que me segurou foi a avaliação. Descobri um desequilíbrio de quadril que ninguém tinha olhado antes e o plano inteiro foi montado em cima disso.',
    autor: 'Thiago Barros',
    detalhe: 'Aluno desde 2023 · plano Chave',
  },
  {
    texto:
      'Treino às cinco da manhã e às onze da noite, depende da semana. Ter a chave mudou a relação inteira com o horário.',
    autor: 'Camila Duarte',
    detalhe: 'Aluna desde 2022 · plano Livre',
  },
  {
    texto:
      'A sala de recuperação é o motivo de eu conseguir treinar quatro vezes por semana aos 48 anos. Sauna e imersão entram no agendamento junto com o treino.',
    autor: 'Paulo Menezes',
    detalhe: 'Aluno desde 2021 · plano Privativo',
  },
] as const

export const perguntas = [
  {
    p: 'Preciso de experiência para entrar?',
    r: 'Não. Todo aluno começa pela avaliação de movimento e carga, e a ficha é escrita a partir dela — seja o primeiro treino da vida ou o décimo ano de treino.',
  },
  {
    p: 'Existe fidelidade ou multa de cancelamento?',
    r: 'Não há fidelidade. O plano é mensal e pode ser cancelado com 30 dias de aviso, direto na recepção ou por e-mail.',
  },
  {
    p: 'Como funciona o acesso 24 horas?',
    r: 'Alunos do plano Chave recebem uma chave pessoal que libera a catraca e o elevador a qualquer hora. Fora do horário comercial há sempre um professor de plantão no andar 01.',
  },
  {
    p: 'Posso levar um convidado?',
    r: 'Sim. O plano Livre dá direito a um convidado por trimestre e o Chave a um por mês. O day use avulso custa R$ 90.',
  },
  {
    p: 'Tem estacionamento?',
    r: 'São 40 vagas no subsolo, com manobrista incluso para todos os planos.',
  },
] as const
