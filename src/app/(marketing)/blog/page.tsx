import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { Badge } from '@/components/ui'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Artigos técnicos sobre infraestrutura, performance, segurança e boas práticas em cloud computing.',
  path: '/blog',
})

const POSTS = [
  {
    slug: 'amd-epyc-vs-intel-xeon',
    title: 'AMD EPYC vs Intel Xeon: qual escolher para sua VPS em 2026',
    excerpt:
      'Uma análise técnica comparando arquitetura, performance por núcleo e eficiência energética entre as duas plataformas líderes do mercado.',
    category: 'Infraestrutura',
    date: '2026-06-10',
    readTime: '8 min',
  },
  {
    slug: 'guia-completo-anti-ddos',
    title: 'Guia completo: como funciona a proteção Anti-DDoS de 10 Tbps',
    excerpt:
      'Entenda as camadas de mitigação, detecção de anomalias e como nossa infraestrutura responde a ataques em menos de 30 segundos.',
    category: 'Segurança',
    date: '2026-06-02',
    readTime: '12 min',
  },
  {
    slug: 'nvme-ssd-performance-banco-dados',
    title: 'Por que NVMe SSD faz toda diferença em bancos de dados de alta carga',
    excerpt:
      'Benchmarks reais comparando latência e IOPS entre SATA SSD e NVMe SSD em cenários de produção com PostgreSQL.',
    category: 'Performance',
    date: '2026-05-22',
    readTime: '6 min',
  },
  {
    slug: 'escalando-aplicacao-sem-downtime',
    title: 'Como escalar sua aplicação SaaS sem downtime',
    excerpt: 'Estratégias práticas de auto-scaling, balanceamento de carga e migração de recursos em produção.',
    category: 'Cloud',
    date: '2026-05-15',
    readTime: '10 min',
  },
  {
    slug: 'kvm-vs-lxc-vs-openvz',
    title: 'KVM vs LXC vs OpenVZ: entendendo a virtualização da sua VPS',
    excerpt: 'As diferenças técnicas entre os principais tipos de virtualização e por que isso importa para você.',
    category: 'Infraestrutura',
    date: '2026-05-04',
    readTime: '7 min',
  },
  {
    slug: 'servidor-minecraft-fivem-baixa-latencia',
    title: 'Hospedando servidores de jogos com baixíssima latência',
    excerpt: 'Configurações recomendadas para Minecraft, FiveM e Rust em ambientes competitivos.',
    category: 'Gaming',
    date: '2026-04-28',
    readTime: '9 min',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Blog Nexus Cloud
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Artigos técnicos sobre infraestrutura, performance e segurança em cloud computing.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-border-hover hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <Badge variant="primary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.readTime} de leitura</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-snug text-foreground">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{formatDate(post.date)}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
