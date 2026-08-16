import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accent?: 'primary' | 'secondary' | 'success'
  className?: string
}

const accentStyles = {
  primary: 'bg-primary/10 text-primary-light group-hover:shadow-glow-primary',
  secondary: 'bg-secondary/10 text-secondary-light group-hover:shadow-glow-secondary',
  success: 'bg-success/10 text-success-light group-hover:shadow-glow-success',
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = 'primary',
  className,
}: FeatureCardProps) {
  return (
    <div
        className={cn(
        'trace-card group relative border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-border-hover hover:shadow-card-hover',
        className
      )}
    >
      <div
        className={cn(
          'mb-4 flex h-12 w-12 items-center justify-center rounded-md transition-shadow duration-300',
          accentStyles[accent]
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
