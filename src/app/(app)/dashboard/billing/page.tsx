import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar } from '@/components/dashboard'
import { Badge, Button } from '@/components/ui'
import { CreditCard, Download } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Faturamento',
  path: '/dashboard/billing',
  noIndex: true,
})

const MOCK_INVOICES = [
  { id: 'INV-2026-0512', amount: 59.9, status: 'paid' as const, dueDate: '2026-06-01' },
  { id: 'INV-2026-0411', amount: 59.9, status: 'paid' as const, dueDate: '2026-05-01' },
  { id: 'INV-2026-0310', amount: 59.9, status: 'paid' as const, dueDate: '2026-04-01' },
]

const STATUS_VARIANT = {
  paid: 'success',
  pending: 'warning',
  overdue: 'danger',
  cancelled: 'default',
} as const

export default function DashboardBillingPage() {
  return (
    <>
      <DashboardTopbar title="Faturamento" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs text-muted-foreground">Próxima cobrança</p>
            <p className="mt-2 text-2xl font-bold text-foreground">{formatCurrency(59.9)}</p>
            <p className="mt-1 text-xs text-muted-foreground">em 01/07/2026</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs text-muted-foreground">Método de pagamento</p>
            <div className="mt-2 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary-light" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">•••• 4242</span>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs text-muted-foreground">Total gasto (2026)</p>
            <p className="mt-2 text-2xl font-bold text-foreground">{formatCurrency(359.4)}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-semibold text-foreground">Histórico de faturas</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background-tertiary text-left text-muted-foreground">
                  <th className="p-4 font-medium">Fatura</th>
                  <th className="p-4 font-medium">Vencimento</th>
                  <th className="p-4 font-medium">Valor</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium" />
                </tr>
              </thead>
              <tbody>
                {MOCK_INVOICES.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-border bg-card last:border-0">
                    <td className="p-4 font-mono text-xs text-foreground">{invoice.id}</td>
                    <td className="p-4 text-muted-foreground">{formatDate(invoice.dueDate)}</td>
                    <td className="p-4 text-foreground">{formatCurrency(invoice.amount)}</td>
                    <td className="p-4">
                      <Badge variant={STATUS_VARIANT[invoice.status]}>Pago</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="xs" leftIcon={<Download className="h-3.5 w-3.5" />}>
                        PDF
                      </Button>
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
