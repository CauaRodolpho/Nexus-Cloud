'use client'

import { useRef, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { User, Wifi, Server, HardDrive, AppWindow } from 'lucide-react'
import { cn } from '@/lib/utils'

const NODES: { label: string; icon: ReactNode; highlight?: boolean }[] = [
  { label: 'Usuário', icon: <User className="h-4 w-4" aria-hidden="true" /> },
  { label: 'Rede', icon: <Wifi className="h-4 w-4" aria-hidden="true" /> },
  { label: 'Infraestrutura', icon: <Server className="h-4 w-4" aria-hidden="true" /> },
  { label: 'VPS', icon: <HardDrive className="h-4 w-4" aria-hidden="true" />, highlight: true },
  { label: 'Aplicação', icon: <AppWindow className="h-4 w-4" aria-hidden="true" /> },
]

/**
 * Diagrama interativo do Hero — representa o caminho
 * Usuário → Rede → Infraestrutura → VPS → Aplicação.
 * Reage à posição do cursor: o nó mais próximo acende e as
 * trilhas conectadas a ele ganham destaque, como um esquema
 * de circuito sendo percorrido em tempo real.
 */
export function InfraFlow() {
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const ratio = (e.clientX - rect.left) / rect.width
    const index = Math.min(NODES.length - 1, Math.max(0, Math.round(ratio * (NODES.length - 1))))
    setActiveIndex(index)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveIndex(null)}
      className="relative mx-auto flex w-full max-w-3xl items-start justify-between px-2"
      role="img"
      aria-label="Fluxo de infraestrutura: Usuário, Rede, Infraestrutura, VPS e Aplicação conectados"
    >
      {NODES.map((node, i) => {
        const isActive = activeIndex === i
        const isAdjacentToActive = activeIndex !== null && Math.abs(activeIndex - i) === 1

        return (
          <div key={node.label} className="relative flex flex-1 items-start last:flex-none">
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : 0.5 + i * 0.12, ease: 'easeOut' }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-md border transition-all duration-500 ease-out',
                  node.highlight
                    ? 'border-primary/60 bg-primary/10 text-primary-light'
                    : 'border-border bg-background-tertiary text-muted-foreground',
                  isActive && 'scale-105 border-primary text-primary shadow-glow-primary'
                )}
              >
                {node.icon}
              </div>
              <span
                className={cn(
                  'font-mono text-[11px] uppercase tracking-wide transition-colors duration-500',
                  isActive ? 'text-primary-light' : 'text-muted-foreground'
                )}
              >
                {node.label}
              </span>
            </motion.div>

            {i < NODES.length - 1 && (
              <div className="relative top-[22px] mx-1 h-px flex-1 overflow-visible bg-border">
                <motion.div
                  initial={reduced ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: reduced ? 0 : 0.62 + i * 0.12, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left' }}
                  className={cn(
                    'absolute inset-0 h-px transition-colors duration-500',
                    isAdjacentToActive || isActive ? 'bg-primary' : 'bg-border'
                  )}
                />
                {!reduced && (
                  <motion.div
                    className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary"
                    animate={{ left: ['0%', '100%'], opacity: [0, 0.8, 0.8, 0] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.6,
                    }}
                  />
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
