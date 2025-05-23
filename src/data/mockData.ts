import { Wedding, Budget, Contract, Item, Payment, Event } from '@/types';
import { addDays, subDays } from 'date-fns';

const today = new Date();

const generateId = () => Math.random().toString(36).substring(2, 15);

export const weddings: Wedding[] = [
  {
    id: 'w1',
    title: 'Casamento de Ana e Pedro',
    date: addDays(today, 60),
    location: 'Buffet Jardim Azul, São Paulo',
    clientNames: 'Ana Silva & Pedro Santos',
    status: 'upcoming',
    budget: 85000,
    totalPaid: 40000,
  },
  {
    id: 'w2',
    title: 'Casamento de Marina e João',
    date: addDays(today, 120),
    location: 'Fazenda Vista Linda, Campinas',
    clientNames: 'Marina Oliveira & João Costa',
    status: 'upcoming',
    budget: 120000,
    totalPaid: 50000,
  },
  {
    id: 'w3',
    title: 'Casamento de Carla e Roberto',
    date: subDays(today, 30),
    location: 'Hotel Continental, Rio de Janeiro',
    clientNames: 'Carla Mendes & Roberto Almeida',
    status: 'completed',
    budget: 95000,
    totalPaid: 95000,
  },
  {
    id: 'w4',
    title: 'Casamento de Fernanda e Lucas',
    date: addDays(today, 180),
    location: 'Casa de Festas Belo Monte, Belo Horizonte',
    clientNames: 'Fernanda Lima & Lucas Moreira',
    status: 'upcoming',
    budget: 75000,
    totalPaid: 25000,
  },
];

export const budgets: Budget[] = [
  {
    id: 'b1',
    weddingId: 'w1',
    totalAmount: 85000,
    categories: [
      {
        id: 'bc1',
        name: 'Buffet',
        items: [
          {
            id: 'bi1',
            name: 'Jantar completo para 150 convidados',
            amount: 35000,
            supplier: 'Buffet Gourmet',
            notes: 'Inclui entrada, prato principal e sobremesa',
            isPaid: true,
          },
          {
            id: 'bi2',
            name: 'Bar e bebidas',
            amount: 10000,
            supplier: 'Adega Premium',
            notes: 'Open bar por 6 horas',
            isPaid: false,
          },
        ],
      },
      {
        id: 'bc2',
        name: 'Decoração',
        items: [
          {
            id: 'bi3',
            name: 'Flores e arranjos',
            amount: 15000,
            supplier: 'Floricultura Jardim',
            notes: 'Inclui buquê da noiva',
            isPaid: true,
          },
          {
            id: 'bi4',
            name: 'Iluminação',
            amount: 8000,
            supplier: 'Luz & Cia',
            isPaid: false,
          },
        ],
      },
      {
        id: 'bc3',
        name: 'Fotografia e Vídeo',
        items: [
          {
            id: 'bi5',
            name: 'Ensaio pré-wedding + cerimônia',
            amount: 12000,
            supplier: 'Studio Carlos Fotografias',
            isPaid: true,
          },
          {
            id: 'bi6',
            name: 'Vídeo completo',
            amount: 5000,
            supplier: 'Studio Carlos Fotografias',
            notes: 'Entrega em até 60 dias após o evento',
            isPaid: false,
          },
        ],
      },
    ],
    notes: 'Orçamento aprovado pelos clientes em 15/03/2023',
  },
  {
    id: 'b2',
    weddingId: 'w2',
    totalAmount: 120000,
    categories: [
      {
        id: 'bc4',
        name: 'Buffet',
        items: [
          {
            id: 'bi7',
            name: 'Jantar completo para 200 convidados',
            amount: 50000,
            supplier: 'Buffet Requinte',
            isPaid: true,
          },
          {
            id: 'bi8',
            name: 'Bar e bebidas',
            amount: 15000,
            supplier: 'Vinhos & Spirits',
            isPaid: false,
          },
        ],
      },
      {
        id: 'bc5',
        name: 'Decoração',
        items: [
          {
            id: 'bi9',
            name: 'Decoração completa',
            amount: 25000,
            supplier: 'Decor Festas',
            isPaid: true,
          },
        ],
      },
      {
        id: 'bc6',
        name: 'Entretenimento',
        items: [
          {
            id: 'bi10',
            name: 'Banda ao vivo',
            amount: 15000,
            supplier: 'Banda Celebration',
            isPaid: false,
          },
          {
            id: 'bi11',
            name: 'DJ para pós-festa',
            amount: 5000,
            supplier: 'DJ Marcos Silva',
            isPaid: false,
          },
        ],
      },
      {
        id: 'bc7',
        name: 'Outros Serviços',
        items: [
          {
            id: 'bi12',
            name: 'Convites personalizados',
            amount: 3000,
            supplier: 'Gráfica Elegante',
            isPaid: true,
          },
          {
            id: 'bi13',
            name: 'Lembrancinhas',
            amount: 7000,
            supplier: 'Ateliê Mimos',
            isPaid: false,
          },
        ],
      },
    ],
  },
];

