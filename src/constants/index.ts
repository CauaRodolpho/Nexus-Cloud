// ============================================================
// NEXUS CLOUD — Application Constants
// ============================================================

export const SITE_CONFIG = {
  name: 'Nexus Cloud',
  tagline: 'Infrastructure for the modern web',
  description:
    'Hospedagem VPS de alta performance com AMD EPYC, NVMe SSD, virtualização KVM e proteção Anti-DDoS. Servidores globais com alto desempenho.',

  url: 'https://nexuscloud.com.br',
  ogImage: '/og-image.jpg',
  twitter: '@nexuscloud',
  email: 'contato@nexuscloud.com.br',
  supportEmail: 'suporte@nexuscloud.com.br',
  phone: '+55 11 4000-0000',
  cnpj: '00.000.000/0001-00',
} as const

export interface NavChildLink {
  label: string
  href: string
  badge?: string
}

export interface NavLinkItem {
  label: string
  href: string
  children?: readonly NavChildLink[]
}

export const NAV_LINKS: readonly NavLinkItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Produtos',
    href: '#',
    children: [
      { label: 'VPS Linux', href: '/vps-linux', badge: 'Popular' },
      { label: 'VPS Windows', href: '/vps-windows' },
      { label: 'Cloud Hosting', href: '/cloud-hosting' },
      { label: 'Servidores Dedicados', href: '/dedicated-servers' },
    ],
  },

  {
    label: 'Preços',
    href: '/pricing',
  },
  {
    label: 'Suporte',
    href: '/support',
  },
]

export const FOOTER_LINKS = {
  empresa: [
    { label: 'Sobre nós', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/support' },
  ],
  produtos: [
    { label: 'VPS Linux', href: '/vps-linux' },
    { label: 'VPS Windows', href: '/vps-windows' },
    { label: 'Cloud Hosting', href: '/cloud-hosting' },
    { label: 'Servidores Dedicados', href: '/dedicated-servers' },
    { label: 'Preços', href: '/pricing' },
  ],
  suporte: [
    { label: 'Central de Ajuda', href: '/support' },
    { label: 'Documentação', href: '/docs' },
    { label: 'Status da Rede', href: '/status' },
  ],
  legal: [
    { label: 'Termos de Uso', href: '/terms' },
    { label: 'Privacidade', href: '/privacy' },
    { label: 'SLA', href: '/sla' },
  ],
} as const

export const STATS = [
  { value: '99.99', suffix: '%', label: 'Uptime SLA', description: 'Garantido em contrato' },
  { value: '50', suffix: 'K+', label: 'Clientes', description: 'Em 40+ países' },

  { value: '10', suffix: ' Tbps', label: 'Anti-DDoS', description: 'Proteção máxima' },
  { value: '500', suffix: 'K+', label: 'VPS Implantadas', description: 'Desde 2019' },
  { value: '24', suffix: '/7', label: 'Suporte', description: 'Humano, sempre' },
] as const

export const REGIONS = {
  'south-america': 'América do Sul',
  'north-america': 'América do Norte',
  europe: 'Europa',
  asia: 'Ásia',
  oceania: 'Oceania',
  'middle-east': 'Oriente Médio',
} as const

export const BILLING_CYCLES = {
  monthly: { label: 'Mensal', discount: 0 },
  yearly: { label: 'Anual', discount: 20 },
} as const

export const OS_OPTIONS = {
  linux: [
    'Ubuntu 24.04 LTS',
    'Ubuntu 22.04 LTS',
    'Debian 12',
    'Debian 11',
    'CentOS Stream 9',
    'Rocky Linux 9',
    'AlmaLinux 9',
    'Fedora 40',
    'Arch Linux',
  ],
  windows: ['Windows Server 2022', 'Windows Server 2019'],
} as const

export const STATUS_LABELS = {
  running: { label: 'Online', color: 'success' },
  stopped: { label: 'Parado', color: 'danger' },
  rebooting: { label: 'Reiniciando', color: 'warning' },
  provisioning: { label: 'Provisionando', color: 'info' },
  error: { label: 'Erro', color: 'danger' },
} as const

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.nexuscloud.com.br/v1'
export const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL ?? 'https://cdn.nexuscloud.com.br'
