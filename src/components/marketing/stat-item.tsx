import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function StatItem({
  icon,
  label,
  value,
  className,
}: {
  icon?: ReactNode
  label: string
  value: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 backdrop-blur',
        className
      )}
    >
      {icon && <div className="text-primary-light">{icon}</div>}
      <div className="min-w-0">
        <div className="text-sm font-semibold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

