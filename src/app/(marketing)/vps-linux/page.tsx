import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { ProductHero, FeaturesGrid, FaqSection } from '@/components/marketing'
import { PricingCard } from '@/components/pricing'
import { PLANS_DATA } from '@/data'
import { OS_OPTIONS } from '@/constants'

export const metadata: Metadata = buildMetadata({
  title: 'VPS Linux — Ubuntu, Debian, CentOS',
  description:
    'VPS Linux com AMD EPYC, NVMe SSD e acesso root completo. Ubuntu, Debian, Rocky Linux, AlmaLinux e mais. A partir de R$29,90/mês.',
  path: '/vps-linux',
})

const linuxPlans = PLANS_DATA.filter((p) => p.osOptions.includes('linux'))

export default function VpsLinuxPage() {
  return (
    <>
      <ProductHero
        badge="VPS Linux"
        title="Servidores Linux com"
        highlight="performance real"
        description="Acesso root total, escolha entre as principais distribuições e implante em minutos com armazenamento NVMe e processadores AMD EPYC."
        primaryCta="Implantar VPS Linux"
        primaryHref="/register"
      />

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">Distribuições disponíveis</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {OS_OPTIONS.linux.map((os) => (
              <span
                key={os}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {os}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Planos VPS Linux
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {linuxPlans.map((plan) => (
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
