'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { ensureGsapRegistered, gsap } from '@/lib/gsap'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Revela um bloco (heading, texto, imagem) ao entrar na viewport, via GSAP
 * ScrollTrigger. Anima nos dois sentidos do scroll: entra ao descer,
 * reverte ao subir e sair, e volta a entrar ao descer de novo —
 * `toggleActions: 'play reverse play reverse'`.
 */
export function ScrollReveal({
  children,
  className,
  y = 16,
  delay = 0,
  duration = 1,
}: {
  children: ReactNode
  className?: string
  y?: number
  delay?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    ensureGsapRegistered()
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [y, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
