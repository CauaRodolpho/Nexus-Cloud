import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { ProductHero, FeaturesGrid, FaqSection } from '@/components/marketing'
import { Button, Badge } from '@/components/ui'
import { Cpu, MemoryStick, HardDrive, Network } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Servidores Dedicados',
  description:
    'Hardware 100% dedicado com AMD EPYC, NVMe SSD em RAID e banda de até 10 Gbps. Performance máxima para cargas de trabalho críticas.',
  path: '/dedicated-servers',
})

const DEDICATED_PLANS = [
  {
    name: 'Dedicated Pro',
    cpu: 'AMD EPYC 7313 — 16 cores / 32 threads',
    ram: '64 GB DDR4 ECC',
    disk: '2x 960 GB NVMe SSD (RAID 1)',
    bandwidth: '1 Gbps dedicado',
    price: 1899.9,
  },
  {
    name: 'Dedicated Enterprise',
    cpu: 'AMD EPYC 7443 — 24 cores / 48 threads',
    ram: '128 GB DDR4 ECC',
    disk: '4x 1.92 TB NVMe SSD (RAID 10)',
    bandwidth: '10 Gbps dedicado',
    price: 3499.9,
    popular: true,
  },
  {
    name: 'Dedicated Titan',
    cpu: 'AMD EPYC 7763 — 64 cores / 128 threads',
    ram: '256 GB DDR4 ECC',
    disk: '8x 1.92 TB NVMe SSD (RAID 10)',
    bandwidth: '10 Gbps dedicado',
    price: 6999.9,
  },
]

export default function DedicatedServersPage() {
  return (
    <>
      <ProductHero
        badge="Servidores Dedicados"
        title="Hardware 100%"
        highlight="dedicado a você"
        description="Sem virtualização, sem compartilhamento de recursos. Performance máxima e isolamento total para cargas de trabalho críticas."
        primaryCta="Falar com Especialista"
        primaryHref="/support"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {DEDICATED_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-7 ${
                  plan.popular ? 'border-primary/40 shadow-glow-primary' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Mais Escolhido
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    R$ {plan.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6 text-sm text-foreground">
                  <li className="flex items-start gap-2.5">
                    <Cpu className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-light" aria-hidden="true" />
                    {plan.cpu}
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MemoryStick className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary-light" aria-hidden="true" />
                    {plan.ram}
                  </li>
                  <li className="flex items-start gap-2.5">
                    <HardDrive className="mt-0.5 h-4 w-4 flex-shrink-0 text-success-light" aria-hidden="true" />
                    {plan.disk}
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Network className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-light" aria-hidden="true" />
                    {plan.bandwidth}
                  </li>
                </ul>
                <Button variant={plan.popular ? 'primary' : 'secondary'} className="mt-7 w-full" asChild>
                  <Link href="/support">Solicitar Proposta</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <FaqSection />
    </>
  )
}