export const contracts: Contract[] = [
  {
    id: 'c1',
    weddingId: 'w1',
    title: 'Contrato de Buffet',
    type: 'supplier',
    supplierName: 'Buffet Gourmet',
    category: 'Buffet',
    signedAt: subDays(today, 60),
    expiresAt: addDays(today, 65),
    value: 45000,
    status: 'active',
  },
  {
    id: 'c2',
    weddingId: 'w1',
    title: 'Contrato Principal - Clientes',
    type: 'client',
    signedAt: subDays(today, 90),
    expiresAt: addDays(today, 65),
    value: 85000,
    status: 'active',
  },
  {
    id: 'c3',
    weddingId: 'w1',
    title: 'Contrato de Fotografia',
    type: 'supplier',
    supplierName: 'Studio Carlos Fotografias',
    category: 'Fotografia',
    signedAt: subDays(today, 50),
    expiresAt: addDays(today, 65),
    value: 17000,
    status: 'active',
  },
  {
    id: 'c4',
    weddingId: 'w1',
    title: 'Contrato de Decoração',
    type: 'supplier',
    supplierName: 'Floricultura Jardim',
    category: 'Decoração',
    signedAt: subDays(today, 55),
    expiresAt: addDays(today, 65),
    value: 23000,
    status: 'active',
  },
  {
    id: 'c5',
    weddingId: 'w2',
    title: 'Contrato Principal - Clientes',
    type: 'client',
    signedAt: subDays(today, 120),
    expiresAt: addDays(today, 125),
    value: 120000,
    status: 'active',
  },
  {
    id: 'c6',
    weddingId: 'w2',
    title: 'Contrato de Buffet',
    type: 'supplier',
    supplierName: 'Buffet Requinte',
    category: 'Buffet',
    signedAt: subDays(today, 110),
    expiresAt: addDays(today, 130),
    value: 65000,
    status: 'active',
  },
  {
    id: 'c7',
    weddingId: 'w3',
    title: 'Contrato Principal - Clientes',
    type: 'client',
    signedAt: subDays(today, 180),
    expiresAt: subDays(today, 40),
    value: 95000,
    status: 'completed',
  },
];

export const items: Item[] = [
  {
    id: 'i1',
    weddingId: 'w1',
    name: 'Flores para decoração',
    quantity: 20,
    supplier: 'Floricultura Jardim',
    category: 'Decoração',
    status: 'pending',
    notes: 'Arranjos de mesa e arco para cerimônia',
    price: 8000,
  },
  {
    id: 'i2',
    weddingId: 'w1',
    name: 'Cadeiras Tiffany',
    quantity: 150,
    supplier: 'Decor Festas',
    category: 'Mobiliário',
    status: 'acquired',
    price: 3000,
  },
  {
    id: 'i3',
    weddingId: 'w1',
    name: 'Bolos e doces',
    quantity: 1,
    supplier: 'Confeitaria Dolce',
    category: 'Buffet',
    status: 'pending',
    notes: 'Bolo de 3 andares + 400 doces finos',
    price: 5000,
  },
  {
    id: 'i4',
    weddingId: 'w1',
    name: 'Velas decorativas',
    quantity: 80,
    supplier: 'Decor Festas',
    category: 'Decoração',
    status: 'acquired',
    price: 800,
  },
  {
    id: 'i5',
    weddingId: 'w1',
    name: 'Taças de champanhe',
    quantity: 160,
    supplier: 'Buffet Gourmet',
    category: 'Buffet',
    status: 'acquired',
    price: 0,
  },
  {
    id: 'i6',
    weddingId: 'w2',
    name: 'Flores para decoração',
    quantity: 30,
    supplier: 'Decor Festas',
    category: 'Decoração',
    status: 'pending',
    notes: 'Arranjos grandes para o salão',
    price: 12000,
  },
  {
    id: 'i7',
    weddingId: 'w2',
    name: 'Sistema de som',
    quantity: 1,
    supplier: 'Banda Celebration',
    category: 'Entretenimento',
    status: 'pending',
    price: 3000,
  },
];

