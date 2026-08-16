import Link from 'next/link'
import { Check, X, Cpu, MemoryStick, HardDrive, Gauge } from 'lucide-react'
import { Button, Badge } from '@/components/ui'
import { formatCurrency } from '@/lib/utils'
import type { PlanDTO, BillingCycle } from '@/types'
import { cn } from '@/lib/utils'

export interface PricingCardProps {
  plan: PlanDTO
  billingCycle?: BillingCycle
  className?: string
}

export function PricingCard({ plan, billingCycle = 'monthly', className }: PricingCardProps) {
  const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card p-7 transition-all duration-500 ease-out hover:-translate-y-0.5',
        plan.popular
          ? 'border-primary/40 shadow-glow-primary'
          : 'border-border hover:border-border-hover hover:shadow-card-hover',
        className
      )}
    >
      {plan.popular && (
        <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
          Mais Popular
        </Badge>
      )}

      <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-foreground">{formatCurrency(price)}</span>
        <span className="text-sm text-muted-foreground">/mês</span>
      </div>
      {billingCycle === 'yearly' && (
        <span className="mt-1 text-xs text-success-light">Economize 20% no plano anual</span>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-primary-light" aria-hidden="true" />
          {plan.vcpu} vCPU
        </div>
        <div className="flex items-center gap-2">
          <MemoryStick className="h-4 w-4 text-secondary-light" aria-hidden="true" />
          {plan.ram} GB RAM
        </div>
        <div className="flex items-center gap-2">
          <HardDrive className="h-4 w-4 text-success-light" aria-hidden="true" />
          {plan.disk} GB NVMe
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-primary-light" aria-hidden="true" />
          {plan.bandwidth} TB Transfer
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2.5 text-sm">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" aria-hidden="true" />
            ) : (
              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
            )}
            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.popular ? 'primary' : 'secondary'}
        className="mt-7 w-full"
        asChild
      >
        <Link href={`/register?plan=${plan.id}`}>Implantar {plan.name}</Link>
      </Button>
    </div>
  )
}
