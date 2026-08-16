'use client'

import { useState, createContext, useContext, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionContextValue {
  openItems: Set<string>
  toggle: (id: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

export function Accordion({
  children,
  allowMultiple = false,
  className,
}: {
  children: ReactNode
  allowMultiple?: boolean
  className?: string
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set<string>(allowMultiple ? prev : [])
      if (prev.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn('flex flex-col gap-3', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('AccordionItem must be used within Accordion')
  const isOpen = ctx.openItems.has(id)

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-border-hover">
      <button
        onClick={() => ctx.toggle(id)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <span className="font-medium text-foreground">{title}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300',
            isOpen && 'rotate-180 text-primary'
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`${id}-content`}
        role="region"
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{children}</p>
        </div>
      </div>
    </div>
  )
}