export const payments: Payment[] = [
  {
    id: 'p1',
    weddingId: 'w1',
    title: 'Sinal do Buffet',
    amount: 15000,
    dueDate: subDays(today, 60),
    paidAt: subDays(today, 58),
    status: 'paid',
    recipient: 'Buffet Gourmet',
    category: 'Buffet',
    method: 'Transferência bancária',
  },
  {
    id: 'p2',
    weddingId: 'w1',
    title: '2ª Parcela do Buffet',
    amount: 15000,
    dueDate: subDays(today, 30),
    paidAt: subDays(today, 32),
    status: 'paid',
    recipient: 'Buffet Gourmet',
    category: 'Buffet',
    method: 'Transferência bancária',
  },
  {
    id: 'p3',
    weddingId: 'w1',
    title: 'Parcela Final do Buffet',
    amount: 15000,
    dueDate: addDays(today, 7),
    status: 'pending',
    recipient: 'Buffet Gourmet',
    category: 'Buffet',
  },
  {
    id: 'p4',
    weddingId: 'w1',
    title: 'Sinal da Fotografia',
    amount: 6000,
    dueDate: subDays(today, 50),
    paidAt: subDays(today, 51),
    status: 'paid',
    recipient: 'Studio Carlos Fotografias',
    category: 'Fotografia',
    method: 'Cartão de crédito',
  },
  {
    id: 'p5',
    weddingId: 'w1',
    title: 'Parcela final da Fotografia',
    amount: 11000,
    dueDate: addDays(today, 30),
    status: 'pending',
    recipient: 'Studio Carlos Fotografias',
    category: 'Fotografia',
  },
  {
    id: 'p6',
    weddingId: 'w1',
    title: 'Decoração',
    amount: 8000,
    dueDate: subDays(today, 55),
    paidAt: subDays(today, 54),
    status: 'paid',
    recipient: 'Floricultura Jardim',
    category: 'Decoração',
    method: 'Transferência bancária',
  },
  {
    id: 'p7',
    weddingId: 'w2',
    title: 'Sinal do Buffet',
    amount: 20000,
    dueDate: subDays(today, 110),
    paidAt: subDays(today, 112),
    status: 'paid',
    recipient: 'Buffet Requinte',
    category: 'Buffet',
    method: 'Transferência bancária',
  },
  {
    id: 'p8',
    weddingId: 'w2',
    title: 'Decoração - 1ª Parcela',
    amount: 12500,
    dueDate: subDays(today, 100),
    paidAt: subDays(today, 98),
    status: 'paid',
    recipient: 'Decor Festas',
    category: 'Decoração',
    method: 'Transferência bancária',
  },
  {
    id: 'p9',
    weddingId: 'w2',
    title: 'Decoração - 2ª Parcela',
    amount: 12500,
    dueDate: addDays(today, 5),
    status: 'pending',
    recipient: 'Decor Festas',
    category: 'Decoração',
  },
  {
    id: 'p10',
    weddingId: 'w2',
    title: 'Banda - Sinal',
    amount: 7500,
    dueDate: addDays(today, 20),
    status: 'pending',
    recipient: 'Banda Celebration',
    category: 'Entretenimento',
  },
  {
    id: 'p11',
    weddingId: 'w2',
    title: 'DJ - Pagamento Integral',
    amount: 5000,
    dueDate: addDays(today, 60),
    status: 'pending',
    recipient: 'DJ Marcos Silva',
    category: 'Entretenimento',
  },
  {
    id: 'p12',
    weddingId: 'w2',
    title: 'Parcela 2 do Buffet',
    amount: 20000,
    dueDate: addDays(today, 15),
    status: 'pending',
    recipient: 'Buffet Requinte',
    category: 'Buffet',
  },
  {
    id: 'p13',
    weddingId: 'w2',
    title: 'Parcela final do Buffet',
    amount: 25000,
    dueDate: addDays(today, 90),
    status: 'pending',
    recipient: 'Buffet Requinte',
    category: 'Buffet',
  },
];

