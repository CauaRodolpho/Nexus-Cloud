import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { Container, Section } from '@/components/marketing/section'
import { Badge } from '@/components/ui'
import { DATACENTERS_DATA } from '@/data'

export const metadata: Metadata = buildMetadata({
  title: 'Status da Infraestrutura',
  description: 'Status em tempo real dos datacenters e serviços da Nexus Cloud.',
  path: '/status',
})

const STATUS_META: Record<string, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
  operational: { label: 'Operacional', variant: 'success' },
  degraded: { label: 'Degradado', variant: 'warning' },
  maintenance: { label: 'Manutenção', variant: 'warning' },
  incident: { label: 'Incidente', variant: 'danger' },
}

export default function StatusPage() {
  const allOperational = DATACENTERS_DATA.every((dc) => dc.status === 'operational')

  return (
    <div className="pt-24">
      <Section className="py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="trace-card flex items-center justify-between border border-border bg-card p-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">Status da infraestrutura</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {allOperational
                  ? 'Todos os sistemas operacionais.'
                  : 'Alguns serviços apresentam instabilidade.'}
              </p>
            </div>
            <span className="flex items-center gap-2 font-mono text-sm text-success">
              <span className="relative flex h-2 w-2">
                <span className="signal-pulse absolute h-2 w-2 rounded-full text-success" />
                <span className="relative h-2 w-2 rounded-full bg-success" />
              </span>
              Ativo
            </span>
          </div>

          <div className="mt-8 flex flex-col divide-y divide-border rounded-lg border border-border">
            {DATACENTERS_DATA.map((dc) => {
              const meta = STATUS_META[dc.status]
              return (
                <div key={dc.id} className="flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-lg" aria-hidden="true">{dc.flag}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {dc.city}, {dc.country}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">{dc.name}</p>
                    </div>
                  </div>
                  <Badge variant={meta.variant} dot>
                    {meta.label}
                  </Badge>
                </div>
              )
            })}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Histórico de incidentes dos últimos 90 dias disponível mediante solicitação ao suporte.
          </p>
        </Container>
      </Section>
    </div>
  )
}
