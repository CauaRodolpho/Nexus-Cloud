import { Shield, ShieldCheck, Eye, HardDrive, Lock, KeyRound, type LucideIcon } from 'lucide-react'
import { SECURITY_FEATURES_DATA } from '@/data'
import { ScrollStagger } from '@/components/motion/scroll-stagger'

const ICONS: Record<string, LucideIcon> = {
  Shield,
  ShieldCheck,
  Eye,
  HardDrive,
  Lock,
  KeyRound,
}

export function SecuritySection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" aria-labelledby="security-heading">
      <div className="pointer-events-none absolute inset-0  opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="security-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Segurança em todas as camadas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Proteção de ponta a ponta para que você foque no seu produto, não em incidentes.
          </p>
        </div>

        <ScrollStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_FEATURES_DATA.map((feature) => {
            const Icon = ICONS[feature.icon]
            return (
              <div key={feature.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </ScrollStagger>
      </div>
    </section>
  )
}
