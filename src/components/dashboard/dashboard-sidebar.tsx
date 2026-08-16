'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Server,
  CreditCard,
  Camera,
  Network,
  ShieldAlert,
  LifeBuoy,
  Settings,
  Cloud,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Visão Geral', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Servidores', href: '/dashboard/servers', icon: Server },
  { label: 'Faturamento', href: '/dashboard/billing', icon: CreditCard },
  { label: 'Backups', href: '/dashboard/backups', icon: Camera },
  { label: 'Rede', href: '/dashboard/network', icon: Network },
  { label: 'Firewall', href: '/dashboard/firewall', icon: ShieldAlert },
  { label: 'Suporte', href: '/dashboard/support', icon: LifeBuoy },
  { label: 'Configurações', href: '/dashboard/settings', icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 flex-shrink-0 flex-col border-r border-border bg-background-secondary lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow-primary">
          <Cloud className="h-4 w-4 text-white" aria-hidden="true" />
        </div>
        <span className="text-sm font-bold text-foreground">
          Nexus<span className="text-primary-light">Cloud</span>
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Navegação do painel">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary-light'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-4">
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sair
        </Link>
      </div>
    </aside>
  )
}
