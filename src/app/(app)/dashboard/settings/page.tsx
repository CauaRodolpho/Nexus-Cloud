import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { DashboardTopbar } from '@/components/dashboard'
import { Input, Button, Badge } from '@/components/ui'
import { ShieldCheck, User, Mail } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Painel — Configurações',
  path: '/dashboard/settings',
  noIndex: true,
})

export default function DashboardSettingsPage() {
  return (
    <>
      <DashboardTopbar title="Configurações" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Informações da conta</h2>
            <div className="mt-5 flex flex-col gap-4">
              <Input
                label="Nome completo"
                defaultValue="João da Silva"
                leftIcon={<User className="h-4 w-4" />}
              />
              <Input
                label="Email"
                type="email"
                defaultValue="joao@empresa.com"
                leftIcon={<Mail className="h-4 w-4" />}
              />
            </div>
            <Button variant="primary" size="sm" className="mt-5">
              Salvar alterações
            </Button>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary-light" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-foreground">Autenticação em duas etapas</h2>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Proteja sua conta com TOTP (Google Authenticator, Authy)
                  </p>
                </div>
              </div>
              <Badge variant="warning">Inativo</Badge>
            </div>
            <Button variant="secondary" size="sm" className="mt-5">
              Ativar 2FA
            </Button>
          </div>

          <div className="mt-6 rounded-2xl border border-danger/20 bg-card p-6">
            <h2 className="text-sm font-semibold text-danger">Zona de risco</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Excluir sua conta é permanente e remove todos os servidores associados.
            </p>
            <Button variant="danger" size="sm" className="mt-4">
              Excluir conta
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
