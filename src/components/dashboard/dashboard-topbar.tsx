'use client'

import { Bell, Search, Plus } from 'lucide-react'
import { Button } from '@/components/ui'
import { ThemeToggle } from '@/components/shared/theme-toggle'

export function DashboardTopbar({ title }: { title: string }) {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-border bg-background px-4 sm:px-6">
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            placeholder="Buscar servidores..."
            aria-label="Buscar servidores"
            className="h-9 w-56 rounded-lg border border-border bg-background-tertiary pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
          aria-label="Notificações"
        >
          <Bell className="h-4 w-4" aria-hidden="true" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
        </button>
        <ThemeToggle />
        <Button size="sm" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
          Nova VPS
        </Button>
      </div>
    </header>
  )
}
