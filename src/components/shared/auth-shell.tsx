import Link from 'next/link'
import { ShieldCheck, Zap, Globe2 } from 'lucide-react'
import { BrandMark } from './brand-mark'
import { InteractiveServerPanel } from './interactive-server-panel'

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: 'Anti-DDoS 10 Tbps incluído' },
  { icon: Zap, label: 'Deploy em menos de 60 segundos' },
  { icon: Globe2, label: '30+ datacenters globais' },
]

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Form side */}
      <div className="flex items-center justify-center px-4 py-24 sm:px-6 lg:px-12">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2">
            <BrandMark />
            <span className="text-lg font-bold text-foreground">
              Nexus<span className="text-primary-light">Cloud</span>
            </span>
          </Link>

          <h1 className="mt-8 text-2xl font-bold text-foreground">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

          <div className="mt-8">{children}</div>
        </div>
      </div>

      {/* Visual side */}
      <div className="relative hidden overflow-hidden bg-background-secondary lg:block">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        <div className="relative flex h-full flex-col items-center justify-center px-12">
          <InteractiveServerPanel />

          <ul className="mt-10 flex flex-col gap-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-light">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
