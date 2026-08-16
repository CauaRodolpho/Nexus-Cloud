'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PricingCard } from '@/components/pricing/pricing-card'
import { ScrollStagger } from '@/components/motion/scroll-stagger'
import { PLANS_DATA } from '@/data'
import { BILLING_CYCLES } from '@/constants'
import type { BillingCycle } from '@/types'
import { cn } from '@/lib/utils'

export function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>('monthly')

  return (
    <section className="py-20 sm:py-28" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Planos para todo tamanho de projeto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Preços transparentes, sem taxas escondidas. Cancele quando quiser.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-background-tertiary p-1" role="tablist" aria-label="Ciclo de cobrança">
            {Object.entries(BILLING_CYCLES).map(([key, value]) => (
              <button
                key={key}
                role="tab"
                aria-selected={cycle === key}
                onClick={() => setCycle(key as BillingCycle)}
                className={cn(
                  'rounded-lg px-5 py-2 text-sm font-medium transition-all',
                  cycle === key
                    ? 'bg-gradient-primary text-white shadow-glow-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {value.label}
                {value.discount > 0 && (
                  <span className="ml-1.5 text-xs text-success-light">-{value.discount}%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <ScrollStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS_DATA.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billingCycle={cycle} />
          ))}
        </ScrollStagger>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Nenhum plano encaixou?{' '}
          <Link href="/pricing#custom-vps-heading" className="trace-link font-medium text-primary">
            Monte sua própria VPS
          </Link>
        </p>
      </div>
    </section>
  )
}
