import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar } from '@/components/dashboard'
import { Badge } from '@/components/ui'
import { Globe2, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react'
import { SERVERS_DATA } from '@/data'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Rede',
  path: '/dashboard/network',
  noIndex: true,
})

export default function DashboardNetworkPage() {
  return (
    <>
      <DashboardTopbar title="Rede" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ArrowDownToLine className="h-4 w-4 text-secondary-light" aria-hidden="true" />
              Tráfego de entrada (24h)
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">842 GB</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ArrowUpFromLine className="h-4 w-4 text-primary-light" aria-hidden="true" />
              Tráfego de saída (24h)
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">1.4 TB</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-semibold text-foreground">Endereços IP</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background-tertiary text-left text-muted-foreground">
                  <th className="p-4 font-medium">Servidor</th>
                  <th className="p-4 font-medium">IPv4</th>
                  <th className="p-4 font-medium">IPv6</th>
                  <th className="p-4 font-medium">Datacenter</th>
                </tr>
              </thead>
              <tbody>
                {SERVERS_DATA.map((server) => (
                  <tr key={server.id} className="border-b border-border bg-card last:border-0">
                    <td className="p-4 text-foreground">{server.name}</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">{server.ipv4}</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">
                      {server.ipv6 ?? <Badge variant="default">Não atribuído</Badge>}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {server.datacenter}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
