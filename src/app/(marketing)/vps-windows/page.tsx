import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { ProductHero, FeaturesGrid, FaqSection } from '@/components/marketing'
import { PricingCard } from '@/components/pricing'
import { PLANS_DATA } from '@/data'
import { OS_OPTIONS } from '@/constants'

export const metadata: Metadata = buildMetadata({
  title: 'VPS Windows Server',
  description:
    'VPS Windows Server 2019 e 2022 com licença incluída, AMD EPYC e NVMe SSD. Acesso RDP completo. A partir de R$59,90/mês.',
  path: '/vps-windows',
})

const windowsPlans = PLANS_DATA.filter((p) => p.osOptions.includes('windows'))

export default function VpsWindowsPage() {
  return (
    <>
      <ProductHero
        badge="VPS Windows"
        title="Windows Server com"
        highlight="licença incluída"
        description="Acesso RDP completo, Windows Server 2019 ou 2022 com licença já inclusa no preço. Ideal para .NET, SQL Server e aplicações corporativas."
        primaryCta="Implantar VPS Windows"
        primaryHref="/register"
      />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">Versões disponíveis</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {OS_OPTIONS.windows.map((os) => (
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
            Planos VPS Windows
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {windowsPlans.map((plan) => (
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
