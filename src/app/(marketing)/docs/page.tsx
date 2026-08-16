import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { BookOpen, Terminal, Code2, Network, ShieldAlert, Camera, type LucideIcon } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Documentação',
  description: 'Guias técnicos para configurar, gerenciar e otimizar sua VPS Nexus Cloud.',
  path: '/docs',
})

interface DocSection {
  icon: LucideIcon
  title: string
  description: string
  articles: string[]
}

const DOC_SECTIONS: DocSection[] = [
  {
    icon: Terminal,
    title: 'Primeiros Passos',
    description: 'Configure sua VPS do zero em poucos minutos.',
    articles: [
      'Criando sua primeira VPS',
      'Conectando via SSH',
      'Configurando seu domínio',
      'Instalando um painel de controle',
    ],
  },
  {
    icon: Code2,
    title: 'API Reference',
    description: 'Integre a Nexus Cloud com suas próprias ferramentas.',
    articles: [
      'Autenticação da API',
      'Gerenciando servidores via API',
      'Webhooks de eventos',
      'Rate limits e boas práticas',
    ],
  },
  {
    icon: Network,
    title: 'Rede & DNS',
    description: 'Configure IPs, DNS e balanceamento de carga.',
    articles: [
      'Configurando registros DNS',
      'IPv4 vs IPv6: quando usar cada um',
      'Configurando um Load Balancer',
      'VPN entre servidores',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Segurança',
    description: 'Proteja sua infraestrutura com boas práticas.',
    articles: [
      'Configurando firewall (UFW/iptables)',
      'Habilitando autenticação 2FA',
      'Hardening de servidores Linux',
      'Monitoramento de logs de acesso',
    ],
  },
  {
    icon: Camera,
    title: 'Backups & Snapshots',
    description: 'Nunca perca dados importantes.',
    articles: [
      'Criando snapshots manuais',
      'Agendando backups automáticos',
      'Restaurando um snapshot',
      'Exportando backups para storage externo',
    ],
  },
  {
    icon: BookOpen,
    title: 'Tutoriais',
    description: 'Guias passo a passo para stacks populares.',
    articles: [
      'Deploy de uma aplicação Next.js',
      'Configurando WordPress com Nginx',
      'PostgreSQL em produção',
      'Docker e Docker Compose na VPS',
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Documentação
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tudo o que você precisa para configurar, gerenciar e otimizar sua infraestrutura.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOC_SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                <section.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-foreground">{section.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {section.articles.map((article) => (
                  <li key={article}>
                    <a href="#" className="text-sm text-foreground hover:text-primary-light hover:underline">
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
