'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { ensureGsapRegistered, gsap } from '@/lib/gsap'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Anima os filhos diretos de um grid/lista em sequência (stagger) ao
 * entrar na viewport — usado nos grids de cards (features, planos,
 * casos de uso, segurança, depoimentos). Mesmo comportamento
 * bidirecional do ScrollReveal: reverte ao subir a página.
 */
export function ScrollStagger({
  children,
  className,
  stagger = 0.06,
  y = 18,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    ensureGsapRegistered()
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(el.children),
        { opacity: 0, y, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [stagger, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
