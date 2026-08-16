import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button, Badge } from '@/components/ui'

export interface ProductHeroProps {
  badge: string
  title: string
  highlight: string
  description: string
  primaryCta: string
  primaryHref: string
}

export function ProductHero({
  badge,
  title,
  highlight,
  description,
  primaryCta,
  primaryHref,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Badge variant="primary" dot className="mb-6">
          {badge}
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">{highlight}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" variant="primary" rightIcon={<ArrowRight className="h-5 w-5" />} asChild>
            <Link href={primaryHref}>{primaryCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
