export interface CaseStudy {
  slug: string;
  id: string;
  title: string;
  category: string;
  blurb: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  stack: string[];
  accent: string;
}

export interface ServiceItem {
  title: string;
  label: string;
  copy: string;
  bullets: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'atlas-ops',
    id: '01',
    title: 'Atlas Ops',
    category: 'cloud / orchestration',
    blurb: 'Painel operacional com visualização de filas, estado de jobs e incident response guiado por sinais.',
    summary: 'Uma operação distribuída precisava reduzir o tempo entre alerta, diagnóstico e ação. O produto virou um cockpit vivo para engenharia e SRE.',
    challenge: 'Times operavam entre dashboards fragmentados, queries manuais e contexto quebrado. O custo era latência mental e resposta lenta.',
    solution: 'Desenhamos uma camada visual unificada com fluxos em tempo real, estados legíveis, motion sem ruído e mecanismos de priorização operacional.',
    impact: ['-41% em tempo de triagem', 'Observabilidade contextual', 'UX para incidentes críticos'],
    stack: ['Angular', 'WebSockets', 'Node', 'Kubernetes', 'Grafana APIs'],
    accent: '#95a8bf'
  },
  {
    slug: 'nova-ledger',
    id: '02',
    title: 'Nova Ledger',
    category: 'fintech / trust systems',
    blurb: 'Ambiente transacional com camadas de auditoria, antifraude e tomada de decisão em baixa latência.',
    summary: 'Uma fintech precisava transformar um backoffice burocrático num sistema confiável e rápido para operações de risco.',
    challenge: 'A operação tinha muitos estados escondidos, pouca rastreabilidade e fricção para analistas.',
    solution: 'Criamos uma arquitetura de interface orientada a eventos com trilhas de auditoria nativas, visualização temporal e componentes de decisão.',
    impact: ['Trails de auditoria nativos', 'Decisão mais rápida', 'Menos ambiguidade operacional'],
    stack: ['Angular', 'NestJS', 'PostgreSQL', 'Kafka', 'Redis'],
    accent: '#b9a89d'
  },
  {
    slug: 'forge-ai',
    id: '03',
    title: 'Forge AI',
    category: 'ai / knowledge systems',
    blurb: 'Workspace para copilots e pipelines de inferência com arquitetura centrada em memória, métricas e feedback loops.',
    summary: 'O objetivo era sair de demos mágicas e virar uma plataforma confiável de IA aplicada ao trabalho real.',
    challenge: 'Prompts soltos, pouca governança e baixa observabilidade. O cenário pedia previsibilidade, controle e melhor visibilidade operacional.',
    solution: 'Projetamos um workspace de IA com pipelines auditáveis, memória contextual, avaliação humana e superfícies de feedback.',
    impact: ['Copilots observáveis', 'Governança aplicada', 'RAG com contexto verificável'],
    stack: ['Angular', 'Python', 'Vector DB', 'OpenTelemetry', 'Docker'],
    accent: '#9cb1ab'
  },
  {
    slug: 'pulse-fabric',
    id: '04',
    title: 'Pulse Fabric',
    category: 'industry / machine data',
    blurb: 'Camada visual para telemetria industrial e manutenção preditiva com leitura imediata de status crítico.',
    summary: 'Uma operação industrial precisava traduzir telemetria bruta em decisão útil para quem vive na ponta.',
    challenge: 'Os dados existiam, mas a leitura era opaca. A interface anterior tratava tudo como tabela, o que dificultava interpretação rápida e tomada de decisão.',
    solution: 'Criamos um digital twin visual com alarmes graduais, contexto por ativo e narrativa de manutenção preditiva.',
    impact: ['Leitura situacional imediata', 'Menos overload visual', 'Tomada de decisão mais confiável'],
    stack: ['Angular', 'Three.js', 'MQTT', 'Timeseries DB', 'Edge Workers'],
    accent: '#b8b3aa'
  }
];

export const services: ServiceItem[] = [
  {
    title: 'Product Systems',
    label: 'strategy + ux + engineering',
    copy: 'Definimos a forma do produto antes que o backlog vire religião. Descoberta, arquitetura, prototipação e implementação com a mesma língua.',
    bullets: ['Discovery orientado a sinais', 'Arquitetura de fluxos e estados', 'Interfaces de alta fidelidade']
  },
  {
    title: 'Frontend Architecture',
    label: 'angular at scale',
    copy: 'Times que precisam de Angular sério, componentização disciplinada, motion controlado e performance percebida sem malabarismo de circo.',
    bullets: ['Standalone components', 'Design systems escaláveis', 'DX e manutenção limpa']
  },
  {
    title: 'AI & Data Products',
    label: 'from hype to tooling',
    copy: 'Copilots, RAG, painéis analíticos e ferramentas internas que tratam IA como infraestrutura de produto, não como fogos de artifício.',
    bullets: ['Pipelines auditáveis', 'Observabilidade', 'Experiências explicáveis']
  },
  {
    title: 'Operational Platforms',
    label: 'internal tools that hit hard',
    copy: 'Plataformas para operação, logística, risco, indústria e backoffices complexos que exigem clareza operacional e resposta rápida.',
    bullets: ['Realtime UX', 'Decision support interfaces', 'Critical workflows']
  }
];
