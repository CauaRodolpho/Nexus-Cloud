import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar, ServerRow } from '@/components/dashboard'
import { SERVERS_DATA } from '@/data'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Servidores',
  path: '/dashboard/servers',
  noIndex: true,
})

export default function DashboardServersPage() {
  return (
    <>
      <DashboardTopbar title="Servidores" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="flex flex-col gap-3">
          {SERVERS_DATA.map((server) => (
            <ServerRow key={server.id} server={server} />
          ))}
        </div>
      </div>
    </>
  )
}
