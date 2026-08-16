import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar } from '@/components/dashboard'
import { Badge, Button } from '@/components/ui'
import { Camera, RotateCcw, Trash2, Plus } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Backups',
  path: '/dashboard/backups',
  noIndex: true,
})

const MOCK_SNAPSHOTS = [
  { id: 'snap-1', name: 'nexus-prod-01 — pré-deploy', server: 'nexus-prod-01', size: '12.4 GB', date: '2026-06-14' },
  { id: 'snap-2', name: 'nexus-staging — backup semanal', server: 'nexus-staging', size: '4.1 GB', date: '2026-06-09' },
  { id: 'snap-3', name: 'nexus-db-replica — antes da migração', server: 'nexus-db-replica', size: '28.7 GB', date: '2026-06-02' },
]

export default function DashboardBackupsPage() {
  return (
    <>
      <DashboardTopbar title="Backups & Snapshots" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <Camera className="h-5 w-5 text-primary-light" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-foreground">Backups automáticos</p>
              <p className="text-xs text-muted-foreground">Executados diariamente às 03:00</p>
            </div>
          </div>
          <Badge variant="success" dot>Ativo</Badge>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Snapshots</h2>
          <Button size="sm" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
            Criar Snapshot
          </Button>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {MOCK_SNAPSHOTS.map((snap) => (
            <div key={snap.id} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{snap.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {snap.server} · {snap.size} · {formatDate(snap.date)}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="xs" leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>
                  Restaurar
                </Button>
                <Button variant="ghost" size="xs" leftIcon={<Trash2 className="h-3.5 w-3.5" />}>
                  Excluir
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
