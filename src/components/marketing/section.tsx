import type { HTMLAttributes, ReactNode } from 'react'
import { ScrollReveal } from '@/components/motion/scroll-reveal'

export function Section({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  )
}

export function Container({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={
        className ??
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
      }
      {...props}
    >
      {children}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  className?: string
}) {
  return (
    <div className={className ?? 'mx-auto max-w-2xl text-center'}>
      <ScrollReveal>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-18 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && <p className="mt-10 text-lg text-muted-foreground">{description}</p>}
      </ScrollReveal>
    </div>
  )
}

