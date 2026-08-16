import {
  Globe,
  Zap,
  Database,
  LayoutDashboard,
  Gamepad2,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'
import { USE_CASES_DATA } from '@/data'
import { cn } from '@/lib/utils'
import { ScrollStagger } from '@/components/motion/scroll-stagger'

const ICONS: Record<string, LucideIcon> = {
  Globe,
  Zap,
  Database,
  LayoutDashboard,
  Gamepad2,
  ShoppingCart,
}

const COLOR_MAP: Record<string, string> = {
  blue: 'bg-secondary/10 text-secondary-light',
  purple: 'bg-primary/10 text-primary-light',
  green: 'bg-success/10 text-success-light',
  orange: 'bg-warning/10 text-warning-light',
  pink: 'bg-primary/10 text-primary-light',
  teal: 'bg-success/10 text-success-light',
}

export function UseCasesSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="usecases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="usecases-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Para qualquer carga de trabalho
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            De sites institucionais a infraestrutura de jogos — nossa VPS atende todos os casos.
          </p>
        </div>

        <ScrollStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES_DATA.map((useCase) => {
            const Icon = ICONS[useCase.icon]
            return (
              <div
                key={useCase.id}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-border-hover hover:shadow-card-hover"
              >
                <div className={cn('mb-4 flex h-12 w-12 items-center justify-center rounded-xl', COLOR_MAP[useCase.color])}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {useCase.techs.map((tech) => (
                    <span key={tech} className="rounded-full bg-accent px-2.5 py-1 text-[11px] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </ScrollStagger>
      </div>
    </section>
  )
}
