import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { Container, Section, SectionHeading } from '@/components/marketing/section'
import { ScrollStagger } from '@/components/motion/scroll-stagger'
import { STATS } from '@/constants'
import { Server, ShieldCheck, Users, Globe2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Sobre nós',
  description: 'Conheça a Nexus Cloud: infraestrutura VPS de alta performance para empresas que não podem parar.',
  path: '/about',
})

const VALUES = [
  {
    icon: Server,
    title: 'Infraestrutura em primeiro lugar',
    description: 'Investimos em hardware empresarial — AMD EPYC, NVMe SSD e virtualização KVM — porque desempenho não se terceiriza.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiabilidade como padrão',
    description: 'SLA de 99.99% de uptime em contrato, monitoramento 24/7 e proteção Anti-DDoS incluída em todos os planos.',
  },
  {
    icon: Users,
    title: 'Suporte que resolve',
    description: 'Time técnico próprio, sem terceirização — quem responde seu chamado entende de infraestrutura de verdade.',
  },
  {
    icon: Globe2,
    title: 'Presença global, atendimento local',
    description: 'Datacenters distribuídos em múltiplos continentes, com atendimento em português e faturamento em reais.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      <Section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Sobre a Nexus Cloud"
            title="Infraestrutura para quem não pode parar"
            description="Nascemos para resolver um problema simples: hospedagem VPS confiável, com preço transparente e suporte que realmente entende de servidor."
            className="mx-auto max-w-2xl text-center"
          />

          <div className="mt-14 grid grid-cols-2 gap-8 border-y border-border py-10 sm:grid-cols-4">
            {STATS.slice(0, 4).map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                  <span className="text-primary-light">{stat.suffix}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <ScrollStagger className="mt-16 grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="trace-card flex gap-4 border border-border bg-card p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary-light">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </ScrollStagger>
        </Container>
      </Section>
    </div>
  )
}
