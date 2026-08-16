import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar } from '@/components/dashboard'
import { Badge, Button } from '@/components/ui'
import { ShieldAlert, Plus, Trash2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Firewall',
  path: '/dashboard/firewall',
  noIndex: true,
})

const MOCK_RULES = [
  { id: 'rule-1', protocol: 'TCP', port: '22', source: '0.0.0.0/0', action: 'allow', label: 'SSH' },
  { id: 'rule-2', protocol: 'TCP', port: '443', source: '0.0.0.0/0', action: 'allow', label: 'HTTPS' },
  { id: 'rule-3', protocol: 'TCP', port: '80', source: '0.0.0.0/0', action: 'allow', label: 'HTTP' },
  { id: 'rule-4', protocol: 'TCP', port: '3389', source: '187.45.0.0/16', action: 'allow', label: 'RDP (restrito)' },
]

export default function DashboardFirewallPage() {
  return (
    <>
      <DashboardTopbar title="Firewall" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-5 w-5 text-primary-light" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-foreground">Proteção Anti-DDoS</p>
              <p className="text-xs text-muted-foreground">Mitigação automática até 10 Tbps</p>
            </div>
          </div>
          <Badge variant="success" dot>Ativo</Badge>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Regras de firewall</h2>
          <Button size="sm" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
            Nova Regra
          </Button>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-background-tertiary text-left text-muted-foreground">
                <th className="p-4 font-medium">Regra</th>
                <th className="p-4 font-medium">Protocolo</th>
                <th className="p-4 font-medium">Porta</th>
                <th className="p-4 font-medium">Origem</th>
                <th className="p-4 font-medium">Ação</th>
                <th className="p-4 font-medium" />
              </tr>
            </thead>
            <tbody>
              {MOCK_RULES.map((rule) => (
                <tr key={rule.id} className="border-b border-border bg-card last:border-0">
                  <td className="p-4 text-foreground">{rule.label}</td>
                  <td className="p-4 text-muted-foreground">{rule.protocol}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{rule.port}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{rule.source}</td>
                  <td className="p-4">
                    <Badge variant="success">Permitir</Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="xs" leftIcon={<Trash2 className="h-3.5 w-3.5" />}>
                      Remover
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
