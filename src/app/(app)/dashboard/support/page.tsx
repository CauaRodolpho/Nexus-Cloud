import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar } from '@/components/dashboard'
import { Badge, Button } from '@/components/ui'
import { Plus } from 'lucide-react'
import { formatRelativeTime } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Suporte',
  path: '/dashboard/support',
  noIndex: true,
})

const MOCK_TICKETS = [
  { id: 'TKT-1042', subject: 'Dúvida sobre upgrade de plano', status: 'open' as const, updatedAt: '2026-06-15T14:00:00Z' },
  { id: 'TKT-1038', subject: 'Latência elevada no datacenter de Miami', status: 'in-progress' as const, updatedAt: '2026-06-14T09:30:00Z' },
  { id: 'TKT-1021', subject: 'Configuração de firewall para RDP', status: 'resolved' as const, updatedAt: '2026-06-10T11:15:00Z' },
]

const STATUS_CONFIG = {
  open: { label: 'Aberto', variant: 'info' as const },
  'in-progress': { label: 'Em andamento', variant: 'warning' as const },
  resolved: { label: 'Resolvido', variant: 'success' as const },
  closed: { label: 'Encerrado', variant: 'default' as const },
}

export default function DashboardSupportPage() {
  return (
    <>
      <DashboardTopbar title="Suporte" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Seus tickets</h2>
          <Button size="sm" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
            Abrir Ticket
          </Button>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {MOCK_TICKETS.map((ticket) => {
            const status = STATUS_CONFIG[ticket.status]
            return (
              <div key={ticket.id} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{ticket.subject}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {ticket.id} · Atualizado {formatRelativeTime(ticket.updatedAt)}
                  </p>
                </div>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
