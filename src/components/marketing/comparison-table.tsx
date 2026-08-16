import { cn } from '@/lib/utils'

type Level = 'low' | 'medium' | 'high' | 'max'

const LEVEL_CONFIG: Record<Level, { label: string; dots: number; color: string }> = {
  low: { label: 'Baixo', dots: 1, color: 'bg-muted-foreground' },
  medium: { label: 'Médio', dots: 2, color: 'bg-warning' },
  high: { label: 'Alto', dots: 3, color: 'bg-secondary' },
  max: { label: 'Máximo', dots: 4, color: 'bg-success' },
}

interface ComparisonRow {
  feature: string
  shared: Level
  vps: Level
  cloud: Level
  dedicated: Level
}

const ROWS: ComparisonRow[] = [
  { feature: 'Performance', shared: 'low', vps: 'high', cloud: 'high', dedicated: 'max' },
  { feature: 'Escalabilidade', shared: 'low', vps: 'medium', cloud: 'max', dedicated: 'low' },
  { feature: 'Controle', shared: 'low', vps: 'high', cloud: 'high', dedicated: 'max' },
  { feature: 'Segurança', shared: 'low', vps: 'high', cloud: 'high', dedicated: 'max' },
  { feature: 'Recursos Dedicados', shared: 'low', vps: 'medium', cloud: 'high', dedicated: 'max' },
]

const PLAN_TYPES = [
  { key: 'shared', label: 'Shared Hosting', highlight: false },
  { key: 'vps', label: 'VPS', highlight: true },
  { key: 'cloud', label: 'Cloud', highlight: false },
  { key: 'dedicated', label: 'Dedicated Server', highlight: false },
] as const

function LevelIndicator({ level }: { level: Level }) {
  const config = LEVEL_CONFIG[level]
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            i < config.dots ? config.color : 'bg-accent'
          )}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{config.label}</span>
    </div>
  )
}

export function ComparisonTable() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="comparison-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Qual solução é ideal para você?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare os tipos de hospedagem e escolha o que melhor atende sua aplicação.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-background-tertiary">
                <th scope="col" className="p-4 text-left font-medium text-muted-foreground">
                  Recurso
                </th>
                {PLAN_TYPES.map((type) => (
                  <th
                    key={type.key}
                    scope="col"
                    className={cn(
                      'p-4 text-center font-medium',
                      type.highlight ? 'bg-primary/10 text-primary-light' : 'text-muted-foreground'
                    )}
                  >
                    {type.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, idx) => (
                <tr key={row.feature} className={cn(idx % 2 === 0 ? 'bg-card' : 'bg-card/50')}>
                  <th scope="row" className="p-4 text-left font-medium text-foreground">
                    {row.feature}
                  </th>
                  <td className="p-4"><LevelIndicator level={row.shared} /></td>
                  <td className="bg-primary/5 p-4"><LevelIndicator level={row.vps} /></td>
                  <td className="p-4"><LevelIndicator level={row.cloud} /></td>
                  <td className="p-4"><LevelIndicator level={row.dedicated} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
