import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { ProductHero, FeaturesGrid, FaqSection } from '@/components/marketing'
import { PricingCard } from '@/components/pricing'
import { PLANS_DATA } from '@/data'
import { Layers, GitBranch, Gauge, RefreshCw } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Cloud Hosting Escalável',
  description:
    'Infraestrutura cloud elástica com auto-scaling, balanceamento de carga e alta disponibilidade. Escale recursos sob demanda sem downtime.',
  path: '/cloud-hosting',
})

const cloudHighlights = [
  {
    icon: Layers,
    title: 'Arquitetura Elástica',
    description: 'Recursos sob demanda que se ajustam automaticamente ao tráfego da sua aplicação.',
  },
  {
    icon: GitBranch,
    title: 'Múltiplas Instâncias',
    description: 'Distribua sua carga entre várias instâncias para alta disponibilidade.',
  },
  {
    icon: Gauge,
    title: 'Balanceamento de Carga',
    description: 'Load balancer nativo para distribuir requisições com inteligência.',
  },
  {
    icon: RefreshCw,
    title: 'Auto-scaling',
    description: 'Adicione ou remova recursos automaticamente conforme a demanda varia.',
  },
]

export default function CloudHostingPage() {
  return (
    <>
      <ProductHero
        badge="Cloud Hosting"
        title="Infraestrutura cloud que"
        highlight="escala com você"
        description="Combine a flexibilidade da nuvem com a performance de hardware dedicado. Auto-scaling, balanceamento de carga e alta disponibilidade em um único produto."
        primaryCta="Começar com Cloud Hosting"
        primaryHref="/register"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cloudHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Planos base — escale quando precisar
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Comece com um destes planos e ative auto-scaling a qualquer momento pelo painel.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS_DATA.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <FaqSection />
    </>
  )
}
