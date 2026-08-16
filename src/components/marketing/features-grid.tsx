import {
  Zap,
  Cpu,
  Shield,
  Network,
  Camera,
  TrendingUp,
  Rocket,
  Lock,
} from 'lucide-react'
import { FeatureCard } from './feature-card'
import { ScrollStagger } from '@/components/motion/scroll-stagger'

const FEATURES = [
  {
    icon: Zap,
    title: 'NVMe SSD',
    description: 'Armazenamento NVMe de alta velocidade para máxima performance de leitura e escrita.',
    accent: 'primary' as const,
  },
  {
    icon: Cpu,
    title: 'AMD EPYC',
    description: 'Processadores empresariais utilizados pelos maiores datacenters do mundo.',
    accent: 'secondary' as const,
  },
  {
    icon: Lock,
    title: 'KVM Virtualization',
    description: 'Isolamento completo de recursos e acesso root total ao seu servidor.',
    accent: 'success' as const,
  },
  {
    icon: Rocket,
    title: 'Deploy Instantâneo',
    description: 'Criação automática de VPS em poucos minutos, sem espera ou burocracia.',
    accent: 'primary' as const,
  },
  {
    icon: Shield,
    title: 'Anti-DDoS',
    description: 'Proteção avançada contra ataques volumétricos e de aplicação, incluída em todos os planos.',
    accent: 'secondary' as const,
  },
  {
    icon: Network,
    title: 'IPv4 e IPv6',
    description: 'Conectividade global moderna com suporte nativo a ambos os protocolos.',
    accent: 'success' as const,
  },
  {
    icon: Camera,
    title: 'Snapshots',
    description: 'Backups instantâneos e restauração rápida sempre que precisar.',
    accent: 'primary' as const,
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade',
    description: 'Aumente CPU, RAM e disco sem downtime, conforme sua aplicação cresce.',
    accent: 'secondary' as const,
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Infraestrutura de classe mundial
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tecnologia de ponta para garantir performance, segurança e confiabilidade em cada VPS.
          </p>
        </div>

        <ScrollStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