export const events: Event[] = [
  {
    id: 'e1',
    weddingId: 'w1',
    title: 'Reunião com o Buffet',
    start: addDays(today, 5),
    end: addDays(today, 5),
    type: 'meeting',
    location: 'Buffet Gourmet, Av. Paulista 1000',
    description: 'Confirmação do cardápio e detalhes das bebidas',
    attendees: ['Ana', 'Pedro', 'Representante do Buffet'],
  },
  {
    id: 'e2',
    weddingId: 'w1',
    title: 'Pagamento Final do Buffet',
    start: addDays(today, 7),
    end: addDays(today, 7),
    type: 'payment',
    description: 'Transferência bancária de R$15.000',
  },
  {
    id: 'e3',
    weddingId: 'w1',
    title: 'Entrega da Decoração',
    start: addDays(today, 59),
    end: addDays(today, 59),
    type: 'delivery',
    location: 'Buffet Jardim Azul',
    description: 'Montagem dos arranjos florais e decoração geral',
  },
  {
    id: 'e4',
    weddingId: 'w1',
    title: 'Cerimônia e Recepção',
    start: addDays(today, 60),
    end: addDays(today, 60),
    type: 'ceremony',
    location: 'Buffet Jardim Azul, São Paulo',
    description: 'Cerimônia às 17h, recepção às 19h',
  },
  {
    id: 'e5',
    weddingId: 'w2',
    title: 'Prova do Cardápio',
    start: addDays(today, 15),
    end: addDays(today, 15),
    type: 'meeting',
    location: 'Buffet Requinte',
    description: 'Prova final do menu e seleção de vinhos',
    attendees: ['Marina', 'João', 'Chef do Buffet'],
  },
  {
    id: 'e6',
    weddingId: 'w2',
    title: 'Pagamento Decor Festas',
    start: addDays(today, 5),
    end: addDays(today, 5),
    type: 'payment',
    description: '2ª Parcela da decoração - R$12.500',
  },
  {
    id: 'e7',
    weddingId: 'w2',
    title: 'Reunião com a Banda',
    start: addDays(today, 10),
    end: addDays(today, 10),
    type: 'meeting',
    location: 'Estúdio da Banda',
    description: 'Seleção do repertório e alinhamento',
    attendees: ['Marina', 'João', 'Líder da Banda'],
  },
  {
    id: 'e8',
    weddingId: 'w2',
    title: 'Cerimônia e Recepção',
    start: addDays(today, 120),
    end: addDays(today, 120),
    type: 'ceremony',
    location: 'Fazenda Vista Linda, Campinas',
    description: 'Cerimônia às 16h, recepção às 18h',
  },
];

export const getWeddingById = (id: string): Wedding | undefined =>
  weddings.find((wedding) => wedding.id === id);

export const getBudgetByWeddingId = (weddingId: string): Budget | undefined =>
  budgets.find((budget) => budget.weddingId === weddingId);

export const getContractsByWeddingId = (weddingId: string): Contract[] =>
  contracts.filter((contract) => contract.weddingId === weddingId);

export const getItemsByWeddingId = (weddingId: string): Item[] =>
  items.filter((item) => item.weddingId === weddingId);

export const getPaymentsByWeddingId = (weddingId: string): Payment[] =>
  payments.filter((payment) => payment.weddingId === weddingId);

export const getEventsByWeddingId = (weddingId: string): Event[] =>
  events.filter((event) => event.weddingId === weddingId);

export const getDashboardStats = () => {
  const upcomingWeddings = weddings.filter((w) => w.status === 'upcoming').length;
  const totalBudget = weddings.reduce((sum, wedding) => sum + wedding.budget, 0);
  const totalPaid = weddings.reduce((sum, wedding) => sum + wedding.totalPaid, 0);
  const pendingPayments = payments.filter((p) => p.status === 'pending').length;
  const upcomingEvents = events.filter(
    (e) => e.start > today && e.start < addDays(today, 30)
  ).length;

  return {
    upcomingWeddings,
    totalBudget,
    totalPaid,
    pendingPayments,
    upcomingEvents,
  };
};
