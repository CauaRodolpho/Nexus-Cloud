import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar, DashboardWidget, ServerRow } from '@/components/dashboard'
import { Cpu, MemoryStick, Activity, Server as ServerIcon } from 'lucide-react'
import { SERVERS_DATA } from '@/data'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Visão Geral',
  path: '/dashboard',
  noIndex: true,
})

export default function DashboardPage() {
  const runningCount = SERVERS_DATA.filter((s) => s.status === 'running').length

  return (
    <>
      <DashboardTopbar title="Visão Geral" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ServerIcon className="h-4 w-4" aria-hidden="true" />
              Servidores Ativos
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {runningCount}/{SERVERS_DATA.length}
            </p>
          </div>
          <DashboardWidget icon={Cpu} label="CPU Médio" value="34%" progress={34} variant="primary" className="rounded-2xl bg-card p-5" />
          <DashboardWidget icon={MemoryStick} label="RAM Médio" value="58%" progress={58} variant="success" className="rounded-2xl bg-card p-5" />
          <DashboardWidget icon={Activity} label="Tráfego Total" value="1.2 TB" className="rounded-2xl bg-card p-5" />
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-semibold text-foreground">Seus servidores</h2>
          <div className="mt-4 flex flex-col gap-3">
            {SERVERS_DATA.map((server) => (
              <ServerRow key={server.id} server={server} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
