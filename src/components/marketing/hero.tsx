import Link from 'next/link'
import { ArrowRight, Cpu, Database, Shield, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui'
import { HeroMotion } from './hero-motion'
import { Container, Section, SectionHeading } from './section'
import { InfraFlow } from './infra-flow'

export function Hero() {
  return (
    <Section
      className="relative flex min-h-dvh items-center overflow-hidden py-32"
      aria-labelledby="hero-heading"
    >
      {/* Grade técnica sutil de fundo — referência a blueprint, não decoração */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <HeroMotion>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background-tertiary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="signal-pulse absolute h-1.5 w-1.5 rounded-full text-success" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Todos os sistemas operacionais
            </span>

            <SectionHeading
              title={
                <>
                  Hospedagem VPS de <span className="text-primary">alta performance</span>
                </>
              }
              description={
                <>
                  Servidores AMD EPYC, armazenamento NVMe SSD, virtualização KVM e proteção Anti-DDoS.
                  Implante em minutos, escale sem limites.
                </>
              }
              className="w-full"
            />

            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="primary" rightIcon={<ArrowRight className="h-5 w-5" />} asChild>
                <Link href="/register">Começar Agora</Link>
              </Button>
              <Button size="lg" variant="secondary" leftIcon={<PlayCircle className="h-5 w-5" />} asChild>
                <Link href="/pricing">Ver Planos</Link>
              </Button>
            </div>

            {/* Diagrama interativo: o caminho da sua infraestrutura */}
            <div className="mt-16 w-full">
              <InfraFlow />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2 rounded-full border border-border bg-background-tertiary/60 px-3 py-1.5">
                <Cpu className="h-3.5 w-3.5 text-primary-light" aria-hidden="true" />
                AMD EPYC
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-background-tertiary/60 px-3 py-1.5">
                <Database className="h-3.5 w-3.5 text-secondary-light" aria-hidden="true" />
                NVMe SSD
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-background-tertiary/60 px-3 py-1.5">
                <Shield className="h-3.5 w-3.5 text-success-light" aria-hidden="true" />
                KVM Virtualization
              </div>
            </div>
          </HeroMotion>
        </div>
      </Container>
    </Section>
  )
}
